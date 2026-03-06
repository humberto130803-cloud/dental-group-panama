import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Locations from './components/Locations'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="bg-white text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <BeforeAfter />
      <Team />
      <Reviews />
      <Locations />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
