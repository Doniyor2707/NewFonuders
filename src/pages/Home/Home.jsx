import {
  About,
  Collections,
  Faq,
  Hero,
  Library,
  News,
  Teachers,
  Titile,
} from "../../components";


function Home() {
  return (
    <>
      <div className="align-elements">
        {/* hero */}
        <Hero />

        <Collections />

        <Titile title={"Biz haqimizda"} />

        <About />

        <Titile title={"o‘qituvchilarimiz"} />

        <Teachers />

        <Titile title={"kitoblarimiz"} />

        <Library />
      </div>

      <News />

      <Faq />
    </>
  );
}

export default Home;
