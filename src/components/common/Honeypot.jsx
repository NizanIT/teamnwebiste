// A hidden field people never see or fill, but form-filling bots do.
// The CRM quietly ignores any enquiry where it has a value.
export default function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
