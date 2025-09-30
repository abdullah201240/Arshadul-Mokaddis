"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#A375F5] backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              <span className="text-[#FFF] text-2xl font-normal not-italic bg-[#9255F6] p-2 rounded-full inline-flex items-center justify-center w-10 h-10" style={{ fontFamily: 'var(--font-lily-script-one)' }}>A</span> <span style={{ fontFamily: 'Kode Mono, monospace' }} className="text-2xl pl-2">Mokaddis</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              size="lg"
              className="bg-[#9255F6] text-white hover:bg-white/90 hover:text-[#A375F5] font-semibold"
            >
              <Link href="/#contact" className="font-bold">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#A375F5] border-b border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                className="w-full bg-white text-[#A375F5] hover:bg-white/90 hover:text-[#A375F5]" 
                asChild
              >
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}