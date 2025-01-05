import { useState } from "react";

import Book from "../../../../public/assets/book.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";

function Library() {
  const [title, setTitle] = useState("IELTS");

  const slides = [{ id: 1, title: "IELTS", image: Book }];

  return (
    <div
      className="max-w-full "
      style={{ border: "7px solid rgba(255, 255, 255, 1)" }}
    >
      {/* Title */}
      <h2 className="md:text-4xl font-bold text-center text-gray-800">
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
