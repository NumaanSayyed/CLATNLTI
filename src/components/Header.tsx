
function Header() {
  return (
    <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                      <div className="flex items-center">
                          <div className="font-poppins font-bold text-2xl text-blue-900">
                              CLAT<span className="text-yellow-500">NLTI</span>
                          </div>
                      </div>
                      <div className="hidden md:flex items-center space-x-8">
                          <a
                              href="#home"
                              className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                          >
                              Home
                          </a>
                          <a
                              href="#courses"
                              className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                          >
                              Courses
                          </a>
                          <a
                              href="#video"
                              className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                          >
                              Videos
                          </a>
                          <a
                              href="#contact"
                              className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
                          >
                              Contact
                          </a>
                          <button className="bg-blue-900 text-white px-6 py-2 !rounded-button hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap">
                              Login
                          </button>
                      </div>
                      <div className="md:hidden">
                          <button className="text-gray-700 cursor-pointer">
                              <i className="fas fa-bars text-xl"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Header
