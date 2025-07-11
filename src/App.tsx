
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Course from "./components/Course";
import CoursePage from "./components/CoursePage";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import StickyButton from "./utils/StickyButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
          min-height: 1024px;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .hero-bg {
          background: linear-gradient(135deg, rgba(26, 35, 126, 0.9) 0%, rgba(128, 0, 0, 0.8) 100%),
                      url('https://readdy.ai/api/search-image?query=modern%20indian%20law%20college%20campus%20with%20students%20walking%20towards%20grand%20entrance%20building%20with%20pillars%20and%20golden%20sunlight%20creating%20inspiring%20educational%20atmosphere&width=1440&height=800&seq=herobg&orientation=landscape');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #1a237e;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
        }
        
        .btn-secondary {
          border: 2px solid #ffd700;
          color: #ffd700;
          background: transparent;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #ffd700;
          color: #1a237e;
          transform: translateY(-2px);
        }
        
        .feature-card {
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #ffd700;
        }
        
        .course-card {
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }
        
        .course-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .video-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .video-card:hover {
          transform: scale(1.05);
        }
        
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 215, 0, 0.9);
          color: #1a237e;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.3s ease;
        }
        
        .play-button:hover {
          background: #ffd700;
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-left: 4px solid #ffd700;
        }
        
        .sticky-cta {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: linear-gradient(135deg, #1a237e 0%, #800000 100%);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .sticky-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal-content {
          background: white;
          border-radius: 10px;
          max-width: 800px;
          width: 90%;
          max-height: 90%;
          overflow: hidden;
        }
        
        .countdown-timer {
          background: linear-gradient(135deg, #800000 0%, #1a237e 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }
        
        .!rounded-button {
          border-radius: 8px;
        }
        
        @media (max-width: 768px) {
          .hero-bg {
            background-attachment: scroll;
          }
          
          .sticky-cta {
            bottom: 10px;
            right: 10px;
            padding: 12px 20px;
          }
        }
      `}</style>

     <Header/>
     <Hero/>
     <Features/> 
     <Course/>
     <CoursePage/>
     <VideoSection/>
     <Testimonials/>
     <Footer/>
     <StickyButton/>
    </div>
  );
};

export default App;
