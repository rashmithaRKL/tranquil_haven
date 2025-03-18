
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hotel-cream">
      <div className="hotel-container text-center max-w-2xl">
        <AnimatedHeading 
          level={1} 
          className="text-7xl md:text-9xl font-bold text-hotel-navy mb-6"
          animation="fade-in"
        >
          404
        </AnimatedHeading>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          Oops! The page you're looking for seems to have checked out early.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center animate-fade-in" style={{ animationDelay: "500ms" }}>
          <Home className="mr-2" size={20} />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
