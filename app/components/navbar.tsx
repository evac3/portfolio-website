"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navLinks = [
    { name: "PROJECTS", href: "/projects" },
    { name: "VISUAL ARTS", href: "/vis-arts" },
    { name: "ABOUT", href: "/about" }
  ];

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
      <Link 
          href="/" 
          className={`group flex items-center gap-3 font-bold text-lg tracking-wider transition-colors ${
            isHome ? "text-white pointer-events-none" : "text-white hover:text-[#e3c0b6]"
          }`}
        >
          <svg width="36" height="36" viewBox="-150 -30 450 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.0775 123.709C37.9607 160.116 177.357 52.7017 140.123 21.2735C102.889 -10.1548 37.7314 127.2 77.292 179.581C-142.617 341.382 283.241 440.325 262.297 229.635M216.548 179.581C112.548 179.581 211.591 -26.8455 251.548 21.2735M77.292 243.603C71.4762 245.931 71.4762 265.72 71.4762 265.72M147.105 243.603C141.289 245.931 141.289 265.72 141.289 265.72" stroke="currentColor" strokeWidth="28" strokeLinecap="round"/>
          </svg>
          <span className="relative inline-block">
            <h6 className="-m-1">EVA CAO</h6>
            <span className={`block h-[1px] bg-current transition-all duration-300 ease-in-out ${
              isHome ? "w-0" : "w-0 group-hover:w-full"
            }`} />
          </span>
        </Link>

        <nav className="flex items-center space-x-6 md:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`a11y-focus group inline-block text-sm tracking-wide transition-all duration-200 ${
                    isActive 
                    ? "font-bold text-secondary-foreground pointer-events-none" : "text-secondary-foreground hover:text-link-foreground"
                }`}
              >
                {link.name}
                <span 
                  className={`block h-[1px] bg-current transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}