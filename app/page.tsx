import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="page-content">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-full px-8 py-4">
          <div style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "2037 / 500" }}>
            <Image
              src="/critters.png"
              alt=""
              fill
              sizes="(max-width: 400px) 100vw, 400px"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}