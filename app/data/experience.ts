export interface ExperienceItem {
  role: string
  company: string
  period: string
  description?: string
  bullets: string[]
  skills?: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  field: string
  details?: string
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'LIKI Mobile Solutions',
    period: '2025 – Present',
    bullets: [
      'Development and maintenance of modern web applications.',
      'Implementation of new user-facing features and optimization of existing solutions.',
      'Collaboration with cross-functional project teams to deliver business requirements.'
    ],
    skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    role: 'CAD Designer',
    company: 'Align Technology',
    period: '2021 – 2023',
    bullets: [
      'Created virtual treatment plans in accordance with strict quality assurance standards.',
      'Managed business processes, requests, and case tickets using Salesforce CRM.',
      'Conducted in-depth analysis of technical data and product documentation.',
      'Onboarded and mentored new team members on operational tools and technical workflows.'
    ],
    skills: ['Salesforce', 'AutoCAD 2D/3D', 'Data Analysis', 'Process Management']
  },
  {
    role: 'Data Specialist',
    company: 'THESAR Systemy Informatyczne Sp. z o.o.',
    period: '2020 – 2021',
    bullets: [
      'Analyzed and verified telecommunications infrastructure technical data for Orange Polska.',
      'Managed technical documentation and network infrastructure records.',
      'Audited data integrity, performed updates, and ensured compliance in IT databases.'
    ],
    skills: ['Data Analysis', 'Telecom Infrastructure', 'Technical Documentation']
  }
]

export const education: EducationItem[] = [
  {
    institution: 'Politechnika Częstochowska (Czestochowa University of Technology)',
    degree: 'Inżynier (B.Sc. in Engineering)',
    field: 'Computer Science (Informatyka)',
    period: '2025 – Present',
    details: 'Focus on software engineering, computer networks, system administration, and cybersecurity.'
  }
]
