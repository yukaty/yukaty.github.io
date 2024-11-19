import React, { useState } from 'react';
import { Icons } from '../utils/icons';

const NavigationBar = ({ handleNavClick, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-light-bg dark:bg-dark-bg shadow-light dark:shadow-dark transition-colors duration-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-3xl font-extrabold text-light-primary dark:text-dark-primary">
            YukaT
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-primary dark:text-dark-primary p-2 hover:bg-light-secondary/10"
              aria-label="Toggle menu"
            >
              <Icons.Menu size={24} />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavLinks handleNavClick={handleNavClick} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div className={`
        lg:hidden absolute w-full bg-light-bg dark:bg-dark-bg shadow-light dark:shadow-dark
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
      `}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-end gap-4">
            <NavLinks handleNavClick={(section) => {
              handleNavClick(section);
              setIsMenuOpen(false);
            }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ handleNavClick }) => {
  const links = ['about', 'projects', 'skills', 'contact'];

  return links.map(link => (
    <button
      key={link}
      onClick={() => handleNavClick(link)}
      className="text-light-primary dark:text-dark-primary hover:text-light-secondary
                 dark:hover:text-dark-secondary transition-colors duration-200 capitalize
                 py-2 px-4 rounded-lg hover:bg-light-secondary/10"
    >
      {link}
    </button>
  ));
};

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="w-10 h-10 bg-light-primary dark:bg-dark-primary text-light-bg dark:text-dark-bg
               rounded-full flex items-center justify-center hover:bg-light-secondary
               dark:hover:bg-dark-secondary transition-colors duration-200"
    aria-label="Toggle theme"
  >
    {theme === 'light' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
  </button>
);

export default NavigationBar;