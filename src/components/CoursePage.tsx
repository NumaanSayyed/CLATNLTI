import { useState } from "react";

function CoursePage() {
    const [activeTab, setActiveTab] = useState(0);

    const courses = [
        {
          title: "CLAT Crash Course 2026",
          duration: "6 Months",
          price: "₹49,999",
          originalPrice: "₹69,999",
          features: [
            "Daily Live Classes",
            "500+ Mock Tests",
            "Personal Mentor",
            "Study Material",
          ],
          thumbnail:
            "https://readdy.ai/api/search-image?query=modern%20law%20books%20and%20gavel%20on%20wooden%20desk%20with%20golden%20lighting%20representing%20legal%20education%20and%20CLAT%20preparation%20course&width=300&height=200&seq=course1&orientation=landscape",
        },
        {
          title: "CLAT Foundation Course",
          duration: "12 Months",
          price: "₹79,999",
          originalPrice: "₹99,999",
          features: [
            "Comprehensive Syllabus",
            "1000+ Practice Questions",
            "Weekly Assessments",
            "Career Guidance",
          ],
          thumbnail:
            "https://readdy.ai/api/search-image?query=stack%20of%20legal%20textbooks%20with%20scales%20of%20justice%20and%20graduation%20cap%20on%20mahogany%20table%20with%20warm%20academic%20lighting&width=300&height=200&seq=course2&orientation=landscape",
        },
        {
          title: "CLAT Test Series",
          duration: "3 Months",
          price: "₹19,999",
          originalPrice: "₹24,999",
          features: [
            "300+ Mock Tests",
            "Detailed Analysis",
            "Rank Prediction",
            "Performance Tracking",
          ],
          thumbnail:
            "https://readdy.ai/api/search-image?query=computer%20screen%20showing%20online%20test%20interface%20with%20legal%20questions%20and%20timer%20in%20modern%20study%20room%20with%20law%20books&width=300&height=200&seq=course3&orientation=landscape",
        },
      ];

  return (
    <>
          {/* Course Pages */}
          <section id="courses" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
                          Our Courses
                      </h2>
                      <p className="text-xl text-gray-600">
                          Choose the perfect course for your CLAT preparation journey
                      </p>
                  </div>

                  <div className="flex justify-center mb-8">
                      <div className="bg-white rounded-lg p-1 shadow-sm">
                          {["All Courses", "Crash Course", "Foundation", "Test Series"].map(
                              (tab, index) => (
                                  <button
                                      key={tab}
                                      onClick={() => setActiveTab(index)}
                                      className={`px-6 py-2 !rounded-button cursor-pointer whitespace-nowrap ${activeTab === index
                                          ? "bg-blue-900 text-white"
                                          : "text-gray-600 hover:text-blue-900"
                                          }`}
                                  >
                                      {tab}
                                  </button>
                              ),
                          )}
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courses.map((course, index) => (
                          <div
                              key={index}
                              className="course-card bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                          >
                              <div className="relative h-48 overflow-hidden">
                                  <img
                                      src={course.thumbnail}
                                      alt={course.title}
                                      className="w-full h-full object-cover object-top"
                                  />
                                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                      {course.duration}
                                  </div>
                              </div>
                              <div className="p-6">
                                  <h3 className="font-poppins font-bold text-xl mb-3">
                                      {course.title}
                                  </h3>
                                  <div className="flex items-center justify-between mb-4">
                                      <div>
                                          <span className="text-2xl font-bold text-blue-900">
                                              {course.price}
                                          </span>
                                          <span className="text-gray-500 line-through ml-2">
                                              {course.originalPrice}
                                          </span>
                                      </div>
                                  </div>
                                  <ul className="space-y-2 mb-6">
                                      {course.features.map((feature, idx) => (
                                          <li key={idx} className="flex items-center text-sm">
                                              <i className="fas fa-check text-green-500 mr-2"></i>
                                              {feature}
                                          </li>
                                      ))}
                                  </ul>
                                  <button className="w-full btn-primary py-3 !rounded-button cursor-pointer whitespace-nowrap">
                                      Enroll Now
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
    </>
  )
}

export default CoursePage
