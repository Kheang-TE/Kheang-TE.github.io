import "./App.scss"
import Header from "./pages/_partials/header/Header"
import { About, Contact, Home, Skills, Works } from "./pages"

function App() {
  return <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  </>
}

export default App
