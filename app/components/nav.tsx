"use client";

import Link from 'next/link';

export function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    // Floating layout track wrapping the nav container
    <div className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center selection:bg-indigo-500/30">
      <nav className="w-full max-w-2xl bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
        <div className="px-6 h-14 flex items-center justify-between">
          
          {/* Logo Brand Anchor with interactive smooth scroll */}
          <Link 
            href="#about" 
            className="font-mono font-extrabold text-sm tracking-tighter text-slate-900 group flex items-center gap-1.5"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-indigo-600 group-hover:rotate-12 transition-transform duration-300 ease-out">⚡</span> 
            AN<span className="text-slate-400 font-light">.dev</span>
          </Link>
          
          {/* Creative Interactive Track */}
          <div className="flex items-center space-x-1 text-sm font-medium relative group/track">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-1.5 text-slate-600 hover:text-indigo-600 font-semibold transition-colors duration-300 rounded-xl z-10 group/item"
                onClick={(e) => {
                  // Smooth Interlocking Page Scroll Animation
                  e.preventDefault();
                  const targetElement = document.querySelector(item.href);
                  if (targetElement) {
                    targetElement.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {item.name}
                
                {/* Active Underline Morph Track */}
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full" />
                
                {/* Kinetic Pill Background Overlay */}
                <span className="absolute inset-0 bg-indigo-50/60 rounded-xl opacity-0 scale-75 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 ease-out -z-10" />
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </div>
  );
}