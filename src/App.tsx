import "./App.scss"
import Header from "./pages/_partials/header/Header"
import { About, Contact, Divider, Home, Skills, Works } from "./pages"

function App() {
  return <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Divider />
      <Works />
      <Contact />
    </main>
  </>
}

export default App
