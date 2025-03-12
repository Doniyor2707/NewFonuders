function About() {
  return (
    <>
      <div className="flex justify-center items-center mb-9">
        <div className="card max-w-full w-full">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/z7WIMyySMAE"
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 montserrat_font_400 mb-9">
        <p className="text-center text-lg md:text-xl lg:text-3xl">
          Founders school is not just a learning center,{" "}
          <b className="color_red">it is a huge family</b>. We opened our first
          doors for students <b className="color_red">in 2021, November 8th</b>.
          Our company was founded by{" "}
          <b className="color_red">two friends Ziyodbek Yusupov</b> and{" "}
          <b className="color_red">Abduqodir Juraqulov</b> who are{" "}
          <b className="color_red">MDIST graduates.</b>
        </p>
      </div>
    </>
  );
}

export default About;
