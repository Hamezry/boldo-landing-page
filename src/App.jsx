import {
  Navbar,
  Header,
  ServicesSectionOne,
  ServicesSectionTwo,
  Testimonials,
  ServicesSectionThree,
  Blogs,
  Footer,
} from "./components";

const App = () => (
  <div className="w-full bg-white relative bg-hero-background">
    <Navbar />
    <Header />
    <main>
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <Testimonials />
      <ServicesSectionThree />
      <Blogs />
    </main>
    <Footer />
  </div>
);

export default App;

