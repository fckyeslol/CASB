import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Video } from "./components/Video";
import { About } from "./components/About";
import { Objectives } from "./components/Objectives";
import { Registration } from "./components/Registration";
import { Rules } from "./components/Rules";
import { Jury } from "./components/Jury";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors closeButton />
      <Navbar />
      <Hero />
      <Video />
      <About />
      <Objectives />
      <Registration />
      <Rules />
      <Jury />
      <Footer />
    </div>
  );
}
