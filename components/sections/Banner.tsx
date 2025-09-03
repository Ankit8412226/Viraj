'use client';

import { useEffect, useState } from 'react';

const banners = [
  {
    title: 'Best Rates Guaranteed',
    subtitle: 'Up to 85% of gold value • Instant Cash',
  },
  {
    title: 'Door-Step Gold Services',
    subtitle: 'Home visit for testing, selling and loans',
  },
  {
    title: 'Trusted Since 1985',
    subtitle: 'Secure • Transparent • RBI Registered',
  },
];

export default function Banner() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((prev) => (prev + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 text-center">
        <div key={i} className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-700">
            {banners[i].title}
          </h3>
          <p className="text-gray-700 text-lg">
            {banners[i].subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
