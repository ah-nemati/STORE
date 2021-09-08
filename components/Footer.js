import React from "react";

export const Footer = () => {
  return (
    <div dir="rtl">
      <footer className="bg-gray-100 p-4 md:py-8 text-gray-500 mt-10">
        <div className="grid gap-4 grid-cols-4 grid-row-2 container md:max-w-screen-xl mx-auto">
          <section className=" col-span-4 md:col-span-3 flex flex-col justify-start">
            <div>
              <h2 className="text-primary font-bold text-xs sm:text-sm mb-4 ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </h2>
              <p className="sm:leading-8 text-xs leading-4 text-justify ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex justify-between items-center w-full"></ul>
            </div>
          </section>
          <section className=" col-span-4 md:col-span-1 flex">
            <img
              src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
              alt="نماد اعتماد زرین پال"
              width="96"
              height="100"
            />
          </section>
          <section className=" col-span-4">
            <p className="">تمامی حقوق برای دیجی مارکت محفوظ است</p>
          </section>
        </div>
      </footer>
    </div>
  );
};
