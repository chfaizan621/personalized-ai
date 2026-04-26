import './App.css'

const featureCards = [
  {
    eyebrow: 'Profile intelligence',
    title: 'CV parsing and skill extraction',
    body:
      'Capture work history, achievements, and strengths so the assistant can compare them against a job description.',
  },
  {
    eyebrow: 'Job matching',
    title: 'Find roles worth applying to',
    body:
      'Rank jobs by relevance, missing skills, location, and seniority so people can focus on the best-fit opportunities.',
  },
  {
    eyebrow: 'Resume tailoring',
    title: 'Rewrite bullets for each application',
    body:
      'Generate sharper summaries, skill sections, and achievement bullets that match the target role without inventing experience.',
  },
]

const workflowSteps = [
  'Upload a CV or build a profile from scratch.',
  'Compare the profile against live job descriptions.',
  'Generate a tailored resume, cover note, and interview prep.',
  'Track what changed and reuse the strongest language next time.',
]

const modelNotes = [
  'Use a backend endpoint to keep API keys out of the browser.',
  'Store user CV data securely and only send the minimum necessary context to the model.',
  'Keep every generated edit reviewable so users stay in control of the final CV.',
]

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">OpenAI-ready job search assistant</p>
          <h1>Build a product that helps people find jobs and tailor their CVs.</h1>
          <p className="lead">
            This React starter is set up as a foundation for profile analysis,
            job matching, and resume rewriting. It is designed to become a tool
            that works for you, your friend, and eventually anyone looking for a
            better application workflow.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#features">
              Explore features
            </a>
            <a className="secondary-action" href="#architecture">
              Review architecture
            </a>
          </div>

          <dl className="hero-stats" aria-label="Project goals">
            <div>
              <dt>Core flow</dt>
              <dd>CV to job match to tailored application</dd>
            </div>
            <div>
              <dt>Initial stack</dt>
              <dd>React + Vite + TypeScript</dd>
            </div>
            <div>
              <dt>Model approach</dt>
              <dd>Backend API wrapper for OpenAI calls</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-card" aria-label="Product preview">
          <div className="preview-badge">Prototype concept</div>
          <h2>Application intelligence loop</h2>
          <ul>
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section-block" id="features">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Start with the parts that create immediate value.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <p className="card-eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block architecture" id="architecture">
        <div className="section-heading">
          <p className="eyebrow">Architecture</p>
          <h2>Keep the OpenAI integration behind a clean service boundary.</h2>
        </div>

        <div className="architecture-grid">
          <article className="architecture-card">
            <h3>Frontend</h3>
            <p>
              React handles profile intake, job views, result rendering, and all
              user interactions.
            </p>
          </article>

          <article className="architecture-card">
            <h3>API layer</h3>
            <p>
              A small service module posts requests to a backend endpoint that
              can call OpenAI safely.
            </p>
          </article>

          <article className="architecture-card accent">
            <h3>Trust layer</h3>
            <p>
              Keep edits explainable, let users approve every change, and never
              treat generated output as a final CV without review.
            </p>
          </article>
        </div>

        <div className="notes-panel">
          <h3>Model notes</h3>
          <ul>
            {modelNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
