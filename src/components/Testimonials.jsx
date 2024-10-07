import TestimonialSlider from "./testimonialSlider";

const Testimonials = () => {
  return (
    <section className="bg-[#0A2640] px-28">
      <div className="md:container mx-auto mt-20 py-10 sm:py-12 px-5">
        <div className="mb-10 md:mb-14">
          <h1 className="text-slate-50 max-w-3xl mx-auto text-center leading-8 sm:leading-[50px] md:leading-[60px] tracking-tight text-[28px] xs:text-[36px] sm:text-[40px] md:text-5xl mb-8">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;


