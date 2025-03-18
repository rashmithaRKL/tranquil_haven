
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import SmoothImage from '@/components/ui/SmoothImage';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';

// Placeholder images for development
const heroImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop";
const roomImage1 = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop";
const roomImage2 = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop";
const areaImage = "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop";
const spaImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop";

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Our stay at Tranquil Haven was nothing short of exceptional. The attention to detail and personalized service made us feel like royalty.",
    author: "Alexandra Johnson",
    role: "Business Executive",
    rating: 5,
  },
  {
    id: 2,
    text: "The most serene hotel experience I've ever had. The spa treatments were divine, and the room views were breathtaking. Highly recommend!",
    author: "Michael Thornton",
    role: "Travel Blogger",
    rating: 5,
  },
  {
    id: 3,
    text: "From the moment we arrived, the staff made us feel at home. The culinary experience was outstanding with fresh local ingredients.",
    author: "Sophia Martinez",
    role: "Food Critic",
    rating: 5,
  },
];

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <SmoothImage
            src={heroImage}
            alt="Tranquil Haven Hotel"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        
        <div className="relative h-full flex items-center hotel-container">
          <div className="max-w-xl text-white space-y-6">
            <span className="inline-block px-3 py-1 bg-hotel-gold/90 text-hotel-navy text-sm font-medium rounded-md animate-fade-in-left" style={{ animationDelay: "300ms" }}>
              Luxury Redefined
            </span>
            <AnimatedHeading
              level={1}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow"
              animation="fade-in-left"
              delay={400}
            >
              A Sanctuary of Elegance and Comfort
            </AnimatedHeading>
            <p className="text-lg md:text-xl opacity-0 animate-fade-in-left" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              Experience unparalleled luxury in our meticulously designed spaces,
              where every detail is crafted for your ultimate relaxation.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-left" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
              <Link to="/packages" className="btn-primary">
                Book Your Stay
              </Link>
              <Link to="/about" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-hotel-navy">
                Discover More
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <div className="hotel-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card bg-white/30 backdrop-blur-lg text-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Premium Rooms</h3>
                <p className="text-white/80">Spacious and elegantly furnished rooms with scenic views.</p>
              </div>
              <div className="glass-card bg-white/30 backdrop-blur-lg text-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Fine Dining</h3>
                <p className="text-white/80">Exquisite culinary experiences crafted by renowned chefs.</p>
              </div>
              <div className="glass-card bg-white/30 backdrop-blur-lg text-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Wellness Spa</h3>
                <p className="text-white/80">Rejuvenating treatments in our state-of-the-art spa facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
              Welcome to Tranquil Haven
            </AnimatedHeading>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled between serene mountains and pristine coastlines, Tranquil Haven 
              offers an escape from the ordinary. Our luxury hotel combines timeless 
              elegance with modern comfort, creating a sanctuary for the discerning traveler.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our establishment in 2005, we have dedicated ourselves to providing 
              exceptional service and unforgettable experiences for our guests.
            </p>
            <div className="pt-4">
              <Link to="/about" className="btn-secondary group">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg img-hover-zoom h-64">
                <SmoothImage
                  src={roomImage1}
                  alt="Elegant hotel room"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg img-hover-zoom h-48">
                <SmoothImage
                  src={areaImage}
                  alt="Hotel lobby"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden shadow-lg img-hover-zoom h-48">
                <SmoothImage
                  src={spaImage}
                  alt="Spa treatment"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg img-hover-zoom h-64">
                <SmoothImage
                  src={roomImage2}
                  alt="Luxury bathroom"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-hotel-cream">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Exceptional Experiences
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Unparalleled Comfort</h3>
            <p className="text-gray-700 text-center">
              Our rooms are meticulously designed with premium furnishings and amenities to ensure your 
              utmost comfort and relaxation during your stay.
            </p>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Exquisite Dining</h3>
            <p className="text-gray-700 text-center">
              Experience culinary excellence at our restaurants, where our chefs
              create memorable dining experiences using the finest ingredients.
            </p>
          </div>
          
          <div className="glass-card hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-hotel-navy text-white flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-center mb-4">Personalized Service</h3>
            <p className="text-gray-700 text-center">
              Our attentive staff is dedicated to exceeding your expectations, providing
              personalized service that anticipates your every need.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-hotel-beige/30">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          What Our Guests Say
        </AnimatedHeading>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex space-x-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-hotel-gold"
                  size={24}
                  fill="currentColor"
                />
              ))}
            </div>
            
            <div className="relative h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    index === activeTestimonial ? "opacity-100" : "opacity-0"
                  )}
                >
                  <p className="text-xl italic text-center text-gray-700 mb-8">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-serif font-semibold text-hotel-navy">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeTestimonial
                      ? "bg-hotel-navy w-6"
                      : "bg-hotel-navy/30"
                  )}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="bg-hotel-navy">
        <div className="text-center text-white max-w-4xl mx-auto space-y-6">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold">
            Experience the Luxury for Yourself
          </AnimatedHeading>
          <p className="text-xl text-hotel-beige">
            Book your stay today and discover why Tranquil Haven is the preferred 
            destination for travelers seeking exceptional experiences.
          </p>
          <div className="pt-6">
            <Link to="/packages" className="btn-primary bg-hotel-gold text-hotel-navy hover:bg-hotel-gold/90">
              View Our Packages
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
