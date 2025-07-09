import heroImage from '../images/heroPageImg.jpg';
function Hero() {
  return (
    <>

          {/* Hero Section */}
          <section
              id="home"
              className="hero-bg min-h-screen flex items-center relative overflow-hidden"
          >
              <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
                  <div
                      className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
                      style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                      className="absolute bottom-40 left-1/4 w-12 h-12 bg-yellow-400/30 rounded-full animate-float"
                      style={{ animationDelay: "4s" }}
                  ></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="text-white animate-slide-up">
                          <h1 className="font-poppins font-bold text-4xl md:text-6xl leading-tight mb-6">
                              Crack <span className="gradient-text">CLAT 2026</span> with
                              India's Best Mentors
                          </h1>
                          <p className="text-xl md:text-2xl mb-8 text-gray-200">
                              Join thousands of successful students who achieved their dream
                              ranks with our proven methodology and expert guidance.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <button className="btn-primary px-8 py-4 !rounded-button text-lg cursor-pointer whitespace-nowrap">
                                  Join Crash Course
                              </button>
                              <button className="btn-secondary px-8 py-4 !rounded-button text-lg cursor-pointer whitespace-nowrap">
                                  Book Free Demo
                              </button>
                          </div>
                          <div className="mt-8 flex items-center space-x-6 text-sm">
                              <div className="flex items-center">
                                  <i className="fas fa-users text-yellow-400 mr-2"></i>
                                  <span>10,000+ Students</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-trophy text-yellow-400 mr-2"></i>
                                  <span>95% Success Rate</span>
                              </div>
                          </div>
                      </div>
                      <div className="hidden lg:block">
                          <div className="relative">
                              <img
                                  src={heroImage} 
                                  alt="CLAT Success Story"
                                  className="w-full h-auto rounded-lg shadow-2xl"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Hero
