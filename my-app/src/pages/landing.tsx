import Nav from "../components/nav";
import Home from "../components/home";
import Footer from "../components/footer";

function Landing() {
  return (
    <section className="min-h-screen flex flex-col">
      <Nav />
      <Home />
      <Footer />    
    </section>
  );
};

export default Landing