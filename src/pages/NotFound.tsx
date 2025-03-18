
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { useIsMobile } from '@/hooks/use-mobile';

const NotFound = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-hotel-cream to-white">
      <div className="hotel-container text-center max-w-2xl px-4">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full bg-hotel-beige/30 blur-3xl animate-pulse"></div>
          
          <AnimatedHeading 
            level={1} 
            className="text-7xl md:text-9xl font-bold text-hotel-navy mb-6 relative"
            animation="scale-in"
          >
            404
          </AnimatedHeading>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in relative" style={{ animationDelay: "300ms" }}>
            Oops! The page you're looking for seems to have checked out early.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in relative" style={{ animationDelay: "500ms" }}>
            <Link to="/" className="btn-primary inline-flex items-center w-full sm:w-auto justify-center">
              <Home className="mr-2" size={20} />
              Return to Homepage
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary w-full sm:w-auto justify-center inline-flex items-center"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-gray-600 animate-fade-in" style={{ animationDelay: "700ms" }}>
            <p>If you believe this is an error, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
