import { useState , useEffect} from "react";
import reviews from '../images/reviews.png';

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

     const testimonials = [
        {
          name: "Arjun Sharma",
          rank: "AIR 15",
          quote:
            "CLATNLTI's personalized mentorship and daily practice sessions helped me achieve my dream rank. The mock tests were exactly like the real exam.",
          image:
            reviews,
        },
        {
          name: "Priya Patel",
          rank: "AIR 23",
          quote:
            "The crash course was intensive yet comprehensive. The 24/7 doubt support feature was a game-changer during my preparation.",
          image:
            reviews,
        },
        {
          name: "Rohit Kumar",
          rank: "AIR 31",
          quote:
            "Best investment for CLAT preparation. The faculty's expertise and systematic approach made complex topics easy to understand.",
          image:
            reviews,
        },
        {
          name: "Sneha Reddy",
          rank: "AIR 42",
          quote:
            "The one-on-one mentorship sessions were incredibly valuable. My mentor guided me through every step of my preparation journey.",
          image:
            reviews,
        },
        {
          name: "Vikash Singh",
          rank: "AIR 56",
          quote:
            "CLATNLTI's mock tests and performance analysis helped me identify my weak areas and improve consistently.",
          image:
            reviews,
        },
      ];
      
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
                          Success Stories
                      </h2>
                      <p className="text-xl text-gray-600">
                          Hear from our successful students who cracked CLAT
                      </p>
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                      <div className="testimonial-card p-8 rounded-xl">
                          <div className="flex flex-col md:flex-row items-center gap-8">
                              <div className="flex-shrink-0">
                                  <img
                                      src={testimonials[currentTestimonial].image}
                                      alt={testimonials[currentTestimonial].name}
                                      className="w-24 h-24 rounded-full object-cover object-top"
                                  />
                              </div>
                              <div className="flex-1 text-center md:text-left">
                                  <div className="flex justify-center md:justify-start mb-4">
                                      {[...Array(5)].map((_, i) => (
                                          <i key={i} className="fas fa-star text-yellow-400"></i>
                                      ))}
                                  </div>
                                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                                      "{testimonials[currentTestimonial].quote}"
                                  </blockquote>
                                  <div className="font-semibold text-gray-900">
                                      {testimonials[currentTestimonial].name}
                                  </div>
                                  <div className="text-blue-900 font-semibold">
                                      {testimonials[currentTestimonial].rank}
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex justify-center mt-8 space-x-2">
                          {testimonials.map((_, index) => (
                              <button
                                  key={index}
                                  onClick={() => setCurrentTestimonial(index)}
                                  className={`w-3 h-3 rounded-full cursor-pointer ${currentTestimonial === index ? "bg-blue-900" : "bg-gray-300"
                                      }`}
                              />
                          ))}
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Testimonials
