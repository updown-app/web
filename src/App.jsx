import Layout from './components/Layout'
import HeroSection from './sections/HeroSection'
import ProductIntroSection from './sections/ProductIntroSection'
import FeaturesSection from './sections/FeaturesSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductIntroSection />
      <FeaturesSection />
    </Layout>
  )
}
