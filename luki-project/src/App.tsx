import LoadingScreen from './components/LoadingScreen'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollStory from './components/ScrollStory'
import ProductSection from './components/ProductSection'
import AboutSection from './components/AboutSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { WaitlistProvider } from './context/WaitlistContext'

export default function App() {
  return (
    <WaitlistProvider>
      <AnimatedBackground />
      <LoadingScreen />
      <Header />
      <main id="top">
        <Hero />
        <ScrollStory />
        <ProductSection />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </WaitlistProvider>
  )
}
