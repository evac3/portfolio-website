import Link from "next/link";

export default function Footer() {
    return (
    <footer className="w-full px-6 py-2">
      <div className="flex flex-col sm:flex-row gap-[8px] items-start
        sm:justify-between w-full sm:items-start">
        <div className="flex items-center space-x-1 mb-0">
          <a 
            href="https://www.linkedin.com/in/eva-y-cao"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block a11y-focus hover:text-[#e3c0b6] transition-colors">
            LINKEDIN, 
            <span className="block h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </a>
          <Link 
            href="/Eva_Cao_Resume.pdf"
            target="_blank"
            className="inline-block a11y-focus group hover:text-[#e3c0b6] transition-colors">
            RESUME, 
            <span className="block h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
          <a 
            href="https://github.com/evac3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block a11y-focus group hover:text-[#e3c0b6] transition-colors">
            GITHUB
            <span className="block h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </a>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-4 ml-auto flex items-center space-x-1 sm:space-x-1 w-full sm:justify-end">
            <Link 
              href="mailto:eva.y.cao@gmail.com"
              className="inline-block a11y-focus group hover:text-[#e3c0b6] transition-colors">
              EVA.Y.CAO@GMAIL.COM
              <span className="block h-[1px] bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
        </div>
      </div>
    </footer>
  )
}