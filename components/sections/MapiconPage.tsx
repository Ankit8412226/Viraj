import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const MapIconPage = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Jewelbox+-+Lab+Grown+Diamond+Jewellery+-+Lajpat+Nagar,+Delhi/@28.5706121,77.2396433,17z/data=!4m6!3m5!1s0x390ce381fd937f23:0xa695f92ceb6b3993!8m2!3d28.5706128!4d77.239648!16s%2Fg%2F11wmhmzq80?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div 
        onClick={handleMapClick}
        className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-md w-full"
      >
        {/* Map Background */}
        <div className="relative h-64 bg-gradient-to-br from-blue-100 via-green-50 to-blue-200">
          {/* Street Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-30" viewBox="0 0 400 256">
              <defs>
                <pattern id="streets" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20h40M20 0v40" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#streets)"/>
            </svg>
          </div>

          {/* Area Labels */}
          <div className="absolute top-4 left-4 text-xs font-semibold text-blue-700 bg-white/80 px-2 py-1 rounded">
            Lajpat Nagar
          </div>
          <div className="absolute top-4 right-4 text-xs font-semibold text-green-700 bg-white/80 px-2 py-1 rounded">
            Central Market
          </div>
          <div className="absolute bottom-4 left-4 text-xs font-semibold text-purple-700 bg-white/80 px-2 py-1 rounded">
            Ring Road
          </div>

          {/* Main Pin - Jewelbox */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Pin Shadow */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-sm"></div>
              
              {/* Main Pin */}
              <div className="relative">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-8 left-4 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-red-500"></div>
              </div>
            </div>
          </div>

          {/* Smaller reference pins */}
          <div className="absolute top-12 right-16">
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute bottom-12 left-12">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute top-20 left-20">
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Info Card */}
        <div className="p-6 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Jewelbox - Lab Grown Diamond Jewellery
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Lajpat Nagar, New Delhi
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Open • Closes 9 PM
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <ExternalLink className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600">
                Click to view on Google Maps
              </span>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
      </div>
    </div>
  );
};

export default MapIconPage;