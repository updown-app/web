import Section from '../components/Section'

const STEPS = [
  {
    number: '01',
    title: 'Create your account',
    description:
      'Sign up in seconds with just your email. No phone number required.',
  },
  {
    number: '02',
    title: 'Connect with people',
    description:
      'Find friends, add contacts, and build your network effortlessly.',
  },
  {
    number: '03',
    title: 'Communicate instantly',
    description:
      'Send messages, share photos, and stay in real‑time sync across all devices.',
  },
]

export default function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] lg:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-[#CBD5E1]">
          Three simple steps to get started with UpDown.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-[#334155] bg-[#1E293B] p-6"
          >
            <span className="text-4xl font-extrabold text-[#3b82f6]/20">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-[#F8FAFC]">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
