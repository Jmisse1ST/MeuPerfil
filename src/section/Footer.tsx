import { useState, useEffect } from 'react';

const ColorChangingFooter = () => {
  const colors = [
    
    'bg-gradient-to-r from-indigo-500 via-sky-300 to-sky-700',
    'bg-gradient-to-r from-indigo-700 via-sky-500 to-sky-300',
    'bg-gradient-to-r from-indigo-300 via-sky-700 to-sky-500',
    'bg-gradient-to-r from-indigo-500 via-sky-300 to-sky-700',
    'bg-gradient-to-r from-indigo-700 via-sky-500 to-sky-300'
  
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`${colors[currentColorIndex]} text-white transition-colors duration-1000 ease-in-out`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm md:text-base font-light mb-2">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <p className="text-xs md:text-sm font-medium">
            Jemisse Macuacua
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ColorChangingFooter;