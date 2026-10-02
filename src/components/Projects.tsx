import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal, { type ProjectDetail } from './ProjectModal';

const GITHUB_PROFILE = 'https://github.com/hiten-devlog-15';

const projects: (ProjectDetail & { summary: string; stack: string[] })[] = [
  {
    name: 'Bank Management System',
    tagline: 'Layered backend system for core banking operations',
    summary:
      'A backend application modelling core banking operations — account management, deposits, withdrawals and balance enquiry — built with a clean layered architecture.',
    problem:
      'Design a backend system that models essential banking operations: creating accounts, managing balances, processing transactions and maintaining data integrity — structured so the codebase remains maintainable as functionality grows.',
    approach:
      'Applied a layered architecture separating the Controller, Service and Repository layers. Business logic is contained entirely in the service layer, keeping controllers thin and data access isolated behind repository interfaces.',
    architecture:
      "Three-tier layered architecture: Controller layer handles request routing; Service layer encapsulates all business rules and validation; Repository/DAO layer manages database operations via JDBC with PostgreSQL. Dependencies are injected via Spring's IoC container.",
    features: [
      'Account creation and customer registration',
      'Deposit and withdrawal operations with balance validation',
      'Balance enquiry and transaction history',
      'Input validation at the service layer',
      'Persistent data storage using PostgreSQL',
      'Clean REST API endpoints',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Web', 'JDBC', 'PostgreSQL', 'REST APIs', 'Postman'],
    keyLearnings: [
      'How layered architecture separates concerns in a Spring Boot application',
      'Implementing data persistence with JDBC and PostgreSQL',
      'Writing validation logic at the service layer',
      'Designing clean REST endpoints for CRUD operations',
      'Managing dependency injection with Spring',
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    githubUrl: GITHUB_PROFILE,
  },
  {
    name: 'Hospital Management System',
    tagline: 'Backend system for managing hospital records and operations',
    summary:
      'A backend application for managing hospital entities — patients, doctors, appointments and departments — with structured data persistence and clean API design.',
    problem:
      'Build a backend system to manage core hospital records: patient registration, doctor listing, department assignments and appointment scheduling — with reliable data persistence and a structured API surface.',
    approach:
      'Modelled the domain entities and their relationships in a relational schema. Used Spring Data JPA with Hibernate for ORM-based persistence, exposing functionality through RESTful endpoints.',
    architecture:
      'MVC-style layered architecture. Entity classes mapped to database tables via JPA annotations. Repository interfaces extending JpaRepository for standard data operations. Service layer for business logic. Controller layer for REST endpoint exposure.',
    features: [
      'Patient registration and profile management',
      'Doctor and department management',
      'Appointment scheduling and retrieval',
      'ORM-based persistence using JPA and Hibernate',
      'RESTful API endpoints for all core operations',
      'Structured relational data model',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Web', 'JPA', 'Hibernate', 'PostgreSQL', 'REST APIs'],
    keyLearnings: [
      'Mapping Java entities to relational tables using JPA annotations',
      'Using Spring Data JPA repositories to handle persistence',
      'Structuring a multi-entity domain with relationships',
      'Designing REST APIs over a relational data model',
      'Understanding the Hibernate ORM layer and query generation',
    ],
    stack: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'PostgreSQL'],
    githubUrl: GITHUB_PROFILE,
  },
  {
    name: 'YouTube Clone',
    tagline: 'Full-stack video platform with backend API and frontend UI',
    summary:
      'A YouTube-inspired application featuring a backend API and a frontend UI — demonstrating end-to-end application development from data management to client-side rendering.',
    problem:
      'Build a functional video-sharing platform that covers both the backend data layer (video metadata, categories, search) and a responsive frontend UI — practicing full-stack application structure.',
    approach:
      'Backend built with Java and Spring Boot to serve video metadata via REST endpoints. Frontend consumes the API and renders video listings, individual video pages and basic navigation — following component-based UI structure.',
    architecture:
      'Backend: REST API with Spring Boot providing video data endpoints. Frontend: JavaScript-based UI consuming the backend API. Data stored and managed on the server side, with the client handling rendering and user interaction.',
    features: [
      'Video listing and category browsing',
      'Video detail page with metadata display',
      'Search and filter functionality',
      'REST API serving video data',
      'Responsive frontend layout',
      'End-to-end request/response flow',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
    keyLearnings: [
      'Building and consuming REST APIs across frontend and backend',
      'Organising a full-stack project with clear separation of concerns',
      'Handling data flow from database to client-side rendering',
      'Designing UI layouts that adapt to API-driven content',
    ],
    stack: ['Java', 'Spring Boot', 'JavaScript', 'PostgreSQL'],
    githubUrl: GITHUB_PROFILE,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal">
          <div className="accent-line" />
          <p className="section-label">Featured Projects</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-3 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Things I've built
          </h2>
          <p className="text-[#8a8a9a] text-sm max-w-lg mb-12">
            Backend-focused projects demonstrating real application development — layered
            architecture, persistence, REST APIs and clean code organisation.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card flex flex-col p-7"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-[#f0f0f2] leading-snug">
                    {project.name}
                  </h3>
                </div>
                <p className="text-xs text-[#4f7ef7] font-mono mb-4">{project.tagline}</p>
                <p className="text-sm text-[#8a8a9a] leading-relaxed mb-5">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-[#1e1e24] pt-5 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label={`${project.name} on GitHub`}
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <button
                  onClick={() => setSelected(project)}
                  className="btn-secondary flex items-center gap-2 text-xs px-4 py-2"
                  aria-label={`View details for ${project.name}`}
                >
                  View Details
                  <ChevronRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
