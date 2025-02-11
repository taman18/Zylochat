'use client'
import { useState } from 'react';
import { Menu, X, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = ['Home', 'Pricing', 'Features', 'About'];

  return (
    <header className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black shadow-lg">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:64px_64px]" />
      
     
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] -top-32 -left-32 animate-pulse" />
        <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-[100px] -bottom-32 -right-32 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <span className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-extrabold text-white shadow-lg">
            L
          </span>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-white via-indigo-300 to-white bg-clip-text text-transparent tracking-wide">
            Logo
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-indigo-200/80 hover:text-white transition-all duration-300 font-medium tracking-wide after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Call to Actions */}
        <div className="hidden md:flex items-center space-x-6">
         <Link href='/signin'>
         <button className="group relative px-6 py-3 rounded-lg font-medium flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-md">
            <span className="relative flex items-center gap-2 text-white">
              Login
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          </Link>

          <button className="group px-6 py-3 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/20 backdrop-blur-lg transition-all flex items-center gap-3 text-white">
            <span className="p-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition">
              <Play className="w-4 h-4" />
            </span>
            Watch Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden px-4 py-2 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/10 transition-all"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-2xl text-indigo-200/80 hover:text-white transition-all duration-300"
            >
              {link}
            </a>
          ))}
          <button className="group px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg text-white">
            Login
          </button>
          <button 
            onClick={toggleMobileMenu} 
            className="absolute top-6 right-6 px-4 py-2 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/10 transition-all"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;