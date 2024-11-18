import "./App.scss"
import Header from "./pages/_partials/header/Header"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Works from "./pages/works/Works"

function App() {

  return <>
    <Header />
    <main>
      <Home />
      <About />
      <Works />
      <Contact />
    </main>
  </>
}

export default App
