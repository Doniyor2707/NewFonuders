import Titile from "../../ui/Titile";
import Questions from "./Questions";

function Faq() {
  return (
    <div className="align-elements">
      <Titile title={"FAQ"} />

      <p className="montserrat_font_500 md:text-3xl text-sm text-center md:mb-9 mb-6">
        Ko‘p beriladigan savollarga javob beramiz!
      </p>

      <Questions />
    </div>
  );
}

export default Faq;
