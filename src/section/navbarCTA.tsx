import { useState, useEffect } from 'react';



const NavbarCTA = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Navbar Desktop */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl mx-auto z-50 transition-all duration-300 rounded-full ${scrolled ? 'bg-white/10 backdrop-blur-lg py-3 shadow-lg ring-1 ring-white/10' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - Lado Esquerdo */}
          <a 
            href="/" 
            className={`font-mono text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-sky-600 ' : 'text-white'}`}
          >
            James
          </a>

          {/* Links - Lado Direito (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className={`font-mono text-lg transition-colors duration-300 hover:text-white/80 ${scrolled ? 'text-sky-600 ' : 'text-white'}`}
              >
                Sobre
              </a>
              <a
                href="/"
                className={`font-mono text-lg transition-colors duration-300 hover:text-white/80 ${scrolled ? 'text-sky-600 ' : 'text-white'}`}
              >
                Projetos
              </a>
          </div>
          </div>


          

          {/* Botão Mobile */}
          <button 
            className={`md:hidden  focus:outline-none ${scrolled ? 'text-sky-600 ' : 'text-white'} `}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-black/50 backdrop-blur-lg rounded-2xl z-40 py-4 px-6 ring-1 ring-white/10">
          <div className="flex flex-col space-y-4">
            <a 
              href="/sobre" 
              className="font-mono text-white text-lg py-2 px-4 hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="/projetos" 
              className="font-mono text-white text-lg py-2 px-4 hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarCTA;