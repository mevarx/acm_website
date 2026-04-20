'use client';

import { CSSProperties } from 'react';
import './ReflectiveCard.css';
import { Award } from 'lucide-react';
import type { TeamMember, FacultySponsor } from '@/data/team';
import { motion } from 'framer-motion';

const LinkedinIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Team Member Card ─────────────────────────────────────── */

interface ReflectiveCardProps {
  member: TeamMember;
  featured?: boolean;
  index?: number;
  metalness?: number;
  roughness?: number;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  glassDistortion?: number;
}

function SvgFilters({
  filterId,
  baseFrequency,
  displacementStrength,
  specularConstant,
  glassDistortion,
}: {
  filterId: string;
  baseFrequency: number;
  displacementStrength: number;
  specularConstant: number;
  glassDistortion: number;
}) {
  return (
    <svg className="reflective-svg-filters" aria-hidden="true">
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves={2} result="noise" />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={displacementStrength} xChannelSelector="R" yChannelSelector="G" result="rippled" />
          <feSpecularLighting in="noiseAlpha" surfaceScale={displacementStrength} specularConstant={specularConstant} specularExponent={20} lightingColor="#ffffff" result="light">
            <fePointLight x={0} y={0} z={300} />
          </feSpecularLighting>
          <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
          <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="solidAlpha" />
          <feMorphology in="solidAlpha" operator="erode" radius={45} result="erodedAlpha" />
          <feGaussianBlur in="erodedAlpha" stdDeviation={10} result="blurredMap" />
          <feComponentTransfer in="blurredMap" result="glassMap">
            <feFuncA type="linear" slope={0.5} intercept={0} />
          </feComponentTransfer>
          <feDisplacementMap in="metallic-result" in2="glassMap" scale={glassDistortion} xChannelSelector="A" yChannelSelector="A" result="final" />
        </filter>
      </defs>
    </svg>
  );
}

// Webcam removed — CSS gradient fallback renders the metallic effect natively.

const ReflectiveCard = ({
  member,
  featured = false,
  index = 0,
  metalness = 1,
  roughness = 0.3,
  displacementStrength = 18,
  noiseScale = 1.2,
  specularConstant = 4.8,
  glassDistortion = 12,
}: ReflectiveCardProps) => {
  const filterId = `metallic-${member.initials.toLowerCase()}`;
  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);

  const style = {
    '--metalness': metalness,
    '--roughness': roughness,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div
        className={`reflective-card-container reflective-card-light ${featured ? 'reflective-card-featured' : ''}`}
        style={style}
      >
        <SvgFilters
          filterId={filterId}
          baseFrequency={baseFrequency}
          displacementStrength={displacementStrength}
          specularConstant={specularConstant}
          glassDistortion={glassDistortion}
        />
        <div className="reflective-noise" />
        <div className="reflective-sheen" />
        <div className="reflective-border" />

        <div className="reflective-content">
          {/* Header */}
          <div className="card-header">
            <div className="security-badge">
              <Award size={11} className="security-icon" />
              <span>ACM SRM AP</span>
            </div>
            <span className="status-dot" />
          </div>

          {/* Body */}
          <div className="card-body">
            <div
              className="member-avatar"
              style={{ background: `linear-gradient(135deg, ${member.color} 0%, #FEBC2E 100%)` }}
            >
              {member.initials}
            </div>
            <div className="user-info">
              <h2 className="user-name">{member.name.toUpperCase()}</h2>
              <p className="user-role">{member.role.toUpperCase()}</p>
            </div>
          </div>

          {/* Footer — LinkedIn only, no hierarchy label */}
          <div className="card-footer" style={{ justifyContent: 'flex-end' }}>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Faculty Sponsor Card (light variant) ─────────────────── */

interface FacultyReflectiveCardProps {
  sponsor: FacultySponsor;
  index?: number;
  metalness?: number;
  roughness?: number;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  glassDistortion?: number;
}

export function FacultyReflectiveCard({
  sponsor,
  index = 0,
  metalness = 0.7,
  roughness = 0.25,
  displacementStrength = 14,
  noiseScale = 1.0,
  specularConstant = 3.5,
  glassDistortion = 10,
}: FacultyReflectiveCardProps) {
  const filterId = `metallic-faculty-${sponsor.initials.toLowerCase()}`;
  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);

  const style = {
    '--metalness': metalness,
    '--roughness': roughness,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div
        className="reflective-card-container reflective-card-featured reflective-card-light"
        style={style}
      >
        <SvgFilters
          filterId={filterId}
          baseFrequency={baseFrequency}
          displacementStrength={displacementStrength}
          specularConstant={specularConstant}
          glassDistortion={glassDistortion}
        />
        <div className="reflective-noise" />
        <div className="reflective-sheen" />
        <div className="reflective-border" />

        <div className="reflective-content">
          {/* Header */}
          <div className="card-header">
            <div className="security-badge">
              <Award size={11} className="security-icon" />
              <span>ACM SRM AP</span>
            </div>
            <span className="status-dot" />
          </div>

          {/* Body */}
          <div className="card-body">
            <div
              className="member-avatar"
              style={{ background: `linear-gradient(135deg, ${sponsor.color} 0%, #FEBC2E 100%)` }}
            >
              {sponsor.initials}
            </div>
            <div className="user-info">
              <h2 className="user-name">{sponsor.name.toUpperCase()}</h2>
              <p className="user-role">{sponsor.designation}</p>
            </div>
          </div>

          {/* Footer — department */}
          <div className="card-footer" style={{ justifyContent: 'center' }}>
            <div className="id-section" style={{ textAlign: 'center' }}>
              <span className="label">Department</span>
              <span className="value" style={{ fontSize: '10px', lineHeight: '1.4' }}>
                {sponsor.department}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReflectiveCard;
