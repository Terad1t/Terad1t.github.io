const skills = [
  'Java',
  'Python',
  'TypeScript',
  'JavaScript',
  'Docker',
  'GCS',
  'Git',
  'Databricks',
  'Apache Spark',
  'Scikit-learn',
  'PyTorch',
  'Excel',
  'MySQL',
  'PostgreSQL',
];

const highlights = [
  'Estudante de ADS com foco em Data Science e automação.',
  'Experiência com automações no TJDFT em sistemas.',
  'Construção de soluções enxutas, escaláveis e práticas.',
];

const projects = [
  {
    title: 'Projeto de RPG',
    description: 'Jogo de RPG com foco em exploração, progressão de personagem e atmosfera mais imersiva.',
    tags: ['RPG', 'Game Design', 'Exploração'],
    link: 'https://github.com/terad1t',
  },
  {
    title: 'Pipeline de Dados Climáticos com ML',
    description: 'Pipeline com método medalhão para extrair, transformar, persistir e prever dados.',
    tags: ['Python', 'ML', 'Data Engineering'],
    link: 'https://github.com/Terad1t/pipeline_weather_ml',
  },
];

const links = [
  { label: 'GitHub', href: 'https://github.com/terad1t' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arthur-alves-ara%C3%BAjo-27b416214',
  },
];

const particles = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 3.2) % 100}%`,
  size: [1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4][index % 7],
  duration: 10 + (index % 6),
  delay: -(index * 0.8),
}));

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${index}`}
            className="particle"
            style={{
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="grain" />

      <header className="topbar">
        <div>
          <p className="eyebrow">The Knight Dev Archive</p>
          <h1>Terad1t</h1>
        </div>

        <nav className="nav-links" aria-label="Redes sociais">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="layout">
        <section className="hero card-panel">
          <div className="hero-copy">
            <p className="eyebrow">Data & ML Engineer</p>
            <h2>
              Portfólio Data Engineer {' '}
              <span>Terad1t</span>.
            </h2>
            <p className="hero-text">
              Sou estudante de ADS, apaixonado por tecnologia e data science.
              Faço pipeline de dados com Python, SQL e tecnologias de engenharia de dados.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Ver projetos
              </a>
              <a className="button secondary" href="https://github.com/terad1t" target="_blank" rel="noreferrer">
                Abrir GitHub
              </a>
            </div>
          </div>

          <aside className="hero-orb" aria-hidden="true">
            <div className="mask-mask">
              <span className="mask-eye mask-eye-left" />
              <span className="mask-eye mask-eye-right" />
              <span className="mask-mark" />
            </div>
          </aside>
        </section>

        <section className="grid-two">
          <article className="card-panel">
            <p className="eyebrow">Sobre mim</p>
            <ul className="feature-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-panel">
            <p className="eyebrow">Arsenal técnico</p>
            <div className="skill-grid" aria-label="Tecnologias">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section id="projetos" className="projects-section">
          <div className="section-heading">
            <p className="eyebrow">Projetos</p>
            <h3>Construções recentes</h3>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card card-panel">
                <div className="project-topline">
                  <span className="project-sigil" aria-hidden="true" />
                  <p>{project.tags.join(' • ')}</p>
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Abrir repositório
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="card-panel callout">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h3>Mais projetos, mais refinamento, mais profundidade.</h3>
          </div>
          <a className="button primary" href="https://github.com/terad1t" target="_blank" rel="noreferrer">
            Ver tudo no GitHub
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Terad1t · Portfólio</p>
      </footer>
    </div>
  );
}

export default App;