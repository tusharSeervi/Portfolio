const certificates = [
  {
    title: "DATAPLAY",
    description: "Data Science Internship Training",
    link: "https://drive.google.com/file/d/1iVyIx8VCWvQaUGWNT-1f44QEsnz9FzOP/view?usp=sharing",
    image: "/certificates/dataplay.png",
  },
  {
    title: "CODING NINJAS",
    description: "Coding Ninjas Full-Stack Development Bootcamp",
    link: "https://drive.google.com/file/d/1CG0fWMcUMESJ6Dv0kUIWsOOhfOQy9HOW/view?usp=sharing",
    image: "/certificates/CN.png",
  },
  {
    title: "GOOGLE CLOUD",
    description: "Google Cloud, AI, Kubernetes, and More Skills",
    link: "https://www.skills.google/public_profiles/ad46a560-beaf-4586-83cf-62c14423c224",
    image: "/certificates/googleCloud.png",
  },
  {
    title: "ORACLE CLOUD",
    description: "Oracle Cloud Infrastructure Generative AI Professional",
    link: "https://drive.google.com/file/d/1KImKPmMjw8Q9X3XYHEfsUKBeId4aYpJJ/view?usp=sharing",
    image: "/certificates/oracle.png",
  },
  {
    title: "KAGGLE X GOOGLE",
    description: "AI Agents Intensive Course With Google",
    link: "https://drive.google.com/file/d/1yr_n3YOL_kdL9Akz-rEOfwrCNZlrW9r8/view?usp=sharing",
    image: "/certificates/kaggleXgoogle.png",
  },
  {
    title: "EY X MICROSOFT",
    description: "AI Skills Passport",
    link: "https://drive.google.com/file/d/1v7V4zY350ciX6yKdyN3DmDZRSZzQyrzB/view?usp=sharing",
    image: "/certificates/eyXmicrosoft.png",
  },
  {
    title: "FORAGE X AWS",
    description: "Solutions Architecture Job Simulation",
    link: "https://drive.google.com/file/d/1XCmFK8Y5WOLoK-UVTkT8bR3zqySj7VwJ/view?usp=sharing",
    image: "/certificates/aws.png",
  },
  {
    title: "FORAGE X DELOITTE",
    description: "Cyber Job Simulation",
    link: "https://drive.google.com/file/d/1IPisUXV1JBUCVbTFK2ctYbopadqCoahg/view?usp=sharing",
    image: "/certificates/deloitte.png",
  },
  {
    title: "FORAGE X TATA",
    description: "GenAI Powered Data Analytics Job Simulation",
    link: "https://drive.google.com/file/d/1gD8htqH8q2AtNbm2MFlpJZtKwOckwmFe/view?usp=sharing",
    image: "/certificates/tata.png",
  },
  {
    title: "OUTSKILL",
    description: "Generative AI Mastermind",
    link: "https://drive.google.com/file/d/1wjfuhX3VxxMPWchDNpEzBqgJXwlVfI-_/view?usp=sharing",
    image: "/certificates/outskill.png",
  },
  {
    title: "BHARAT INTERN",
    description: "Virtual Internship Program In App Development",
    link: "https://drive.google.com/file/d/1ZVovHrqQ8A9ZxphksGdQr-P5rH1ivPB0/view?usp=sharing",
    image: "/certificates/bharatIntern.png",
  },
  {
    title: "UDEMY – Business Communication",
    description: "Master Course In Business Communication",
    link: "https://drive.google.com/file/d/13qea5iIDosIDZ3tnANHr_RdVXXWxn2TA/view?usp=sharing",
    image: "/certificates/udemy.png",
  },
  {
    title: "CODE CLAUSE",
    description: "Virtual Internship In Python Development",
    link: "https://drive.google.com/file/d/16vk6zVyyadaeobBJqfmgFW5JLlySusKE/view?usp=sharing",
    image: "/certificates/codeClause.png",
  },
  {
    title: "CODESOFT",
    description: "Virtual Internship In C++ Programming",
    link: "https://drive.google.com/file/d/1rgbUnvQYkhSrgydO-Fs6jsHcW2luF1sY/view?usp=sharing",
    image: "/certificates/codesoft.png",
  },
  {
    title: "UDEMY – Cryptocurrency Basics",
    description: "Cryptocurrency and blockchain basics",
    link: "https://drive.google.com/file/d/1ktOg8j8KFRUfcIeojvoXkpwTfUCM1KRC/view?usp=sharing",
    image: "/certificates/udemy.png",
  },
  {
    title: "OASIS INFOBYTE",
    description: "Virtual Internship In Web Development and Designing",
    link: "https://drive.google.com/file/d/1nltmiDY0kRIMwIcX9satjlaLJ9yHT5Lu/view?usp=sharing",
    image: "/certificates/oasis.png",
  },
];


const Certifications = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Certifications &{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Internship
        </span>
      </h1>
      <p className="mt-4 text-slate-500 max-w-3xl">
  A curated set of certifications reflecting hands-on experience
  across full-stack development, cloud, AI, and modern engineering practices.
</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition"
          >
            {/* Small image */}
            <div className="w-22 h-22  rounded-full overflow-hidden border border-slate-300 bg-slate-50 flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Title */}
            <p className="text-sm font-semibold text-slate-800 text-center">
              {cert.title}
            </p>

            {/* Short description */}
            <p className="text-xs text-slate-500 text-center">
              {cert.description}
            </p>

            {/* View link */}
            <span className="text-xs font-medium text-blue-600 group-hover:underline">
              View Certificate ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
