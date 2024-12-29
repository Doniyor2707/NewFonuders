import { About, Collections, News, Titile } from "../../components";

function Home() {
  return (
    <>
      <div className="align-elements">
        {/* hero */}

        <Collections />

        <Titile title={"Biz haqimizda"} />

        <About />

        <Titile title={"o‘qituvchilarimiz:"} />
      </div>

      <News />
    </>
  );
}

export default Home;
