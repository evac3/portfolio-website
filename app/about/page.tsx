import Image from "next/image";
import codingDoodle from "../../public/about/coding_doodle.png";
import artDoodle from "../../public/about/art_doodle.png";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="page-content">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center justify-center h-full px-8 py-4">
          <div className="order-2 md:order-1 p-6 rounded-lg">
            <h2>
              Hi, I'm Eva! ๋࣭ ⭑(ᐢ. .ᐢ )
            </h2>
            <p> 
              I'm a student in the Computer Science Honors program at Texas A&M University also pursuing minors in 
              mathematics and electrical engineering.
            </p>
            <p>
              I'm especially interested in interdisciplinary projects merging design and engineering in 
              human-computer interaction, embedded systems, and medical applications!
            </p>
            <br></br>
            <p>
              You can also find me organizing hackathons as a Creative Director at{" "}
              <a 
                href="https://tamuhack.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block a11y-focus group text-[#708DAF] hover:text-[#e3c0b6] font-bold transition-colors">
                TAMUHack ↗
              </a> 
              {" "}and creating content and engaging with my community as the Technical Marketing Chair at{" "}
              <a 
                href="https://www.sasetamu.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block a11y-focus group text-[#708DAF] hover:text-[#e3c0b6] font-bold transition-colors">
                SASE TAMU ↗
              </a>
              .
            </p>
          </div>
          
          <div className="order-1 md:order-2 p-6 rounded-lg flex items-center justify-center">
            <div className="coin-flip w-72 h-64">
              <div className="coin-flip-inner">
                <div className="coin-face coin-image-a relative w-full h-full">
                  <Image 
                    src={codingDoodle} 
                    alt="Coding doodle" 
                    fill 
                    className="object-cover rounded-lg" 
                  />
                </div>
                <div className="coin-face coin-image-b relative w-full h-full">
                  <Image 
                    src={artDoodle} 
                    alt="Art doodle" 
                    fill 
                    className="object-cover rounded-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}