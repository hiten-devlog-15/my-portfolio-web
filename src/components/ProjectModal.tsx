import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useEffect } from 'react';

export interface ProjectDetail {
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  architecture: string;
  features: string[];
  techStack: string[];
  keyLearnings: string[];
  githubUrl: string;
}

interface ProjectModalProps {
  project: ProjectDetail;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-6 border-b border-[#1e1e24]">
          <div>
            <p className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-2">
              Project Details
            </p>
            <h2
              id="modal-title"
              className="text-2xl font-bold text-[#f0f0f2] tracking-tight"
              style={{ letterSpacing: '-0.015em' }}
            >
              {project.name}
            </h2>
            <p className="text-sm text-[#8a8a9a] mt-1">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#5a5a6e] hover:text-[#f0f0f2] transition-colors ml-6 mt-1 flex-shrink-0 text-xl leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Problem</h3>
            <p className="text-sm text-[#c8c8d8] leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Approach</h3>
            <p className="text-sm text-[#8a8a9a] leading-relaxed">{project.approach}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Architecture</h3>
            <p className="text-sm text-[#8a8a9a] leading-relaxed">{project.architecture}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#8a8a9a]">
                  <span className="w-1 h-1 rounded-full bg-[#4f7ef7] flex-shrink-0 mt-[7px]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-3">Key Learnings</h3>
            <ul className="space-y-2">
              {project.keyLearnings.map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-[#8a8a9a]">
                  <span className="w-1 h-1 rounded-full bg-[#2a2a35] flex-shrink-0 mt-[7px]" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-[#1e1e24] flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <GithubIcon size={15} />
              View on GitHub
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              <ExternalLink size={14} />
              Open Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
