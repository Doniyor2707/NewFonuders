import { useState } from "react";
import Library1 from "../../../../public/assets/library1.png";
import Library2 from "../../../../public/assets/library2.png";
import Library3 from "../../../../public/assets/library3.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";

function Library() {
  const [title, setTitle] = useState("IELTS");

  const slides = [
    { id: 1, title: "IELTS", image: Library1 },
    { id: 2, title: "IELTS", image: Library2 },
    { id: 3, title: "IELTS", image: Library3 },
    { id: 4, title: "IELTS", image: Library3 },
  ];



  return (
    <div className="w-full px-6 py-8">
    {/* Title */}
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
      {title}
    </h2>

    {/* Carousel */}
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        breakpoints: {
          1024: { perPage: 3 }, // O‘rta ekranlar uchun
          768: { perPage: 2 }, // Kichik ekranlar uchun
          640: { perPage: 1 }, // Mobil uchun
        },
        pagination: false,
        arrows: true,
      }}
      
    >
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="flex flex-col items-center">
            {/* Rasm kartasi */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-md h-auto object-cover"
              />
            </div>
    
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
  );
}

export default Library;
