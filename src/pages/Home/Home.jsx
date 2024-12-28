import { About, Collections, Titile } from "../../components";

function Home() {
  return (
    <div className="align-elements">
      {/* hero */}

      <Collections />

      <Titile title={"Biz haqimizda"} />

      <About />
    </div>
  );
}

export default Home;
