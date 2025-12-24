const certificates = [
  {
    title: "Data Science Internship Certificate",
    link: "https://drive.google.com/file/d/1iVyIx8VCWvQaUGWNT-1f44QEsnz9FzOP/view",
  },
  {
    title: "Google skills Certifications",
    link: "https://www.skills.google/public_profiles/ad46a560-beaf-4586-83cf-62c14423c224",
  },
  {
    title: "Oracle Genrative AI Certificate",
    link: "https://drive.google.com/file/d/1KImKPmMjw8Q9X3XYHEfsUKBeId4aYpJJ/view?usp=sharing",
  },{
    title: "Kaggle x Google",
    link: "https://drive.google.com/file/d/1yr_n3YOL_kdL9Akz-rEOfwrCNZlrW9r8/view?usp=sharing",
  },
  {
    title: "EY Microsoft",
    link: "https://drive.google.com/file/d/1v7V4zY350ciX6yKdyN3DmDZRSZzQyrzB/view?usp=sharing",
  },
  {
    title: "Forage x AWS",
    link: "https://drive.google.com/file/d/1XCmFK8Y5WOLoK-UVTkT8bR3zqySj7VwJ/view?usp=sharing",
  },
  {
    title: "Forage x Deloitte",
    link: "https://drive.google.com/file/d/1IPisUXV1JBUCVbTFK2ctYbopadqCoahg/view?usp=sharing",
  },{
    title: "Forage x TATA",
    link: "https://drive.google.com/file/d/1gD8htqH8q2AtNbm2MFlpJZtKwOckwmFe/view?usp=sharing",
  },
  {
    title: "OUTSKILL",
    link: "https://drive.google.com/file/d/1wjfuhX3VxxMPWchDNpEzBqgJXwlVfI-_/view?usp=sharing",
  },
  {
    title:"Bharat Intern",
    link:"https://drive.google.com/file/d/1ZVovHrqQ8A9ZxphksGdQr-P5rH1ivPB0/view?usp=sharing",
  },
  {
    title:"Udemy - Business Communication",
    link:"https://drive.google.com/file/d/13qea5iIDosIDZ3tnANHr_RdVXXWxn2TA/view?usp=sharing",
  },
  {
    title:"Code Clause",
    link:"https://drive.google.com/file/d/16vk6zVyyadaeobBJqfmgFW5JLlySusKE/view?usp=sharing",
  },
  {
    title:"CodeSoft",
    link:"https://drive.google.com/file/d/1rgbUnvQYkhSrgydO-Fs6jsHcW2luF1sY/view?usp=sharing",
  },
  {
    title:"Udemy - Intro to cryptocurrency",
    link:"https://drive.google.com/file/d/1ktOg8j8KFRUfcIeojvoXkpwTfUCM1KRC/view?usp=sharing",
  },
  {
    title:"Oasis Infobyte",
    link:"https://drive.google.com/file/d/1nltmiDY0kRIMwIcX9satjlaLJ9yHT5Lu/view?usp=sharing",
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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Big icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border border-slate-300 text-3xl text-slate-600">
              📄
            </div>

            {/* Title */}
            <p className="text-sm font-medium text-slate-800 text-center">
              {cert.title}
            </p>

            {/* Hint */}
            <span className="text-xs text-slate-500">
              View Certificate ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
