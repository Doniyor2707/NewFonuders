function About() {
  return (
    <>
      <div className="flex justify-center items-center mb-9">
        <div className="card max-w-full w-full">
          <video
            className="w-full rounded-lg"
            controls
            poster="https://via.placeholder.com/800x400" // Videoning oldindan ko'rinishi uchun tasvir
          >
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
          </video>
        </div>
      </div>

      <div className="flex flex-col gap-5 montserrat_font_400">
        <p className="text-center text-3xl ">
          Founders school is not just a learning center,{" "}
          <b className="color_red">it is a huge family</b>. We opened our first
          doors for students <b className="color_red">in 2021, November 8th</b>.
          Our company was founded by{" "}
          <b className="color_red">two friends Ziyodbek Yusupov</b> and{" "}
          <b className="color_red">Abduqodir Juraqulov</b> who are{" "}
          <b className="color_red">MDIST graduates.</b>
        </p>
        <p className="text-center text-3xl">
          Our company has taught more than{" "}
          <b className="color_red">2000 students</b> so far and made a huge
          number of IELTS results with its students,
          <b className="color_red"> 7.0 + band scores on average.</b>
        </p>
        <p className="text-center text-3xl">
          The name "Founders" is not just about two friends, but also it is our
          <b className="color_red">motivated</b> and{" "}
          <b className="color_red">passionate students</b> who will become
          future <b className="color_red">leaders</b> and
          <b className="color_red">founders</b> of successful companies.
        </p>
      </div>
    </>
  );
}

export default About;
