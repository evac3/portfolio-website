import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

export default function VisArts() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="page-content">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2>
            Visual Arts ʚ₍ᐢ. .ᐢ₎ɞ
          </h2>
          <p>
            ⚠ Under construction!! ⚠ 
          </p>
          <p> 
            Some artwork and design work I've made over the years!
          </p>
          <br></br>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}