// memo
import { memo } from "react";
// img
import Events from "../../../../public/assets/events.png";
import Natija from "../../../../public/assets/natijalar.png";
import Overal from "../../../../public/assets/overal.png";
import Milliy from "../../../../public/assets/Milliy.png";

// styles
import styles from "./News.module.css";

function NewsList() {
  return (
    <div className={styles.scrollWrapper}>
      <marquee direction="right" className={styles.scrollContainer}>
        <img src={Natija} alt="Image 1" className={styles.scrollImage} />
        <img src={Events} alt="Image 2" className={styles.scrollImage} />
        <img src={Overal} alt="Image 3" className={styles.scrollImage} />
        <img src={Milliy} alt="Image 4" className={styles.scrollImage} />
      </marquee>
    </div>
  );
}

export default memo(NewsList);
