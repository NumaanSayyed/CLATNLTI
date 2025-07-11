import { useState } from "react";

function VideoSection() {
    const [selectedVideo, setSelectedVideo] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const videos = [
        {
            title: "CLAT 2026 Strategy Session",
            duration: "45:30",
            thumbnail:
                "https://readdy.ai/api/search-image?query=professional%20indian%20law%20teacher%20explaining%20legal%20concepts%20on%20whiteboard%20in%20modern%20classroom%20with%20students%20listening%20attentively&width=400&height=225&seq=video1&orientation=landscape",
        },
        {
            title: "Legal Reasoning Masterclass",
            duration: "38:15",
            thumbnail:
                "https://readdy.ai/api/search-image?query=experienced%20law%20professor%20teaching%20legal%20reasoning%20concepts%20with%20case%20studies%20displayed%20on%20screen%20in%20contemporary%20lecture%20hall&width=400&height=225&seq=video2&orientation=landscape",
        },
        {
            title: "Current Affairs for CLAT",
            duration: "52:20",
            thumbnail:
                "https://readdy.ai/api/search-image?query=knowledgeable%20instructor%20discussing%20current%20affairs%20and%20legal%20updates%20with%20newspaper%20clippings%20and%20charts%20in%20bright%20classroom&width=400&height=225&seq=video3&orientation=landscape",
        },
    ];

    return (
        <>
            {/* Demo Video Section */}
            <section className="py-20 bg-white" id="videos">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
                            Preview Our Classes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Watch sample lectures from our expert faculty
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="video-card bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => {
                                    setSelectedVideo(index);
                                    setIsVideoModalOpen(true);
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="play-button absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                                        <i className="fas fa-play text-white text-2xl"></i>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-lg max-w-xl w-full shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="font-semibold text-lg">
                                {videos[selectedVideo].title}
                            </h3>
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <i className="fas fa-play text-4xl text-gray-400 mb-4"></i>
                                    <p className="text-gray-600">Video Player Placeholder</p>
                                    <p className="text-sm text-gray-500">
                                        Duration: {videos[selectedVideo].duration}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VideoSection;
