import { Carousel } from "@material-tailwind/react";

const Carusal = () => {
    return (
        <div c>
            <Carousel
                className=""
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="relative">
                    <img
                        src="https://i.ibb.co/fvYcwMR/web-company.png"
                        alt="image 1"
                        className="h-[500px] w-full object-cover"
                    />
                    <div className="absolute top-0 w-full flex justify-center items-center text-white bg-black bg-opacity-60 h-full">
                        <div className="w-1/2 mx-auto">
                            <h1 data-aos="fade-right" className="text-center text-4xl pb-2 font-bold text-orange-700">Web Design and Development</h1>
                            <p data-aos="fade-up" className="text-sm text-gray-400">
                                Web design and development refer to the process of creating websites and web applications. It involves a combination of various skills and technologies to design and build functional and visually appealing websites.</p>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co/PsyPQGB/digital-marketing-team-analyses-data-1.jpg"
                        alt="image 1"
                        className="h-[500px] w-full object-cover"
                    />
                    <div className="absolute top-0 w-full flex justify-center items-center text-white bg-black bg-opacity-60 h-full">
                        <div className="w-1/2 mx-auto">
                            <h1 data-aos="fade-up" className="text-center text-4xl pb-2 font-bold text-orange-700">Digital marketing</h1>
                            <p className="text-sm text-gray-400">
                                Digital marketing is a broad and evolving field that encompasses various strategies and techniques for promoting products, services, or brands using digital channels and technologies.</p>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co/HgPmP25/Picture3.png"
                        alt="image 1"
                        className="h-[500px] w-full object-cover"
                    />
                    <div className="absolute top-0 w-full flex justify-center items-center text-white bg-black bg-opacity-60 h-full">
                        <div className="w-1/2 mx-auto">
                            <h1 className="text-center text-4xl pb-2 font-bold text-orange-700">Graphic Design</h1>
                            <p className="text-sm text-gray-400">Graphic design is a creative and visual communication discipline that involves the use of images, typography, colors, and layout to convey a message or idea.</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carusal