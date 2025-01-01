import {
  About,
  Collections,
  Faq,
  News,
  Teachers,
  Titile,
} from "../../components";

function Home() {
  return (
    <>
      <div className="align-elements">
        {/* hero */}

        <Collections />

        <Titile title={"Biz haqimizda"} />

        <About />

        <Titile title={"o‘qituvchilarimiz"} />

        <Teachers />
      </div>

      <News />

      <Faq />
    </>
  );
}

export default Home;
