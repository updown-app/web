import Layout from './components/Layout'
import HeroSection from './sections/HeroSection'
import ProductIntroSection from './sections/ProductIntroSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorksSection from './sections/HowItWorksSection'
import VisionSection from './sections/VisionSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductIntroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <VisionSection />
    </Layout>
  )
}
