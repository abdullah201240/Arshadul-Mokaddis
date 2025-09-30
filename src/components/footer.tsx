'use client'
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:contact@arshadulmokaddis.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/arshadulmokaddis" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/arshadulmokaddis" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/arshadulmokaddis" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "UI/UX Design", href: "/#services" },
    { name: "Web Design", href: "/#services" },
    { name: "Mobile App Design", href: "/#services" },
    { name: "Brand Identity", href: "/#services" },
    { name: "Design Consulting", href: "/#services" },
  ];

  return (
    // Changed to transparent background to show global gradient
    <footer className="relative text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Arshadul Mokaddis
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Crafting exceptional digital experiences through innovative UI/UX design. Turning ideas into beautiful, functional realities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">contact@arshadulmokaddis.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent"></span>
            </h3>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe to get latest updates on design trends and exclusive content.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 text-sm"
                />
                <Button className="bg-white text-[#7351d7] hover:bg-white/90 rounded-l-none px-4">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/60">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white/80 mr-2">Connect:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-[#7351d7] transition-all hover:scale-110 hover:shadow-lg hover:shadow-white/20"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-white/80 flex items-center justify-center space-x-1">
                <span>&copy; {currentYear} Arshadul Mokaddis</span>
              </p>
              <p className="text-xs text-white/60 mt-1">All rights reserved.</p>
            </div>

            {/* Scroll to Top - Removed as it's now a global component */}
          </div>
        </div>
      </div>
    </footer>
  );
}