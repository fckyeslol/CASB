import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Objectives } from "./components/Objectives";
import { Registration } from "./components/Registration";
import { Rules } from "./components/Rules";
import { Jury } from "./components/Jury";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors closeButton />
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Registration />
      <Rules />
      <Jury />
      <Sponsors />
      <Footer />
    </div>
  );
}
