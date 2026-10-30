import { extraCurricular } from "../constants";

const Certifications = () => (
  <section id="certifications" className="py-12">
    <h2 className="font-poppins font-semibold text-white text-[45px] ss:text-[55px]">
      Certifications
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {extraCurricular.map((certification) => (
        <article
          key={certification.id}
          className="rounded-xl border border-gray-700 p-6"
        >
          <h3 className="font-poppins font-semibold text-xl text-gradient">
            {certification.title}
          </h3>
          <p className="font-poppins text-dimWhite mt-2">
            {certification.organisation}
          </p>
          <p className="font-poppins text-teal-200 mt-1">
            {certification.duration}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
