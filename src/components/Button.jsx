import { APP_URL } from '../constants/urls'

const VARIANT_CLASSES = {
  primary:
    'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg shadow-[#3b82f6]/25',
  secondary:
    'border border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B]',
}

export default function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  href,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0f172a] disabled:opacity-50 disabled:cursor-not-allowed'
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary

  if (Component === 'a') {
    return (
      <a
        href={href || APP_URL}
        className={`${base} ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
