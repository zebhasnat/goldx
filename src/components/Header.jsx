
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Navigation */}
              <div className="flex items-center gap-12">
                  <div className=" text-2xl font-bold tracking-tight">
            <img src="/logo.svg" />
  
          </div>

        </div>

        <div className="flex items-center gap-4">
                 <button
        style={{ background: "linear-gradient(135deg, #FFBF00 0%, #FF8000 100%)" }}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 max-sm:mb-6">
          Get started
          <span>→</span>
        </button>
         
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          
                  <button
          
          className="w-full px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition ">
            Get started
          </button>
        </nav>
      )}
    </header>
  )
}
