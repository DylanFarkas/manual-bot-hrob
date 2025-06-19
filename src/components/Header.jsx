import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        <h1 className="font-bold text-xl text-blue-700">Manual Bot HROB</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className='cursor-pointer hover:text-blue-600 transition ease-in-out'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 text-sm font-medium text-gray-700">
          <li><a href="#home" className=" hover:text-blue-600">Inicio</a></li>
          <li><a href="#how-to-use" className="hover:text-blue-600">Cómo usar</a></li>
          <li><a href="#options" className="hover:text-blue-600">Opciones</a></li>
          <li><a href="#guide" className="hover:text-blue-600">Guía paso a paso</a></li>
          <li><a href="#errors" className="hover:text-blue-600">Errores</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        </ul>
      </nav>
      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start px-6 pb-4 text-sm font-medium text-gray-700 space-y-2 bg-white shadow">
          <li><a href="#home" className="text-lg hover:text-blue-600" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#how-to-use" className="text-lg hover:text-blue-600" onClick={toggleMenu}>Cómo usar</a></li>
          <li><a href="#options" className="text-lg hover:text-blue-600" onClick={toggleMenu}>Opciones</a></li>
          <li><a href="#guide" className="text-lg hover:text-blue-600" onClick={toggleMenu}>Guía paso a paso</a></li>
          <li><a href="#errors" className="text-lg hover:text-blue-600" onClick={toggleMenu}>Errores</a></li>
          <li><a href="#faq" className="text-lg hover:text-blue-600" onClick={toggleMenu}>FAQ</a></li>
        </ul>
      )}
    </header>
  );
};

export default Header;