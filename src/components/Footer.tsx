import scrollToSection from "../utils/Scroll";

function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <section id="contact">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Contact Us */}
                            <div data-aos="fade-up" data-aos-delay="100">
                                <h3 className="font-poppins font-bold text-2xl mb-6">Contact Us</h3>
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

                            {/* Quick Links */}
                            <div data-aos="fade-up" data-aos-delay="200">
                                <h3 className="font-poppins font-bold text-xl mb-6">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <button
                                            onClick={() => scrollToSection("home")}
                                            className="hover:text-yellow-400 cursor-pointer bg-transparent border-none text-left"
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection("videos")}
                                            className="hover:text-yellow-400 cursor-pointer bg-transparent border-none text-left"
                                        >
                                            Videos
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection("courses")}
                                            className="hover:text-yellow-400 cursor-pointer bg-transparent border-none text-left"
                                        >
                                            Courses
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection("feedbacks")}
                                            className="hover:text-yellow-400 cursor-pointer bg-transparent border-none text-left"
                                        >
                                            Feedback
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* Get in Touch */}
                            <div data-aos="fade-up" data-aos-delay="300">
                                <h3 className="font-poppins font-bold text-xl mb-6">Get in Touch</h3>
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
                                    <div className="flex space-x-4 mt-6" data-aos="zoom-in" data-aos-delay="400">
                                        <a href="#" className="text-2xl hover:text-yellow-400 cursor-pointer">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="#" className="text-2xl hover:text-yellow-400 cursor-pointer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-2xl hover:text-yellow-400 cursor-pointer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" className="text-2xl hover:text-yellow-400 cursor-pointer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div
                            className="border-t border-gray-800 mt-12 pt-8 text-center"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <p>
                                &copy; 2024 CLATNLTI. All rights reserved. | Privacy Policy | Terms of Service
                            </p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
