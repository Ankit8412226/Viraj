'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-2xl">V</span>
        </div>
        <div className="text-amber-700 font-semibold tracking-wide">Viraj Jewellers</div>
        <div className="w-40 h-1 bg-amber-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-amber-600 rounded-full animate-[loadingbar_1s_ease_infinite]"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loadingbar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}


