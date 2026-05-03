import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, COMPANY_INFO } from '@/data/navigation';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-6 lg:px-12 flex justify-between items-center border-b border-gray-100',
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-white py-6'
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#20C7D9] flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0B1F33]">
            Спиро Медикал
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-[13px] font-semibold uppercase tracking-widest text-[#5B6B7A]">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'transition-colors hover:text-[#0A84FF]',
                  isActive ? 'text-[#0A84FF]' : 'text-[#5B6B7A]'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Button size="sm" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#0B1F33] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 transform lg:hidden pt-24 px-6 flex flex-col',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-4 text-[13px] font-semibold uppercase tracking-widest flex-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'py-3 border-b border-gray-100',
                  isActive ? 'text-[#0A84FF]' : 'text-[#0B1F33]'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="py-8 flex flex-col gap-4">
          <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
            Записаться на диагностику
          </Button>
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2" asChild>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}>
              <MessageCircle className="w-5 h-5 text-[#35C99F]" />
              Написать в WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
