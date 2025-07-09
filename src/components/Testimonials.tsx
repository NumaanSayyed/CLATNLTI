import { useState , useEffect} from "react";

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

     const testimonials = [
        {
          name: "Arjun Sharma",
          rank: "AIR 15",
          quote:
            "CLATNLTI's personalized mentorship and daily practice sessions helped me achieve my dream rank. The mock tests were exactly like the real exam.",
          image:
            "https://readdy.ai/api/search-image?query=confident%20young%20indian%20male%20student%20in%20formal%20shirt%20smiling%20at%20camera%20with%20books%20in%20background%20professional%20education%20portrait&width=150&height=150&seq=testimonial1&orientation=squarish",
        },
        {
          name: "Priya Patel",
          rank: "AIR 23",
          quote:
            "The crash course was intensive yet comprehensive. The 24/7 doubt support feature was a game-changer during my preparation.",
          image:
            "https://readdy.ai/api/search-image?query=smart%20young%20indian%20female%20student%20wearing%20glasses%20with%20confident%20smile%20holding%20law%20books%20in%20modern%20library%20setting&width=150&height=150&seq=testimonial2&orientation=squarish",
        },
        {
          name: "Rohit Kumar",
          rank: "AIR 31",
          quote:
            "Best investment for CLAT preparation. The faculty's expertise and systematic approach made complex topics easy to understand.",
          image:
            "https://readdy.ai/api/search-image?query=determined%20young%20indian%20male%20student%20in%20casual%20wear%20with%20notebook%20and%20pen%20in%20bright%20study%20room%20background&width=150&height=150&seq=testimonial3&orientation=squarish",
        },
        {
          name: "Sneha Reddy",
          rank: "AIR 42",
          quote:
            "The one-on-one mentorship sessions were incredibly valuable. My mentor guided me through every step of my preparation journey.",
          image:
            "https://readdy.ai/api/search-image?query=focused%20young%20indian%20female%20student%20with%20long%20hair%20studying%20with%20laptop%20and%20books%20in%20bright%20academic%20environment&width=150&height=150&seq=testimonial4&orientation=squarish",
        },
        {
          name: "Vikash Singh",
          rank: "AIR 56",
          quote:
            "CLATNLTI's mock tests and performance analysis helped me identify my weak areas and improve consistently.",
          image:
            "https://readdy.ai/api/search-image?query=serious%20young%20indian%20male%20student%20in%20blue%20shirt%20with%20textbooks%20and%20notes%20in%20professional%20study%20setting&width=150&height=150&seq=testimonial5&orientation=squarish",
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
