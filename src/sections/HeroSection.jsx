import Button from '../components/Button'
import { APP_URL } from '../constants/urls'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3b82f6]/20 via-[#0f172a] to-[#0f172a]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#F8FAFC] lg:text-7xl">
            Connect with{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
              everyone
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#CBD5E1] lg:text-xl">
            UpDown brings fast, secure, and modern communication to your fingertips.
            Stay close to friends, family, and teams — all in one place.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="a" href={APP_URL} variant="primary" className="px-8 py-4 text-base">
              Get Started Free
            </Button>
            <Button as="a" href="#features" variant="secondary" className="px-8 py-4 text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
