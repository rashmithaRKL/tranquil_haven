
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import SmoothImage from '@/components/ui/SmoothImage';
import Section from '@/components/ui/Section';

// Placeholder images for development
const aboutHeroImage = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop";
const founderImage = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop";
const teamImage1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop";
const teamImage2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop";
const teamImage3 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop";
const hotelFacade = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop";
const hotelReception = "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=1974&auto=format&fit=crop";
const hotelRoom = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop";

// Values data
const values = [
  {
    id: 1,
    title: "Excellence",
    description: "We are committed to excellence in every aspect of our service, aiming to exceed expectations at every opportunity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Luxury",
    description: "We create environments where luxury isn't just a feature but an experience, with attention to every detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Integrity",
    description: "We operate with transparency and honesty, building trust with our guests and within our team through ethical practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sustainability",
    description: "We are dedicated to environmentally responsible practices that preserve our beautiful surroundings for generations to come.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Team data
const team = [
  {
    id: 1,
    name: "Jonathan Parker",
    role: "General Manager",
    image: teamImage1,
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    role: "Hospitality Director",
    image: teamImage2,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Guest Relations Manager",
    image: teamImage3,
  },
];

// Timeline data
const timeline = [
  {
    id: 1,
    year: "2005",
    title: "Founding",
    description: "Tranquil Haven was founded with a vision to create a luxury hotel experience that combines elegance with comfort."
  },
  {
    id: 2,
    year: "2010",
    title: "Expansion",
    description: "Added our renowned spa and wellness center, enhancing our commitment to holistic guest experiences."
  },
  {
    id: 3,
    year: "2015",
    title: "Recognition",
    description: "Received our first five-star rating and industry recognition for exceptional hospitality services."
  },
  {
    id: 4,
    year: "2020",
    title: "Renovation",
    description: "Completed a major renovation to update all rooms and common areas with modern luxury amenities."
  },
  {
    id: 5,
    year: "Present",
    title: "Sustainability",
    description: "Implementing eco-friendly practices and sustainable operations throughout the hotel."
  },
];

const About = () => {
  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <SmoothImage
            src={aboutHeroImage}
            alt="Tranquil Haven Hotel"
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
            Our Story
          </AnimatedHeading>
          <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Discover the journey, vision, and passion behind Tranquil Haven's commitment to exceptional hospitality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg img-hover-zoom">
              <SmoothImage
                src={hotelFacade}
                alt="Tranquil Haven Hotel Exterior"
                className="w-full h-full"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
              Our Beginnings
            </AnimatedHeading>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tranquil Haven was founded in 2005 by renowned hospitality visionary Elizabeth Morgan, 
              who dreamed of creating a sanctuary where luxury meets comfort in a breathtaking natural setting.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Starting with just 25 rooms, our hotel quickly gained recognition for its exceptional 
              service, attention to detail, and commitment to creating memorable experiences for every guest.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, we have expanded and evolved, but our core philosophy remains unchanged: 
              to provide a haven of tranquility and luxury for our guests, where every need is anticipated 
              and every expectation exceeded.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder Section */}
      <Section className="bg-hotel-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
              From the Founder
            </AnimatedHeading>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "I founded Tranquil Haven with a simple yet profound belief: that a truly exceptional 
              hotel should not just meet expectations, but create moments of wonder and delight. 
              Our mission is to provide not just a place to stay, but a destination that nourishes 
              the soul and creates lasting memories."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-1 bg-hotel-navy"></div>
              <p className="font-serif text-xl text-hotel-navy">Elizabeth Morgan</p>
            </div>
            <p className="text-gray-700">
              With over 30 years of experience in luxury hospitality, Elizabeth's vision continues 
              to guide our approach to service excellence and guest satisfaction.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg img-hover-zoom">
              <SmoothImage
                src={founderImage}
                alt="Elizabeth Morgan, Founder"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-6">
            Our Mission
          </AnimatedHeading>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Tranquil Haven, our mission is to create exceptional experiences that blend luxury, 
            comfort, and genuine hospitality. We strive to be more than just a hotel – we aim to be 
            a destination that rejuvenates the spirit and creates lasting memories for our guests.
          </p>
        </div>
        
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-12">
          Our Values
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.id} className="glass-card hover:shadow-xl transition-shadow duration-300 flex">
              <div className="mr-6 text-hotel-navy">
                {value.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* History Timeline Section */}
      <Section className="bg-hotel-beige/30">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Our Journey
        </AnimatedHeading>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-hotel-navy/30"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Circle on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-hotel-navy border-4 border-white"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="glass-card">
                    <span className="inline-block px-3 py-1 bg-hotel-navy text-white text-sm font-medium rounded-md mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-white">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Hotel Gallery
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="img-hover-zoom rounded-lg overflow-hidden shadow-lg h-72">
            <SmoothImage
              src={hotelFacade}
              alt="Hotel Exterior"
              className="w-full h-full"
            />
          </div>
          <div className="img-hover-zoom rounded-lg overflow-hidden shadow-lg h-72">
            <SmoothImage
              src={hotelReception}
              alt="Hotel Reception"
              className="w-full h-full"
            />
          </div>
          <div className="img-hover-zoom rounded-lg overflow-hidden shadow-lg h-72">
            <SmoothImage
              src={hotelRoom}
              alt="Luxury Room"
              className="w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-hotel-cream">
        <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy text-center mb-16">
          Our Leadership Team
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="glass-card text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                <SmoothImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-hotel-navy">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-hotel-navy">
        <div className="text-center text-white max-w-4xl mx-auto space-y-6">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold">
            Experience Tranquil Haven
          </AnimatedHeading>
          <p className="text-xl text-hotel-beige">
            Join us for an unforgettable stay where luxury meets comfort and every moment is crafted for your enjoyment.
          </p>
          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link to="/packages" className="btn-primary bg-hotel-gold text-hotel-navy hover:bg-hotel-gold/90">
              View Our Packages
            </Link>
            <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-hotel-navy">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
