import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import CustomerReview from './components/CustomerReview'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import EstimateCalculator from './components/EstimateCalculator'
import YouTubeButton from './components/YouTubeButton'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <ThemeToggle />
            <EstimateCalculator />
            <YouTubeButton />
            <HeroSection />
            <Services />
            <Portfolio />
            <About />
            <CustomerReview />
            <Contact />
        </div>
    )
}

export default App
