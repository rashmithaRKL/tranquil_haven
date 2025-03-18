
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import SmoothImage from '@/components/ui/SmoothImage';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';

// Placeholder images for development
const servicesHeroImage = "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070&auto=format&fit=crop";
const spaImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop";
const diningImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop";
const fitnessImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
const poolImage = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop";
const conciergeImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop";
const conferenceImage = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop";

// Services data
const services = [
  {
    id: 'wellness',
    name: 'Wellness & Spa',
    description: 'Experience ultimate relaxation and rejuvenation in our luxury spa with a wide range of treatments.',
    image: spaImage,
    features: [
      'Massage Therapy',
      'Facial Treatments',
      'Body Wraps & Scrubs',
      'Aromatherapy',
      'Hydrotherapy',
      'Couples Spa Packages',
      'Relaxation Lounge',
      'Personalized Treatment Plans',
    ],
    expanded: false,
  },
  {
    id: 'dining',
    name: 'Fine Dining',
    description: 'Savor exquisite cuisine prepared by our renowned chefs in elegant and memorable settings.',
    image: diningImage,
    features: [
      'Gourmet Restaurant',
      'Waterfront Dining',
      'Lounge & Bar',
      'Private Dining',
      'In-Room Dining',
      'Wine Cellar',
      'Chef\'s Special Tasting Menu',
      'Dietary Accommodation',
    ],
    expanded: false,
  },
  {
    id: 'fitness',
    name: 'Fitness Center',
    description: 'Maintain your fitness routine in our state-of-the-art gym with latest equipment and personal trainers.',
    image: fitnessImage,
    features: [
      'Cardio Equipment',
      'Strength Training',
      'Personal Training',
      'Yoga Classes',
      'Pilates',
      'Group Fitness Sessions',
      'Fitness Assessment',
      'Nutritional Guidance',
    ],
    expanded: false,
  },
  {
    id: 'pool',
    name: 'Swimming Pool',
    description: 'Relax and refresh in our stunning indoor and outdoor swimming pools with panoramic views.',
    image: poolImage,
    features: [
      'Indoor Pool',
      'Outdoor Infinity Pool',
      'Hot Tub',
      'Poolside Service',
      'Private Cabanas',
      'Children\'s Pool',
      'Aqua Fitness Classes',
      'Lifeguard on Duty',
    ],
    expanded: false,
  },
  {
    id: 'concierge',
    name: 'Concierge Service',
    description: 'Our dedicated concierge team is available 24/7 to assist with any request or information you need.',
    image: conciergeImage,
    features: [
      'Travel Arrangements',
      'Tour Bookings',
      'Restaurant Reservations',
      'Event Tickets',
      'Transportation Services',
      'Shopping Assistance',
      'Special Occasion Planning',
      'Local Information',
    ],
    expanded: false,
  },
  {
    id: 'business',
    name: 'Business Facilities',
    description: 'Fully equipped meeting and conference rooms for your business needs with latest technology.',
    image: conferenceImage,
    features: [
      'Conference Rooms',
      'Meeting Spaces',
      'Business Center',
      'Audio-Visual Equipment',
      'Video Conferencing',
      'Event Planning',
      'Catering Services',
      'High-Speed Internet',
    ],
    expanded: false,
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const serviceRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  const toggleService = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
      
      // Scroll to the expanded service after a short delay to allow animation
      setTimeout(() => {
        if (serviceRefs.current[id]) {
          serviceRefs.current[id]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <SmoothImage
            src={servicesHeroImage}
            alt="Tranquil Haven Services"
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
            Our Services
          </AnimatedHeading>
          <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Discover the exceptional services and amenities designed to enhance your stay and create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <Section className="bg-white">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Exceptional Experiences
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              ref={el => serviceRefs.current[service.id] = el}
              className={cn(
                "transition-all duration-500 ease-in-out",
                expandedService === service.id ? "bg-white rounded-xl shadow-xl" : "hover:shadow-md rounded-xl"
              )}
            >
              <div 
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 items-center cursor-pointer",
                  expandedService === service.id && "p-6"
                )}
                onClick={() => toggleService(service.id)}
              >
                <div className={cn(
                  "overflow-hidden rounded-xl h-[300px]",
                  expandedService === service.id ? "order-1" : (service.id === 'dining' || service.id === 'pool' || service.id === 'business') ? "order-1 md:order-2" : "order-1"
                )}>
                  <SmoothImage
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full transition-transform duration-500 hover:scale-105"
                    objectFit="cover"
                  />
                </div>
                
                <div className={cn(
                  "space-y-4",
                  expandedService === service.id ? "order-2" : (service.id === 'dining' || service.id === 'pool' || service.id === 'business') ? "order-2 md:order-1" : "order-2"
                )}>
                  <h3 className="font-serif text-3xl font-semibold text-hotel-navy">
                    {service.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    className="flex items-center text-hotel-navy font-medium group"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(service.id);
                    }}
                  >
                    {expandedService === service.id ? "Read Less" : "Learn More"} 
                    <ArrowRight className={cn(
                      "ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1",
                      expandedService === service.id && "rotate-90"
                    )} />
                  </button>
                </div>
              </div>
              
              {/* Expanded content */}
              <div className={cn(
                "grid grid-cols-1 transition-all duration-500 ease-in-out overflow-hidden",
                expandedService === service.id ? "max-h-[1000px] opacity-100 p-6 pt-0" : "max-h-0 opacity-0"
              )}>
                <div className="pt-6 border-t border-gray-200 mt-6">
                  <h4 className="font-serif text-xl font-semibold text-hotel-navy mb-4">
                    Features & Amenities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-2 w-2 bg-hotel-navy rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end mt-8">
                    {service.id === 'wellness' || service.id === 'dining' ? (
                      <Link 
                        to={`/services/${service.id}`} 
                        className="text-hotel-navy font-medium flex items-center group"
                      >
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4 transform transition-all group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <Link 
                        to="/contact" 
                        className="text-hotel-navy font-medium flex items-center group"
                      >
                        Inquire Now
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-all group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Services Section */}
      <Section className="bg-hotel-cream">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Additional Services
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Airport Transfers</h3>
            <p className="text-gray-700 text-center">
              We provide convenient and comfortable transportation services to and from the airport for a seamless travel experience.
            </p>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Childcare Services</h3>
            <p className="text-gray-700 text-center">
              Our experienced staff provides professional childcare services, ensuring your little ones are well taken care of during your stay.
            </p>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 019.07 4h5.86a2 2 0 011.664.89l.812 1.22A2 2 0 0019.07 7H20a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Photography Services</h3>
            <p className="text-gray-700 text-center">
              Capture your special moments with our professional photography services, available for special events or to document your stay.
            </p>
          </div>
        </div>
      </Section>

      {/* Service Packages Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
            Special Service Packages
          </AnimatedHeading>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Enhance your stay with our specially curated service packages designed to provide the ultimate luxury experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="p-1 bg-hotel-gold inline-block rounded-md mb-4">
              <span className="px-3 py-1 text-xs font-bold text-white">POPULAR</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-hotel-navy mb-2">
              Romantic Retreat
            </h3>
            <p className="text-gray-700 mb-6">
              Perfect for couples looking to celebrate a special occasion or simply enjoy a romantic getaway.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Couples massage session</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Private candlelit dinner</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Champagne and chocolates</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Rose petal room decoration</span>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link to="/packages" className="btn-primary">
                View Package
              </Link>
            </div>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-serif text-2xl font-semibold text-hotel-navy mb-2">
              Wellness Escape
            </h3>
            <p className="text-gray-700 mb-6">
              Designed for those seeking relaxation, rejuvenation, and a holistic approach to wellbeing.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Daily yoga or meditation session</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Two spa treatments of your choice</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Healthy meal plan options</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Wellness consultation</span>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link to="/packages" className="btn-primary">
                View Package
              </Link>
            </div>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-serif text-2xl font-semibold text-hotel-navy mb-2">
              Business Excellence
            </h3>
            <p className="text-gray-700 mb-6">
              Tailored for business travelers seeking productivity and comfort during their stay.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Access to business center</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Private meeting room (2 hours/day)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Express laundry service</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hotel-navy mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Airport transfer service</span>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link to="/packages" className="btn-primary">
                View Package
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-hotel-navy">
        <div className="text-center text-white max-w-4xl mx-auto space-y-6">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold">
            Elevate Your Stay with Our Premium Services
          </AnimatedHeading>
          <p className="text-xl text-hotel-beige">
            Contact our concierge to customize your experience and make your stay truly unforgettable.
          </p>
          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-hotel-gold text-hotel-navy hover:bg-hotel-gold/90">
              Contact Concierge
            </Link>
            <Link to="/packages" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-hotel-navy">
              View Packages
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
