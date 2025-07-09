import { useState } from "react";

function Course() {

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
      };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "crash-course",
      });
  return (
    <>
          {/* Crash Course Section */}
          <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                          <div className="countdown-timer">
                              <i className="fas fa-clock mr-2"></i>
                              Limited Time Offer - Ends in 15 Days
                          </div>
                          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
                              CLAT Crash Course 2026
                          </h2>
                          <p className="text-xl text-gray-600 mb-8">
                              Intensive 6-month program designed to maximize your CLAT score
                              with proven strategies and expert guidance.
                          </p>

                          <div className="space-y-4 mb-8">
                              <div className="flex items-center">
                                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                  <span>180+ Live Interactive Classes</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                  <span>500+ Mock Tests & Practice Papers</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                  <span>Personal Mentor & Study Plan</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                  <span>Complete Study Material & E-books</span>
                              </div>
                              <div className="flex items-center">
                                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                  <span>24/7 Doubt Support & Discussion Forum</span>
                              </div>
                          </div>

                          <div className="bg-gray-50 p-6 rounded-lg mb-8">
                              <h4 className="font-semibold text-lg mb-4">Class Schedule</h4>
                              <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                      <span>Morning Batch</span>
                                      <span>8:00 AM - 11:00 AM</span>
                                  </div>
                                  <div className="flex justify-between">
                                      <span>Evening Batch</span>
                                      <span>6:00 PM - 9:00 PM</span>
                                  </div>
                                  <div className="flex justify-between">
                                      <span>Weekend Batch</span>
                                      <span>10:00 AM - 6:00 PM</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="bg-white p-8 rounded-xl shadow-xl border">
                          <h3 className="font-poppins font-bold text-2xl text-center mb-6">
                              Register Now
                          </h3>
                          <form onSubmit={handleFormSubmit} className="space-y-4">
                              <div>
                                  <input
                                      type="text"
                                      name="name"
                                      placeholder="Full Name"
                                      value={formData.name}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                      required
                                  />
                              </div>
                              <div>
                                  <input
                                      type="email"
                                      name="email"
                                      placeholder="Email Address"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                      required
                                  />
                              </div>
                              <div>
                                  <input
                                      type="tel"
                                      name="phone"
                                      placeholder="Phone Number"
                                      value={formData.phone}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                      required
                                  />
                              </div>
                              <div>
                                  <select
                                      name="course"
                                      value={formData.course}
                                      onChange={handleInputChange}
                                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm cursor-pointer"
                                  >
                                      <option value="crash-course">CLAT Crash Course</option>
                                      <option value="foundation">Foundation Course</option>
                                      <option value="test-series">Test Series</option>
                                  </select>
                              </div>
                              <button
                                  type="submit"
                                  className="w-full btn-primary py-3 !rounded-button text-lg cursor-pointer whitespace-nowrap"
                              >
                                  Register Now - ₹49,999
                              </button>
                              <p className="text-center text-sm text-gray-500">
                                  <span className="line-through">₹69,999</span> Save ₹20,000
                              </p>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Course
