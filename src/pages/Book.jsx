import Container from "../components/common/Container";
import Footer from "../components/layout/Footer";
import BookingHeader from "../components/booking/BookingHeader";
import BookingSuccess from "../components/booking/BookingSuccess";
import BookingSummary from "../components/booking/BookingSummary";
import DateStep from "../components/booking/DateStep";
import DetailsStep from "../components/booking/DetailsStep";
import PackageStep from "../components/booking/PackageStep";
import useBookingForm from "../hooks/useBookingForm";
import useContact from "../hooks/useContact";
import { buildBookingWhatsAppUrl } from "../utils/booking";

export default function Book() {
  const b = useBookingForm();
  const contact = useContact();

  const whatsappUrl = buildBookingWhatsAppUrl({
    baseUrl: contact.whatsappUrl,
    form: b.form,
    date: b.date,
    slot: b.slot,
    location: b.location,
    pkg: b.pkg,
    packagePrice: b.totals.packagePrice,
    selectedAddons: b.selectedAddons,
    grandTotal: b.totals.grandTotal,
  });

  return (
    <>
      <BookingHeader step={b.step} onStepChange={b.setStep} canAdvance={Boolean(b.date && b.slot && b.location)} />

      <section className="bg-ivory py-12 lg:py-20">
        <Container>
          {b.isSubmitted ? (
            <BookingSuccess
              name={b.form.name}
              date={b.date}
              slot={b.slot}
              pkg={b.pkg}
              totals={b.totals}
              whatsappUrl={whatsappUrl}
            />
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
              <div>
                {b.step === 1 && (
                  <DateStep
                    date={b.date}
                    onDateChange={b.setDate}
                    slotId={b.slotId}
                    onSlotChange={b.setSlotId}
                    locations={b.locations}
                    regionId={b.regionId}
                    onRegionChange={b.setRegionId}
                    districtId={b.districtId}
                    onDistrictChange={b.setDistrictId}
                    onNext={() => b.setStep(2)}
                  />
                )}
                {b.step === 2 && (
                  <PackageStep
                    packages={b.packages}
                    loading={b.packagesLoading}
                    error={b.packagesError}
                    selectedPackageId={b.pkg?.id}
                    onSelectPackage={b.setPackageId}
                    location={b.location}
                    addons={b.addons}
                    selectedAddonIds={b.addonIds}
                    onToggleAddon={b.toggleAddon}
                    total={b.totals.grandTotal}
                    onBack={() => b.setStep(1)}
                    onNext={() => b.setStep(3)}
                  />
                )}
                {b.step === 3 && (
                  <DetailsStep
                    form={b.form}
                    onChange={b.updateField}
                    onBack={() => b.setStep(2)}
                    onSubmit={b.submit}
                    sending={b.sending}
                    error={b.sendError}
                    honeypot={b.honeypot}
                    onHoneypotChange={b.setHoneypot}
                    review={{ date: b.date, slot: b.slot, location: b.location, pkg: b.pkg, selectedAddons: b.selectedAddons, totals: b.totals }}
                    onEdit={b.setStep}
                  />
                )}
              </div>

              <div>
                <BookingSummary
                  date={b.date}
                  slot={b.slot}
                  location={b.location}
                  pkg={b.pkg}
                  selectedAddons={b.selectedAddons}
                  totals={b.totals}
                  whatsappUrl={whatsappUrl}
                  whatsappLabel={contact.phone}
                />
              </div>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </>
  );
}
