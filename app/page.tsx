'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import Logo from './components/Logo';

const suggestions = [
  {
    id: 1,
    name: 'مرسيدس بنز S-Class',
    model: '2023 S580',
    price: '8,500,000',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=75',
  },
  {
    id: 2,
    name: 'بي ام دبليو',
    model: '2023 M5 Competition',
    price: '6,200,000',
    image: 'https://images.unsplash.com/photo-1583356322882-85559b472f56?w=400&q=75',
  },
  {
    id: 3,
    name: 'أودي RS e-tron GT',
    model: '2023 RS',
    price: '5,900,000',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=75',
  },
  {
    id: 4,
    name: 'بورش 911 توربو',
    model: '2023 Turbo S',
    price: '7,800,000',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=75',
  },
  {
    id: 5,
    name: 'لامبورجيني هوراكان',
    model: '2023 EVO',
    price: '9,500,000',
    image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=75',
  },
  {
    id: 6,
    name: 'فيراري SF90',
    model: '2023 Stradale',
    price: '12,000,000',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=75',
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8">
      <Logo />

      <div className="bg-gray-800 rounded-lg p-6 fade-up">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">DRIVE TEST</h2>
            <p className="text-gray-400">12/12/2025</p>
            <p className="text-gray-400">LOCATION: Dubai Motor City</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="badge-vip">VIP</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=75"
              alt="Luxury car showcase"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
              loading="eager"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=75"
              alt="Sports car showcase"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-right">اقتراحات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestions.map((car) => (
            <div 
              key={car.id} 
              className="product-card fade-up"
            >
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover product-image"
                  loading="eager"
                />
              </div>
              <div className="product-info text-right">
                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                <p className="text-gray-400 mb-2">{car.model}</p>
                <p className="text-primary font-bold">{car.price} جنيه مصري</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}