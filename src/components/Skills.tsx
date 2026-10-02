const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Spring Web', 'REST APIs', 'JDBC'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    category: 'ORM / Persistence',
    skills: ['JPA', 'Hibernate'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'Postman'],
  },
  {
    category: 'Concepts',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'SOLID Principles',
      'Dependency Injection',
      'MVC / Layered Architecture',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal">
          <div className="accent-line" />
          <p className="section-label">Technical Skills</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-3 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            What I work with
          </h2>
          <p className="text-[#8a8a9a] text-sm max-w-lg mb-12">
            Technologies and concepts I actively use when building backend systems.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#16161a] border border-[#1e1e24] rounded-xl p-6 hover:border-[rgba(79,126,247,0.25)] transition-colors duration-200"
            >
              <p className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-4">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
