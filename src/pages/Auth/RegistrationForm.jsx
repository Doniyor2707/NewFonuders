import React, { useState } from "react";

import styles from "./RegistrationForm.module.css";

import FormInput from "../../components/ui/input/FormInput";


import * as Yup from "yup";
import Button from "../../components/ui/button_1/Button";

const initialValues = {
  name: "",
  phone: "",
  source: "",
  englishLevel: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ism majburiy")
    .min(3, "Ism kamida 3 ta harf bo'lishi kerak")
    .max(50, "Ism 50 ta harfdan oshmasligi kerak"),
  phone: Yup.string()
    .required("Telefon raqami majburiy")
    .matches(/^\+?[0-9]{10,15}$/, "Telefon raqami noto'g'ri formatda"),
  source: Yup.string()
    .required("Manba majburiy")
    .oneOf(["instagram", "friend", "website"], "Noto'g'ri manba"),
  englishLevel: Yup.string()
    .required("Ingliz tili darajasi majburiy")
    .oneOf(
      ["beginner", "intermediate", "advanced"],
      "Noto'g'ri ingliz tili darajasi"
    ),
});

const RegistrationForm = () => {
  const [level, setLevel] = useState("Kids" | "General");

  return (
    <div className={styles.globalForm}>
      <form className={styles.form}>
        <h1 className={styles.title}>Birinchi darsga yoziling!</h1>
        <FormInput label="Ism:" placeholder="Komilova Komila" />
        <FormInput label="Telefon raqam:" placeholder="+998 xx xxx xx xx" />
        <FormInput
          label="Bizni haqimizda qayerdan eshitdingiz:"
          placeholder="telegram, instagram, youtube va ..."
        />
        <FormInput
          label="Ingliz tili bo'yicha muammoyingiz:"
          placeholder="Ingliz tilida gapira olmayman..."
        />
        <div className={styles.levelContainer}>
          <p className={styles.levelLabel}>Darajangizni tanlang:</p>
          <div className={styles.buttonGrid}>
            <Button
              variant={level === "Kids" ? "primary" : "secondary"}
              onClick={() => setLevel("Kids")}
              title={"Kids"}
            ></Button>
            <Button
              variant={level === "General" ? "primary" : "secondary"}
              onClick={() => setLevel("General")}
              title={"General"}
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
