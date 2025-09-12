"use client";

import { Button } from "@/components/ui/button";
import {
  Calculator,
  ChevronUp,
  DollarSign,
  Home,
  MapPin,
  MessageSquare,
  Scale,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.491 3.488" />
  </svg>
);

export default function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "9810100561"; // Update with your actual WhatsApp number
    const message = encodeURIComponent(
      "Hi! I would like to know more about your cash for gold services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // close when clicking outside MapPin
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    }
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  const actions = [
    {
      icon: <Scale className="h-5 w-5" />,
      label: "Gold Check",
      section: "gold-check",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home Visit",
      section: "doorstep-service",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      label: "Loan Calc",
      section: "cash for gold-calculator",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Sell Gold",
      section: "sell-gold",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Contact",
      section: "contact",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={wrapperRef}>
      {/* Main Floating Button */}
      <div className="hidden lg:block relative">
        {/* WhatsApp Floating Icon (moved to middle) */}
        <Button
          onClick={openWhatsApp}
          className="fixed top-1/2 right-6 -translate-y-1/2 w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white 
             hover:scale-110 hover:shadow-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center animate-float"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </Button>

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-110"
        >
          <MapPin className="h-6 w-6" />
        </Button>
      </div>

      {/* On small screens show two quick action buttons with gap */}
      <div className="flex lg:hidden gap-3">
        <Button
          onClick={() => scrollToSection("doorstep-service")}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl"
          title="Home Visit"
        >
          <Home className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-xl"
          title="Contact"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
        {/* WhatsApp button for mobile */}
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl"
          title="WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Expanded Action Buttons */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 space-y-3">
          {actions.map((action, index) => (
            <Button
              key={action.section}
              onClick={() => scrollToSection(action.section)}
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${
                action.color
              } hover:shadow-lg text-white transform transition-all duration-300 hover:scale-110 animate-in slide-in-from-bottom-${
                index + 1
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={action.label}
            >
              {action.icon}
            </Button>
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      <div className="hidden lg:block">
        <Button
          onClick={scrollToTop}
          className="mt-3 w-16 h-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-2xl transform transition-all duration-300 hover:scale-110"
          title="Scroll to Top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
