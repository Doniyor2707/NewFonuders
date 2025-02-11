import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";
import FormInput from "../../components/ui/input/FormInput";
import Button from "../../components/ui/button_1/Button";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  phone: "+998", // Default qiymat
  source: "",
  problem: "",
  level: "", // Daraja (Kids yoki General)
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ism majburiy !")
    .min(3, "Ism kamida 3 ta harf bo'lishi kerak")
    .max(50, "Ism 50 ta harfdan oshmasligi kerak"),
  phone: Yup.string()
    .required("Telefon raqami majburiy !")
    .matches(
      /^\+998(33|55|77|88|90|91|93|94|95|97|98|99)[0-9]{7}$/,
      "Sizda xatolik mavjud"
    ),
  source: Yup.string()
    .required("Manba majburiy (instagram,friend,website) !")
    .oneOf(["instagram","friend","website,Telegram"], "Noto'g'ri manba"),
  problem: Yup.string().required("Muammo majburiy !"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (values.level) {
        navigate(`/login/${values.level}`);
      } else {
        alert("Iltimos, darajani tanlang!");
      }
    },
  });

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value;

    // Agar foydalanuvchi "+998" ni o‘chirmoqchi bo‘lsa, bunga ruxsat bermaymiz
    if (!inputValue.startsWith("+998")) {
      return;
    }

    // Faqat raqamlarni ruxsat berish (faqat 0-9 orasidagi sonlar va "+998" bo‘lishi kerak)
    inputValue = inputValue.replace(/[^\d+]/g, "");

    // Maksimal uzunlik 13 belgidan oshmasligi kerak
    if (inputValue.length > 13) {
      return;
    }

    formik.setFieldValue("phone", inputValue);
  };

  return (
    <div className="p-2">
      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        <h1 className="text-4xl text-center">Birinchi darsga yoziling!</h1>
        <FormInput
          name="name"
          label="Ism:"
          placeholder="Komilova Komila"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />

        <FormInput
          name="phone"
          label="Telefon raqam:"
          placeholder="+998 xx xxx xx xx"
          value={formik.values.phone}
          onChange={handlePhoneChange} // Yangilangan funksiyani qo‘shdik
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />

        <FormInput
          name="source"
          label="Bizni qayerdan eshitdingiz:"
          placeholder="telegram, instagram, website va ..."
          value={formik.values.source}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.source}
          touched={formik.touched.source}
        />

        <FormInput
          name="problem"
          label="Ingliz tili bo'yicha muammoyingiz:"
          placeholder="Ingliz tilida gapira olmayman..."
          value={formik.values.problem}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.problem}
          touched={formik.touched.problem}
        />

        <div className={styles.levelContainer}>
          <p className={styles.levelLabel}>Darajangizni tanlang:</p>
          <div className={styles.buttonGrid}>
            <Button
              type="submit"
              title="Kids"
              onClick={() => formik.setFieldValue("level", "kids")}
            />
            <Button
              type="submit"
              title="General"
              onClick={() => formik.setFieldValue("level", "general")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
