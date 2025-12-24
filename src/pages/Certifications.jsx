import { CTA } from "../components";

const certifications = [
  {
    title: "Full-Stack Software Engineering Bootcamp",
    issuer: "Coding Ninjas",
    details: "Frontend, Backend, DBMS, DSA, Aptitude, GenAI",
    link: "https://your-link-here",
  },
  {
    title: "Data Science Internship Certificate",
    issuer: "DATALAY",
    details: "SQL, Excel, Power BI Dashboards",
    link: "https://your-link-here",
  },
  {
    title: "Data Analytics & Visualization",
    issuer: "Kaggle × Google",
    details: "Data analysis and visualization fundamentals",
    link: "https://your-link-here",
  },
  {
    title: "Cloud & Enterprise Foundations",
    issuer: "Oracle | EY × Microsoft",
    details: "Cloud fundamentals and enterprise tools",
    link: "https://your-link-here",
  },
  {
    title: "Virtual Work Experience Programs",
    issuer: "Forage (AWS, Tata, Deloitte)",
    details: "Industry-simulated tasks and workflows",
    link: "https://your-link-here",
  },
];

const Certifications = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Certifications</span>
      </h1>

      <p className='mt-5 text-slate-500 max-w-3xl'>
        A collection of certifications and training programs that strengthened my foundations
        across software engineering, data science, and cloud technologies.
      </p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition'
          >
            <h3 className='text-xl font-semibold text-black'>
              {cert.title}
            </h3>

            <p className='mt-1 text-sm text-slate-600 font-medium'>
              {cert.issuer}
            </p>

            <p className='mt-3 text-sm text-slate-500'>
              {cert.details}
            </p>

            {cert.link && (
              <a
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 text-sm font-medium text-blue-600 hover:underline'
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>

      <hr className='border-slate-200 mt-16' />

      <CTA />
    </section>
  );
};

export default Certifications;
