export default function Section({ children, className = '', id, ...props }) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-32 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
