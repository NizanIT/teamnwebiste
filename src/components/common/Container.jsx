export default function Container({ className = "", children }) {
  return <div className={`mx-auto w-full px-5 md:px-10 lg:px-16 ${className}`}>{children}</div>;
}
