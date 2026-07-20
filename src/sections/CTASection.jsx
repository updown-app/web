import Section from '../components/Section'
import Button from '../components/Button'
import { APP_URL } from '../constants/urls'

export default function CTASection() {
  return (
    <Section id="cta">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] lg:text-4xl">
          Ready to start?
        </h2>
        <p className="mt-4 text-lg text-[#CBD5E1]">
          Join UpDown today and experience the future of social communication.
        </p>
        <div className="mt-10">
          <Button as="a" href={APP_URL} variant="primary" className="px-8 py-4 text-base">
            Get Started Free
          </Button>
        </div>
      </div>
    </Section>
  )
}
