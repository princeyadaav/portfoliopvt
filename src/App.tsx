import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, Check, CircleDot, Code2,
  Database, Download, ExternalLink, Github, Linkedin, Mail, Menu, Moon, Network,
  Search, Sparkles, Sun, X, Zap,
} from 'lucide-react'
import { externalLinkLabel, profile } from './config'
import { projects, Project, skillGroups } from './data'
import { svmDataset, SvmSettings, trainLinearSvm } from './svm'

const navItems = ['About', 'Skills', 'Projects', 'SVM Lab', 'Journey', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [search, setSearch] = useState('')
  const [svmSettings, setSvmSettings] = useState<SvmSettings>({ learningRate: 0.001, c: 1, epochs: 1000 })
  const svmModel = useMemo(() => trainLinearSvm(svmDataset, svmSettings), [svmSettings])

  const visibleProjects = useMemo(() => projects.filter((project) => {
    const matchesFilter = filter === 'All' || project.category === filter
    const query = search.toLowerCase()
    return matchesFilter && (!query || `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase().includes(query))
  }), [filter, search])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Prince Yadav home">
          <span className="brand-mark"><Network size={18} /></span>
          <span>Prince<span className="muted">  Yadav</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button className="header-cta" onClick={() => scrollTo('contact')}>Let’s talk <ArrowUpRight size={15} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Computer Science student <span className="divider">/</span> AI & Data Science</div>
            <h1>Building intelligent<br /><span className="gradient-text">solutions</span> with<br />data, AI & code.</h1>
            <p className="hero-intro">I’m a Computer Science student turning data into insights and building practical AI-powered applications that connect models with real-world products.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('projects')}>Explore my projects <ArrowDown size={16} /></button>
              <a className="text-button" href={profile.resume || '#contact'} download={profile.resume ? true : undefined}>{externalLinkLabel(profile.resume, 'Download resume')} <Download size={16} /></a>
            </div>
            <div className="social-row">
              <span className="social-label">Find me on</span>
              <a href={profile.github || '#contact'} aria-label="GitHub"><Github size={18} /></a>
              <a href={profile.linkedin || '#contact'} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <span className="social-line" />
              <span className="location"><CircleDot size={12} /> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract network visualization">
            <div className="visual-glow" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-grid" />
            <div className="node node-a"><Database size={19} /></div>
            <div className="node node-b"><BrainCircuit size={21} /></div>
            <div className="node node-c"><Code2 size={19} /></div>
            <div className="node node-center"><Sparkles size={28} /></div>
            <svg className="connection-lines" viewBox="0 0 500 500" aria-hidden="true">
              <path d="M130 144 L250 250 L370 135 M250 250 L385 350 M250 250 L115 365" />
            </svg>
            <div className="visual-caption"><span>01</span><span>build / measure / improve</span></div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to about"><span>Scroll to explore</span><ArrowDown size={15} /></button>
        </section>

        <section id="about" className="content-section about-section">
          <div className="section-kicker">01 / about me</div>
          <div className="section-heading"><h2>Curious by nature.<br /><span className="muted">Practical by choice.</span></h2><p>I learn by building — then I make the result clearer, more useful, and easier to improve.</p></div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">I’m pursuing Computer Science at <strong>Babu Banarasi Das University</strong>, exploring the space where data science, machine learning, backend APIs, and web applications meet.</p>
              <p>My focus is on strengthening fundamentals while shipping real projects: exploring data, engineering features, evaluating models, and connecting predictions to usable interfaces through FastAPI and Streamlit.</p>
              <div className="philosophy"><Zap size={18} /><span>Learn the fundamentals. Build real projects. Measure results. Keep improving.</span></div>
            </div>
            <div className="about-stats">
              <div><span className="stat-number">04<span>+</span></span><span className="stat-label">areas I’m actively exploring</span></div>
              <div><span className="stat-number">06</span><span className="stat-label">data & AI projects in the lab</span></div>
              <div><span className="stat-number">’28</span><span className="stat-label">expected graduation</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section skills-section">
          <div className="section-kicker">02 / toolkit</div>
          <div className="section-heading"><h2>Tools for turning<br /><span className="gradient-text">questions into systems.</span></h2><p>Technologies I use, experiment with, and am intentionally learning next.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group) => <div className="skill-card" key={group.title}><div className="skill-card-top"><h3>{group.title}</h3><span>{group.status}</span></div><div className="tag-list">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="section-kicker">03 / selected work</div>
          <div className="section-heading project-heading"><div><h2>Ideas, tested<br /><span className="muted">in the real world.</span></h2></div><p>Each project is a chance to practice the full loop — from messy data and model choices to a useful product.</p></div>
          <div className="filter-bar">
            <div className="filters">{['All', 'AI / ML', 'Data Science', 'Web Applications'].map((item) => <button className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
            <label className="search-box"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" aria-label="Search projects" /></label>
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project, index) => <article className={`project-card accent-${project.accent} ${index === 0 ? 'featured' : ''}`} key={project.id} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject(project)}>
              <div className="project-art"><span className="art-index">0{index + 1}</span><div className="art-lines" /><div className="art-orb"><BrainCircuit size={index === 0 ? 34 : 25} /></div><span className="art-category">{project.category}</span></div>
              <div className="project-body"><div className="project-meta"><span>{project.eyebrow}</span><span className="status-dot"><i />{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list compact">{project.tags.slice(0, 3).map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div><button aria-label={`View ${project.title} details`}><ArrowUpRight size={18} /></button></div></div>
            </article>)}
          </div>
          {!visibleProjects.length && <div className="empty-state">No projects match that search yet. Try a different keyword.</div>}
        </section>

        <section id="journey" className="content-section journey-section">
          <div className="section-kicker">04 / where I’m headed</div>
          <div className="section-heading"><h2>A roadmap, not<br /><span className="gradient-text">a finished story.</span></h2><p>Goals in motion — a deliberate path toward becoming a stronger data and ML engineer.</p></div>
          <div className="journey-layout"><div className="timeline">
            {['Strengthen Python, SQL, statistics, probability and data structures.', 'Get sharper at EDA, visualization and business problem-solving.', 'Go deeper into model selection, evaluation, explainability and deployment.', 'Explore deep learning, generative AI and production-quality ML APIs.'].map((item, i) => <div className="timeline-item" key={item}><span className="timeline-number">0{i + 1}</span><span className="timeline-dot" /><p>{item}</p></div>)}
          </div><div className="journey-note"><Sparkles size={22} /><h3>Next chapter</h3><p>Full-stack development, Docker, Linux, cloud deployment and better software engineering practices — all in service of building useful things.</p><span className="note-line" /></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" /><div className="section-kicker">05 / let’s connect</div>
          <h2>Have a project, internship<br />opportunity, or <span>interesting<br />problem to solve?</span></h2>
          <p>I’m always open to learning from thoughtful people and working on problems that matter.</p>
          <a className="primary-button" href={profile.email ? `mailto:${profile.email}` : '#contact'}><Mail size={16} /> {profile.email || 'Configure contact email'} <ArrowUpRight size={16} /></a>
          <div className="contact-links"><a href={profile.github || '#contact'}><Github size={17} /> {externalLinkLabel(profile.github, 'GitHub')}</a><a href={profile.linkedin || '#contact'}><Linkedin size={17} /> {externalLinkLabel(profile.linkedin, 'LinkedIn')}</a></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with curiosity & code <span className="footer-dot">·</span> <button onClick={() => scrollTo('top')} aria-label="Back to top"><ArrowUp size={14} /></button></span></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className={`project-modal accent-${selectedProject.accent}`} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close icon-button" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={18} /></button><div className="modal-art"><span>{selectedProject.category}</span><div className="art-orb"><BrainCircuit size={44} /></div></div><div className="modal-content"><div className="project-meta"><span>{selectedProject.eyebrow}</span><span className="status-dot"><i />{selectedProject.status}</span></div><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.details}</p><h4>What I’m exploring</h4><ul>{selectedProject.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className="modal-actions">{selectedProject.github && <a className="primary-button" href={selectedProject.github}><Github size={16} /> GitHub</a>}{selectedProject.demo && <a className="text-button" href={selectedProject.demo}>Live demo <ExternalLink size={15} /></a>}{!selectedProject.github && !selectedProject.demo && <span className="placeholder-note">Project links will be added when configured.</span>}</div></div></div></div>}
    </div>
  )
}

export default App
