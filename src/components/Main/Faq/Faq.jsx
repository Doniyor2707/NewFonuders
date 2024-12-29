import Titile from "../../ui/Titile";
import Questions from "./Questions";

function Faq() {
  return (
    <div className="align-elements">
      <Titile title={"FAQ"} />

      <p className="montserrat_font_500 text-3xl text-center">
        Ko‘p beriladigan savollarga javob beramiz!
      </p>

      <Questions />
    </div>
  );
}

export default Faq;
