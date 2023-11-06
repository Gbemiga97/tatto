import { About, Contact, Footer, GallerySection, Header, Hero, Interview, Skills, Testimonial } from "./sections";


function App() {
  return (
    <div className="max-w-[1920] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
