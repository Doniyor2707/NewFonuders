import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Public papkadagi rasmlarni to‘g‘ri chaqirish
const levelSlides = [
  { id: 1, image: "/assets/image1.png" },
  { id: 2, image: "/assets/image2.png" },
  { id: 3, image: "/assets/image3.png" },
];

function Library() {
  return (
    <div className="max-w-screen-lg mx-auto border-white">
      {/* Level Carousel */}
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          pagination: true,
          arrows: true,
          focus: "right",
          gap: "1rem",
          breakpoints: {
            1024: { perPage: 1 }, // Katta ekranlar
            768: { perPage: 1 }, // O'rta ekranlar
            480: { perPage: 1 }, // Kichik ekranlar
          },
        }}
      >
        {levelSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="flex justify-center">
              <img
                src={slide.image}
                alt={`Level ${slide.id}`}
                className="w-full h-40 md:h-96 object-contain"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Library;
