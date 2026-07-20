import Section from '../components/Section'
import { MessageCircle, Lock, Zap, UserPlus } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Messaging',
    description: 'Real-time chat that feels as fast as a face-to-face conversation.',
  },
  {
    icon: Lock,
    title: 'End-to-End Secure',
    description: 'Your conversations stay private. Security is built in, not added on.',
  },
  {
    icon: UserPlus,
    title: 'Modern Design',
    description: 'Clean, intuitive interface that puts your connections first.',
  },
  {
    icon: MessageCircle,
    title: 'Group Ready',
    description: 'Create groups, share media, and stay connected with communities.',
  },
]

export default function FeaturesSection() {
  return (
    <Section id="features">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] lg:text-4xl">
          Why UpDown?
        </h2>
        <p className="mt-4 text-lg text-[#CBD5E1]">
          Everything you need to communicate effectively — packed in one app.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-[#334155] bg-[#1E293B] p-6 transition-colors hover:border-[#3b82f6]/50"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#F8FAFC]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
