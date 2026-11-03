import { useEffect } from "react";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const prev = () => onNavigate((index - 1 + items.length) % items.length);
  const next = () => onNavigate((index + 1) % items.length);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      else if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/95 flex flex-col justify-center items-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-dusty-rose transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <MdClose className="text-4xl" />
      </button>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 text-white hover:text-dusty-rose transition-colors focus:outline-none z-50"
        aria-label="Previous Image"
      >
        <MdChevronLeft className="text-3xl md:text-5xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 text-white hover:text-dusty-rose transition-colors focus:outline-none z-50"
        aria-label="Next Image"
      >
        <MdChevronRight className="text-3xl md:text-5xl" />
      </button>

      <div className="max-w-4xl max-h-[70vh] flex justify-center items-center relative select-none">
        <img className="max-w-full max-h-[70vh] object-contain shadow-2xl" src={item.image} alt={item.title} />
      </div>

      <div className="mt-8 text-center max-w-2xl px-4">
        <span className="text-dusty-rose text-xs uppercase tracking-widest font-bold block mb-2">
          {item.categoryLabel}
        </span>
        <h2 className="text-white text-2xl md:text-3xl font-heading mb-3">{item.title}</h2>
        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
