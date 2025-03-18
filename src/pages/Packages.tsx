
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Coffee, Utensils } from 'lucide-react';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import SmoothImage from '@/components/ui/SmoothImage';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';

// Placeholder images for development
const packagesHeroImage = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop";
const standardRoomImage = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop";
const deluxeRoomImage = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop";
const suiteImage = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop";
const dayoutImage = "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop";
const halfboardImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop";
const fullboardImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop";

// Package categories
const categories = [
  { id: 'rooms', name: 'Rooms' },
  { id: 'dayout', name: 'Day Use' },
  { id: 'halfboard', name: 'Half Board' },
  { id: 'fullboard', name: 'Full Board' },
];

// Room packages
const roomPackages = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'Comfortable and elegantly furnished standard room with all essential amenities.',
    price: 199,
    perNight: true,
    image: standardRoomImage,
    features: [
      'King or Twin Beds',
      'Free WiFi',
      'LCD TV with Cable',
      'Room Service',
      'Air Conditioning',
      'Coffee & Tea Facilities',
    ],
    category: 'rooms',
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'Spacious deluxe room with premium furnishings and a breathtaking view.',
    price: 299,
    perNight: true,
    image: deluxeRoomImage,
    features: [
      'King Bed',
      'Free WiFi',
      'LCD TV with Cable',
      'Room Service',
      'Air Conditioning',
      'Coffee & Tea Facilities',
      'Mini Bar',
      'City or Garden View',
    ],
    category: 'rooms',
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and exclusive amenities.',
    price: 499,
    perNight: true,
    image: suiteImage,
    features: [
      'King Bed',
      'Separate Living Area',
      'Free WiFi',
      'LCD TV with Cable',
      'Room Service',
      'Air Conditioning',
      'Coffee & Tea Facilities',
      'Mini Bar',
      'Premium View',
      'Access to Executive Lounge',
    ],
    category: 'rooms',
  },
  {
    id: 4,
    name: 'Day Retreat',
    description: 'Enjoy our hotel facilities for a full day without an overnight stay.',
    price: 99,
    perNight: false,
    image: dayoutImage,
    features: [
      'Access from 10am to 8pm',
      'Private Room',
      'Swimming Pool Access',
      'Fitness Center Access',
      'Welcome Drink',
      '25% Off on Spa Treatments',
    ],
    category: 'dayout',
  },
  {
    id: 5,
    name: 'Half Board Package',
    description: 'Comfortable accommodation with breakfast and dinner included.',
    price: 249,
    perNight: true,
    image: halfboardImage,
    features: [
      'Accommodation',
      'Breakfast Buffet',
      'Dinner at Main Restaurant',
      'Free WiFi',
      'Swimming Pool Access',
      'Fitness Center Access',
    ],
    category: 'halfboard',
  },
  {
    id: 6,
    name: 'Full Board Package',
    description: 'Complete package with all meals included for a worry-free stay.',
    price: 349,
    perNight: true,
    image: fullboardImage,
    features: [
      'Accommodation',
      'Breakfast Buffet',
      'Lunch at Main Restaurant',
      'Dinner at Main Restaurant',
      'Free WiFi',
      'Swimming Pool Access',
      'Fitness Center Access',
      'One Complimentary Spa Treatment',
    ],
    category: 'fullboard',
  },
];

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('rooms');
  const filteredPackages = roomPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <SmoothImage
            src={packagesHeroImage}
            alt="Luxurious Room"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        </div>
        
        <div className="relative hotel-container text-center text-white space-y-6">
          <AnimatedHeading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow"
            animation="fade-in"
          >
            Our Packages
          </AnimatedHeading>
          <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Discover our carefully curated packages designed to provide the perfect stay for every occasion.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <Section className="bg-white pt-8 pb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-6 py-3 rounded-md transition-all duration-300 font-medium text-base',
                activeCategory === category.id 
                  ? 'bg-hotel-navy text-white' 
                  : 'bg-hotel-beige/50 text-hotel-navy hover:bg-hotel-beige'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Packages List Section */}
      <Section className="bg-hotel-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="glass-card hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-52 overflow-hidden rounded-t-lg relative">
                <SmoothImage
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {pkg.category === 'rooms' && (
                    <div className="flex items-center text-white">
                      <Users size={18} className="mr-2" />
                      <span>2 Adults</span>
                    </div>
                  )}
                  {(pkg.category === 'halfboard' || pkg.category === 'fullboard') && (
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center">
                        <Coffee size={18} className="mr-1" />
                        <span>Breakfast</span>
                      </div>
                      {pkg.category === 'fullboard' && (
                        <div className="flex items-center">
                          <Utensils size={18} className="mr-1" />
                          <span>Full Meals</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl font-semibold text-hotel-navy">
                    {pkg.name}
                  </h3>
                  <div className="text-right">
                    <p className="font-bold text-xl text-hotel-navy">
                      ${pkg.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      {pkg.perNight ? 'per night' : 'per day'}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  {pkg.description}
                </p>
                
                <ul className="space-y-2">
                  {pkg.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 4 && (
                    <li className="text-hotel-navy font-medium text-sm">
                      +{pkg.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <div className="pt-4">
                  <a 
                    href="#booking-form" 
                    className="btn-primary w-full flex justify-center items-center group"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section id="booking-form" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
              Book Your Stay
            </AnimatedHeading>
            <p className="text-gray-700 mt-4">
              Fill out the form below to book your preferred package. Our team will contact you to confirm your reservation.
            </p>
          </div>
          
          <div className="glass-card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-gray-700 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="package" className="text-gray-700 font-medium">
                    Package <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="package"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  >
                    <option value="" disabled selected>Select a package</option>
                    {roomPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} (${pkg.price} {pkg.perNight ? 'per night' : 'per day'})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="check-in" className="text-gray-700 font-medium">
                    Check-in Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="check-in"
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="check-out" className="text-gray-700 font-medium">
                    Check-out Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="check-out"
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="adults" className="text-gray-700 font-medium">
                    Adults <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="adults"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  >
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="children" className="text-gray-700 font-medium">
                    Children
                  </label>
                  <select
                    id="children"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  >
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="special-requests" className="text-gray-700 font-medium">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  placeholder="Any special requirements or requests..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex justify-center items-center"
              >
                Submit Booking Request
              </button>
              
              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our <Link to="/" className="text-hotel-navy hover:underline">terms and conditions</Link>.
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* Policy Section */}
      <Section className="bg-hotel-beige/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-4">
              Booking Policy
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>A valid credit card is required to guarantee your reservation.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Rates are per room/per night and are subject to availability.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Additional charges may apply for extra guests.</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-4">
              Cancellation Policy
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Free cancellation up to 48 hours before check-in.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Late cancellations will be charged one night's stay.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>No-shows will be charged for the full reservation.</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-4">
              Check-in & Check-out
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Check-in time: 3:00 PM</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Check-out time: 11:00 AM</span>
              </li>
              <li className="flex items-start">
                <Check className="text-hotel-navy mr-2 flex-shrink-0 mt-1" size={16} />
                <span>Early check-in and late check-out available upon request and subject to availability.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Packages;
