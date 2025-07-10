
function Footer() {
  return (
    <>
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <section id="contact">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div>
                          <h3 className="font-poppins font-bold text-2xl mb-6">
                              Contact Us
                          </h3>
                          <form className="space-y-4">
                              <input
                                  type="text"
                                  placeholder="Your Name"
                                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                              />
                              <input
                                  type="email"
                                  placeholder="Your Email"
                                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                              />
                              <textarea
                                  placeholder="Your Message"
                                  rows={4}
                                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm resize-none"
                              ></textarea>
                              <button className="w-full btn-primary py-3 !rounded-button cursor-pointer whitespace-nowrap">
                                  Send Message
                              </button>
                          </form>
                      </div>

                      <div>
                          <h3 className="font-poppins font-bold text-xl mb-6">
                              Quick Links
                          </h3>
                          <ul className="space-y-3">
                            <li>
                                  <a href="#" className="hover:text-yellow-400 cursor-pointer">
                                      Home
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="hover:text-yellow-400 cursor-pointer">
                                      About Us
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="hover:text-yellow-400 cursor-pointer">
                                      Courses
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="hover:text-yellow-400 cursor-pointer">
                                      Contact
                                  </a>
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="font-poppins font-bold text-xl mb-6">
                              Get in Touch
                          </h3>
                          <div className="space-y-4">
                              <div className="flex items-center">
                                  <i className="fas fa-map-marker-alt text-yellow-400 mr-3"></i>
                                  <span>Kurla West, LBS Marg Road, Mumbai - 400070</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-phone text-yellow-400 mr-3"></i>
                                  <span>+91 86576 55887</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-envelope text-yellow-400 mr-3"></i>
                                  <span>info@clatnlti.com</span>
                              </div>
                              <div className="flex space-x-4 mt-6">
                                  <a
                                      href="#"
                                      className="text-2xl hover:text-yellow-400 cursor-pointer"
                                  >
                                      <i className="fab fa-facebook"></i>
                                  </a>
                                  <a
                                      href="#"
                                      className="text-2xl hover:text-yellow-400 cursor-pointer"
                                  >
                                      <i className="fab fa-twitter"></i>
                                  </a>
                                  <a
                                      href="#"
                                      className="text-2xl hover:text-yellow-400 cursor-pointer"
                                  >
                                      <i className="fab fa-instagram"></i>
                                  </a>
                                  <a
                                      href="#"
                                      className="text-2xl hover:text-yellow-400 cursor-pointer"
                                  >
                                      <i className="fab fa-youtube"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                      <p>
                          &copy; 2024 CLATNLTI. All rights reserved. | Privacy Policy |
                          Terms of Service
                      </p>
                  </div>
              </div>
              </section>
          </footer>
    </>
  )
}

export default Footer
