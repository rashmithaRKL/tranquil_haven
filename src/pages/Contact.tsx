
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import SmoothImage from '@/components/ui/SmoothImage';
import Section from '@/components/ui/Section';

// Placeholder image for development
const contactHeroImage = "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=2074&auto=format&fit=crop";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <SmoothImage
            src={contactHeroImage}
            alt="Contact Us"
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
            Contact Us
          </AnimatedHeading>
          <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            We'd love to hear from you. Reach out to us with any questions or to book your stay.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-hotel-navy/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-hotel-navy" size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-2">Call Us</h3>
            <a 
              href="tel:+15551234567" 
              className="text-gray-700 hover:text-hotel-navy transition-colors duration-300"
            >
              +1 (555) 123-4567
            </a>
          </div>
          
          <div className="glass-card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-hotel-navy/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-hotel-navy" size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-2">Email Us</h3>
            <a 
              href="mailto:info@tranquilhaven.com" 
              className="text-gray-700 hover:text-hotel-navy transition-colors duration-300 break-words"
            >
              info@tranquilhaven.com
            </a>
          </div>
          
          <div className="glass-card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-hotel-navy/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-hotel-navy" size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-2">Working Hours</h3>
            <p className="text-gray-700">
              Reception: 24/7 <br />
              Reservations: 8am - 10pm
            </p>
          </div>
        </div>
      </Section>

      {/* Map & Contact Form Section */}
      <Section className="bg-hotel-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="glass-card h-[400px] md:h-full overflow-hidden">
            <h3 className="font-serif text-2xl font-semibold text-hotel-navy mb-4">Our Location</h3>
            <div className="flex items-start mb-4">
              <MapPin className="mr-2 mt-1 flex-shrink-0 text-hotel-navy" size={18} />
              <p className="text-gray-700">
                123 Serenity Avenue, Coastal City, 10001
              </p>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30604994164!2d-74.25987368715491!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1658892184882!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="font-serif text-2xl font-semibold text-hotel-navy mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Booking Inquiry">Booking Inquiry</option>
                    <option value="Package Information">Package Information</option>
                    <option value="Special Request">Special Request</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-navy"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <AnimatedHeading level={2} className="text-3xl md:text-4xl font-semibold text-hotel-navy">
            Frequently Asked Questions
          </AnimatedHeading>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Find answers to our most commonly asked questions. If you can't find what you're looking for, please contact us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-3">
              What are the check-in and check-out times?
            </h3>
            <p className="text-gray-700">
              Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability.
            </p>
          </div>
          
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-3">
              Is breakfast included in the room rate?
            </h3>
            <p className="text-gray-700">
              Breakfast is included in most of our packages. Please check your specific package details or contact us for more information.
            </p>
          </div>
          
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-3">
              Do you offer airport transfers?
            </h3>
            <p className="text-gray-700">
              Yes, we offer airport transfers for an additional fee. Please provide your flight details at least 24 hours before arrival.
            </p>
          </div>
          
          <div className="glass-card">
            <h3 className="font-serif text-xl font-semibold text-hotel-navy mb-3">
              Is there a cancellation fee?
            </h3>
            <p className="text-gray-700">
              Cancellations made more than 48 hours before check-in are free of charge. Late cancellations may incur a fee equivalent to one night's stay.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
