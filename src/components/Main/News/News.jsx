import Titile from "../../ui/Titile";
import NewsList from "./NewsList";

function News() {
  return (
    <div className="mb-9">
      <Titile title={"Qaynoq yangiliklar"} />
      <NewsList />
    </div>
  );
}

export default News;
