import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../config/config";

export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-white transition-all duration-300 hover:scale-110 hover:bg-[#25d366]"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
