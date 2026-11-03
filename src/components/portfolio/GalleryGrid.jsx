export default function GalleryGrid({ items, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={item.title}
          onClick={() => onSelect(index)}
          className="relative group cursor-pointer overflow-hidden shadow-md aspect-[4/5] bg-cream"
        >
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={item.image}
            alt={item.title}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-dusty-rose text-[0.6rem] uppercase tracking-widest font-bold mb-1">
              {item.categoryLabel}
            </span>
            <h3 className="text-white text-xl font-heading font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
