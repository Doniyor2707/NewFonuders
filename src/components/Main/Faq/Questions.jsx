function Questions() {
  return (
    <div className="join join-vertical w-full montserrat_font_500">
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" defaultChecked />

        <div className="collapse-title md:text-3xl text-xl font-medium">
          Ingliz tilini noldan qancha muddatda o‘rganish mumkin?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Bu o‘quvchining darajasi va mashg‘ulotga ajratadigan vaqti,
            shuningdek, individual qobiliyatiga bog‘liq bo‘ladi. Odatda,
            kundalik shug‘ullanish bilan 6-12 oy ichida sezilarli natijalarga
            erishish mumkin.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          Darslar qanday formatda o‘tiladi?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Kurslar oflayn va onlayn formatda bo‘lishi mumkin. Darslarda
            gapirish, yozish, tinglab tushunish va grammatikani o‘rganish
            bo‘yicha mashg‘ulotlar olib boriladi.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          O'quv markazda kimlar dars beradi?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            O‘qituvchilar tajribali va maxsus sertifikatga ega mutaxassislardir.
            Ularning IELTS sertifikatidan tashqari xalqaro TESOL/TEFL
            sertifikatlari ham mavjud.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          Darslarga qanday yozilish mumkin?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Markazga kelib ro‘yxatdan o‘tish yoki onlayn tarzda anketa
            to‘ldirish orqali kursga yozilish mumkin.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          Darslar nechta kishilik guruhlarda o‘tiladi?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Odatda, guruhda 6-12 kishi bo‘ladi. Bundan tashqari, individual
            darslar ham mavjud.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          Boshlang‘ich darajadan boshlab o‘qiy olamanmi?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Ha, kurslar barcha darajalar uchun moslashtirilgan va boshlang‘ich
            darajadan o‘qishni boshlashingiz mumkin.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow md:py-2 join-item border-red-300 border md:box_shadow_2 ">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-3xl text-xl font-medium">
          Necha yoshdan kurslarga yozilsa bo'ladi?
        </div>
        <div className="collapse-content">
          <p className="text-xl text-customGray">
            Kurslarimizga 7 yoshdan boshlab yozilsa bo'ladi va bizda yosh
            kategoriyasi chegaralanmagan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
