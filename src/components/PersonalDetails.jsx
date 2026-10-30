const PersonalDetails = () => (
  <section id="strengths" className="py-12">
    <h2 className="font-poppins font-semibold text-white text-[45px] ss:text-[55px]">
      Strengths &amp; Hobbies
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-poppins font-semibold text-xl text-gradient">
          Strengths
        </h3>
        <p className="font-poppins text-dimWhite mt-3">
          Self-motivated, active listener, honest, strong willpower
        </p>
      </div>
      <div>
        <h3 className="font-poppins font-semibold text-xl text-gradient">
          Hobbies
        </h3>
        <p className="font-poppins text-dimWhite mt-3">
          Exploring new technologies, singing
        </p>
      </div>
    </div>
  </section>
);

export default PersonalDetails;
