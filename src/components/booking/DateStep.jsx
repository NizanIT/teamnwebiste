import { useAvailability, useDateAvailability } from "../../hooks/useAvailability";
import { toISODate } from "../../utils/date";
import { bookingSlots } from "../../data/bookingSlots";
import { isSlotOpen, slotStatus } from "../../utils/booking";
import DateStatusNote from "./DateStatusNote";
import LocationPicker from "./LocationPicker";
import SlotPicker from "./SlotPicker";
import StepButtons from "./StepButtons";
import StepTitle from "./StepTitle";
import UpcomingDates from "./UpcomingDates";

// Step 1: pick a date (quick picks or date input) and an event slot.
export default function DateStep({ date, onDateChange, slotId, onSlotChange, locations, regionId, onRegionChange, districtId, onDistrictChange, onNext }) {
  const { getNextOpenDates } = useAvailability();
  const { availability, loading, error } = useDateAvailability(date);

  // Only the slots the CRM still has room for on this date.
  const openSlots = date && !loading && !error ? bookingSlots.filter((s) => isSlotOpen(s, availability)) : [];
  const canContinue = Boolean(districtId) && openSlots.some((s) => s.id === slotId);

  return (
    <div className="space-y-8">
      <StepTitle
        title="1. Location, Date & Slot"
        subtitle="Tell us where and when. You'll see only the slots still open on our calendar."
      />

      <LocationPicker
        regions={locations.regions}
        loading={locations.loading}
        error={locations.error}
        regionId={regionId}
        districtId={districtId}
        onRegionChange={onRegionChange}
        onDistrictChange={onDistrictChange}
      />

      <UpcomingDates dates={getNextOpenDates(8)} selected={date} onSelect={onDateChange} />

      <div className="border border-ink/15 bg-cream p-5">
        <label htmlFor="booking-date" className="block text-xs font-bold uppercase tracking-wider text-ink/70">
          Or Pick Specific Wedding Date
        </label>
        <input
          id="booking-date"
          type="date"
          min={toISODate(new Date())}
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
        />
        {date && <DateStatusNote status={availability?.status} loading={loading} error={error} />}
      </div>

      <SlotPicker
        date={date}
        slots={openSlots}
        statusOf={(s) => slotStatus(s, availability)}
        selectedId={slotId}
        onSelect={onSlotChange}
        loading={loading}
        error={error}
      />

      <StepButtons onNext={onNext} nextLabel="Continue to Packages" nextDisabled={!canContinue} />
    </div>
  );
}
