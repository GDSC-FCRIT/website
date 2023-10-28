import React from "react";

function FeaturedEvent() {
    return (
        <div className="brounded-3xl p-6" style={{background: '#00000066'}}>
            <div className="flex justify-between items-center mb-6 p-8">
                <div>
                    <h2 className="inline text-4xl me-0 font-bold text-white">Featured Events</h2>
                    <h2 className="text-2xl text-white">some of our recent events...</h2>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-20">
                <div className=" text-center p-4 flex flex-col items-center rounded-3xl text-white mb-4" style={{ width: "390px", height: "504px" ,background : "#343434" , marginLeft : "7%" , marginRight : "7%"}}>
                    <div className="aspect-w-4 aspect-h-3 mb-4">
                        <img
                            src="/git_github_event.jpeg"
                            className="object-cover rounded-2xl"
                            alt="Git and Github"
                            style={{ width: "308px", height: "231px" }}
                        />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Git and Github</h3>
                    <p className="text-base font-medium mt-2">
                        lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
                    </p>
                    <a className="text-xl font-medium mt-2 text-blue-500" href="events">
                        Read More
                    </a>
                </div>
                <div className=" text-center p-4 flex flex-col items-center rounded-3xl text-white mb-4" style={{ width: "390px", height: "504px" , background : "#343434" , marginLeft : "7%" , marginRight : "7%"}}>
                    <div className="aspect-w-4 aspect-h-3 mb-4">
                        <img
                            src="/opensource_event.jpeg"
                            className="object-cover rounded-2xl"
                            alt="Open Source Talks"
                            style={{ width: "308px", height: "231px" }}
                        />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Open Source Talks</h3>
                    <p className="text-base font-medium mt-2">
                        lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
                    </p>
                    <a className="text-xl font-medium mt-2 text-blue-500" href="events">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FeaturedEvent;
