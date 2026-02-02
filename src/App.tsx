import "./App.scss";
import { MainLayout } from "./layout";
import { Home, About, Skills, Projects, Contact } from "./sections";
import { Divider } from "./components";

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Skills />
      <Divider />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;
