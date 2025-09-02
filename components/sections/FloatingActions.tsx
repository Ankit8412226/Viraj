'use client';

import { Button } from '@/components/ui/button';
import {
    Calculator,
    ChevronUp,
    DollarSign,
    Home,
    MapPin,
    MessageSquare,
    Scale
} from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { useState } from 'react';

export default function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    { icon: <Scale className="h-5 w-5" />, label: 'Gold Check', section: 'gold-check', color: 'from-yellow-500 to-amber-600' },
    { icon: <Home className="h-5 w-5" />, label: 'Home Visit', section: 'doorstep-service', color: 'from-blue-500 to-indigo-600' },
    { icon: <Calculator className="h-5 w-5" />, label: 'Loan Calc', section: 'loan-calculator', color: 'from-purple-500 to-pink-600' },
    { icon: <DollarSign className="h-5 w-5" />, label: 'Sell Gold', section: 'sell-gold', color: 'from-green-500 to-emerald-600' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Contact', section: 'contact', color: 'from-red-500 to-pink-600' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-110"
      >
        <MapPin className="h-6 w-6" />
      </Button>

      {/* Expanded Action Buttons */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 space-y-3">
          {actions.map((action, index) => (
            <Button
              key={action.section}
              onClick={() => scrollToSection(action.section)}
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${action.color} hover:shadow-lg text-white transform transition-all duration-300 hover:scale-110 animate-in slide-in-from-bottom-${index + 1}`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={action.label}
            >
              {action.icon}
            </Button>
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="mt-3 w-16 h-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-110"
        title="Scroll to Top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
