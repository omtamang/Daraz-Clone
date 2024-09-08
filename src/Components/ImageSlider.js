import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // setInterval(
    //     () => setCurrentIndex(
    //         currentIndex >= 9 ? setCurrentIndex(0): currentIndex + 1
    //     ), 4000
    // )

    // console.log(currentIndex)

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 - 1 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="relative h-80 ">
            <div>
                <div 
                className="absolute top-2/4 left-[10px] text-[20px] z-10 text-white cursor-pointer " style={{transform: "translate(0, -50%)"}}
                onClick={goToPrevious}
                >❰</div>

                <div className="absolute z-20 bg-slate-800 opacity-40 top-2/4 right-[10px] text-[20px] text-white cursor-pointer"></div>

                <div className="absolute top-2/4 right-[10px] text-[20px] z-10 text-white cursor-pointer" style={{transform: "translate(0, -50%)"}}
                onClick={goToNext}
                >❱</div>

                <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="h-full w-full border-x bg-center bg-cover">
                    <div className="flex justify-center bg-inherit ">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="cursor-pointer text-4xl mt-[270px] mb-0 mr-[3px] ml-[3px]  " 
                            onClick={() => goToSlide(slideIndex)}
                            >•</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;