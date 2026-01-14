import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Главная' },
    { path: '/video', label: 'AI Видео' },
    { path: '/photo', label: 'AI Фото' },
    { path: '/order', label: 'Заказать' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight">AI Studio</span>
            <span className="text-xs text-muted-foreground">by David.Korolev</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link py-1 text-sm font-medium ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Меню"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
