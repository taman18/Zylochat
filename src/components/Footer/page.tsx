'use client'
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 px-6 py-12 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-indigo-500/10 animate-pulse" />
      
      
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -bottom-36 -left-36 animate-[bounce_4s_ease-in-out_infinite_alternate]" />
        <div className="absolute w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -top-36 -right-36 animate-[bounce_5s_ease-in-out_infinite_alternate]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <article className="space-y-6 backdrop-blur-sm rounded-xl p-6 border border-white/10 bg-white/5">
            <header className="flex items-center space-x-3">
              <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-xl font-bold text-white">
                L
              </span>
              <span className="text-2xl font-bold text-white tracking-tight">Logo</span>
            </header>
            <p className="text-indigo-200/60 leading-relaxed">
              Transform your social media presence with AI-powered short-form video generation.
            </p>
            <nav className="flex space-x-4">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative p-2 rounded-full transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Icon size={20} className="text-indigo-200 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </nav>
          </article>

          <nav className="space-y-6 backdrop-blur-sm rounded-xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Privacy Policy', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-indigo-200/60 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>


          <address className="space-y-6 not-italic backdrop-blur-sm rounded-xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: 'contact@example.com' },
                { Icon: Phone, text: '123456789' },
                { Icon: MapPin, text: 'Address, City' }
              ].map(({ Icon, text }, index) => (
                <li key={index} className="flex items-center space-x-3 group">
                  <span className="p-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-colors">
                    <Icon size={20} className="text-indigo-200" />
                  </span>
                  <span className="text-indigo-200/60">{text}</span>
                </li>
              ))}
            </ul>
          </address>
        </section>

        <p className="text-sm text-indigo-200/60 text-center border-t border-white/10 mt-12 pt-8">
          © {currentYear} ZyloChat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;