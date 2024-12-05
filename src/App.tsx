import "./App.scss"
import Header from "./pages/_partials/header/Header"
import { About, BackToTop, Contact, Divider, Home, Skills, Projects } from "./pages"

function App() {
  return <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Divider />
      <Projects />
      <Contact />
    </main>
    <BackToTop />
  </>
}

export default App
