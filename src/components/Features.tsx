
function Features() {
  return (
    <>
          {/* Features Section */}
          <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
                          Why Choose CLATNLTI?
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Experience the difference with our comprehensive approach to CLAT
                          preparation
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="feature-card bg-white p-8 rounded-xl text-center cursor-pointer">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <i className="fas fa-chalkboard-teacher text-2xl text-blue-900"></i>
                          </div>
                          <h3 className="font-poppins font-semibold text-xl mb-4">
                              Daily Classes
                          </h3>
                          <p className="text-gray-600">
                              Interactive live classes with experienced faculty covering
                              complete CLAT syllabus
                          </p>
                      </div>

                      <div className="feature-card bg-white p-8 rounded-xl text-center cursor-pointer">
                          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <i className="fas fa-clipboard-check text-2xl text-yellow-600"></i>
                          </div>
                          <h3 className="font-poppins font-semibold text-xl mb-4">
                              Mock Tests
                          </h3>
                          <p className="text-gray-600">
                              500+ practice tests with detailed analysis and performance
                              tracking
                          </p>
                      </div>

                      <div className="feature-card bg-white p-8 rounded-xl text-center cursor-pointer">
                          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <i className="fas fa-user-graduate text-2xl text-red-800"></i>
                          </div>
                          <h3 className="font-poppins font-semibold text-xl mb-4">
                              1-on-1 Mentorship
                          </h3>
                          <p className="text-gray-600">
                              Personal mentor assigned to guide you throughout your
                              preparation journey
                          </p>
                      </div>

                      <div className="feature-card bg-white p-8 rounded-xl text-center cursor-pointer">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <i className="fas fa-headset text-2xl text-green-600"></i>
                          </div>
                          <h3 className="font-poppins font-semibold text-xl mb-4">
                              24/7 Doubt Support
                          </h3>
                          <p className="text-gray-600">
                              Round-the-clock doubt resolution through chat, call, and video
                              sessions
                          </p>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Features
