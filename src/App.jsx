import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Main from "./components/Main"
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <NavBar/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
