import Section from '../components/Section'

export default function ProductIntroSection() {
  return (
    <Section id="product-intro">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] lg:text-4xl">
          Fast. Secure. Modern.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#CBD5E1]">
          UpDown is built from the ground up to give you a seamless communication
          experience. Whether you’re connecting with friends or collaborating
          with a team, everything happens in real time, with security and
          simplicity at the core.
        </p>
      </div>
    </Section>
  )
}
