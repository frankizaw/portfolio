export const translations = {
  pl: {
    nav: {
      about: 'O mnie',
      experience: 'Doświadczenie',
      projects: 'Projekty',
      skills: 'Umiejętności',
      contact: 'Kontakt'
    },
    hero: {
      role: 'Specjalista IT | Wsparcie • Dane • Systemy',
      tagline: 'Rozwiązywanie problemów technicznych, analiza danych i wsparcie systemów IT z solidnymi fundamentami informatycznymi.',
      viewWork: 'Zobacz Projekty',
      experience: 'Doświadczenie',
      github: 'GitHub'
    },
    about: {
      tag: 'Wprowadzenie',
      title: 'O mnie',
      p1: 'Posiadam wielowymiarowe doświadczenie techniczne: od weryfikacji i analizy danych infrastruktury telekomunikacyjnej dla Orange Polska, przez obsługę procesów biznesowych i zgłoszeń w systemie Salesforce CRM, po praktyczny rozwój i diagnozowanie aplikacji webowych.',
      p2: 'Specjalizuję się w rozwiązywaniu problemów technicznych (troubleshooting), konfiguracji środowisk Linux i Windows, podstawach sieci oraz sprawnym wsparciu operacji IT i zarządzaniu danymi.',
      cards: {
        roleLabel: 'Wsparcie & Diagnostyka',
        roleTitle: 'IT Support & Troubleshooting',
        roleCompany: 'Systemy • Sieci • Użytkownicy',
        roleDesc: 'Diagnozowanie awarii, konfiguracja OS (Linux/Windows), obsługa ticketów i wsparcie użytkowników.',

        eduLabel: 'Dane & Narzędzia Biznesowe',
        eduTitle: 'Data & Operations',
        eduSchool: 'Salesforce • Analiza Danych',
        eduDesc: 'Doświadczenie z danymi telekomunikacyjnymi Orange, CRM Salesforce, Jira oraz dokumentacją techniczną.',

        focusLabel: 'Programowanie & Narzędzia',
        focusTitle: 'Software & Scripting',
        focusSub: 'Python • Vue/Nuxt • JavaScript',
        focusDesc: 'Automatyzacja diagnostyki w Pythonie oraz praktyczne zrozumienie działania aplikacji webowych.',

        langLabel: 'Edukacja & Języki',
        langTitle: 'Informatyka & Angielski C1',
        langSub: 'Politechnika Częstochowska (Inżynier)',
        langDesc: 'Studia informatyczne oraz płynność w międzynarodowej komunikacji biznesowej i technicznej.'
      }
    },
    experience: {
      tag: 'Kariera & Edukacja',
      title: 'Doświadczenie Zawodowe',
      academicTag: 'Edukacja Akademicka',
      jobs: [
        {
          role: 'Frontend Developer & Technical Support',
          company: 'LIKI Mobile Solutions',
          period: '2025 – obecnie',
          bullets: [
            'Rozwój, utrzymanie oraz diagnozowanie problemów w aplikacjach webowych.',
            'Implementacja nowych funkcjonalności interfejsu oraz optymalizacja stabilności rozwiązań.',
            'Współpraca z zespołem projektowym przy realizacji wymagań biznesowych i rozwiązywaniu incydentów technicznych.'
          ],
          skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Troubleshooting']
        },
        {
          role: 'CAD Designer & Process Specialist',
          company: 'Align Technology',
          period: '2021 – 2023',
          bullets: [
            'Obsługa procesów biznesowych i zarządzanie zgłoszeniami (ticketami) w systemie Salesforce CRM.',
            'Tworzenie wirtualnych planów leczenia zgodnie z rygorystycznymi procedurami jakościowymi.',
            'Szczegółowa analiza danych technicznych i weryfikacja dokumentacji proceduralnej.',
            'Wsparcie techniczne oraz onboarding nowych pracowników w zakresie wykorzystywanych narzędzi i procesów.'
          ],
          skills: ['Salesforce CRM', 'Ticketing & Support', 'AutoCAD 2D/3D', 'Analiza danych', 'Dokumentacja']
        },
        {
          role: 'Data Specialist (Projekt dla Orange Polska)',
          company: 'THESAR Systemy Informatyczne Sp. z o.o.',
          period: '2020 – 2021',
          bullets: [
            'Analiza, weryfikacja i audyt poprawności danych technicznych infrastruktury telekomunikacyjnej dla Orange Polska.',
            'Praca ze specjalistyczną dokumentacją techniczną i ewidencją sieci telekomunikacyjnej.',
            'Aktualizacja i kontrola spójności danych w bazach systemowych.'
          ],
          skills: ['Analiza danych', 'Infrastruktura telekomunikacyjna', 'Weryfikacja jakości', 'Systemy bazodanowe']
        }
      ],
      education: [
        {
          institution: 'Politechnika Częstochowska',
          degree: 'Inżynier (B.Sc. in Engineering)',
          field: 'Informatyka',
          period: '2025 – obecnie',
          details: 'Program obejmujący inżynierię oprogramowania, sieci komputerowe, administrację systemami operacyjnymi, bazy danych i cyberbezpieczeństwo.'
        }
      ]
    },
    projects: {
      tag: 'Praktyczne Realizacje',
      title: 'Projekty',
      live: 'Demo',
      code: 'Kod',
      items: [
        {
          title: 'System & Network Health Checker',
          description:
            'Modułowe narzędzie diagnostyczne CLI i demon dla Linuksa badające zużycie CPU/RAM, partycje dyskowe, i-węzły, łączność sieciową (brama, ping, DNS, porty TCP) oraz jednostki systemd i logi błędów journalctl.',
          tech: ['Python', 'Linux', 'Rich', 'psutil', 'pytest', 'systemd'],
          github: 'https://github.com/frankizaw/system-health-checker',
          demo: ''
        },
        {
          title: 'Frontend Playground',
          description:
            'Projekt w czystym JavaScript skupiony na modularnej architekturze komponentów, interakcjach UI oraz obsłudze zdarzeń w przeglądarce.',
          tech: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/frankizaw/frontend-playground',
          demo: 'https://frontend-playground-pearl.vercel.app'
        }
      ]
    },
    skills: {
      tag: 'Kompetencje',
      title: 'Umiejętności & Narzędzia',
      categories: {
        frontend: 'Systemy & IT Support',
        systems: 'Dane & Narzędzia Biznesowe',
        tools: 'Web & Narzędzia Inżynierskie',
        languages: 'Języki'
      },
      frontendList: [
        'Administracja Linux & Windows',
        'Diagnostyka usterek (Troubleshooting)',
        'Podstawy sieci (TCP/IP, DNS, Gateway)',
        'Instalacja i konfiguracja systemów',
        'Automatyzacja i skrypty w Pythonie',
        'WordPress & Hosting'
      ],
      systemsList: [
        'Analiza i audyt spójności danych',
        'Salesforce CRM (Zgłoszenia / Tickety)',
        'Jira & Systemy Helpdesk / Service Desk',
        'Zarządzanie dokumentacją techniczną',
        'Pakiet MS Office (Excel, Word)',
        'AutoCAD 2D/3D'
      ],
      toolsList: [
        'Git & GitHub',
        'JavaScript (ES6+) & TypeScript',
        'Vue.js & Nuxt',
        'HTML5 & Tailwind CSS',
        'Vite',
        'Figma & Photoshop'
      ],
      languagesList: [
        { name: 'Polski', level: 'Ojczysty' },
        { name: 'Angielski', level: 'C1 (Zaawansowany)' },
        { name: 'Niemiecki', level: 'A2 (Podstawowy)' }
      ]
    },
    contact: {
      tag: 'Kontakt',
      title: 'Porozmawiajmy',
      description: 'Szukasz osoby łączącej wsparcie techniczne, analizę danych i zrozumienie oprogramowania? Zapraszam do bezpośredniego kontaktu.',
      email: 'Email',
      phone: 'Telefon',
      github: 'GitHub',
      location: 'Lokalizacja',
      locationVal: 'Polska'
    },
    footer: {
      copyright: '© 2026 Franciszek Zawadzki',
      builtWith: 'Stworzono w Nuxt & Vue'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      role: 'IT Specialist | Support • Data • Systems',
      tagline: 'Technical troubleshooting, data analysis, and IT systems support backed by strong computer science fundamentals.',
      viewWork: 'View Work',
      experience: 'Experience',
      github: 'GitHub'
    },
    about: {
      tag: 'Introduction',
      title: 'About Me',
      p1: 'I have multifaceted technical experience spanning telecommunications data verification for Orange Polska, business process & ticket management in Salesforce CRM, and hands-on web application development & troubleshooting.',
      p2: 'I specialize in technical troubleshooting, Linux & Windows system administration, networking fundamentals, and supporting IT operations with structured data workflows.',
      cards: {
        roleLabel: 'Support & Diagnostics',
        roleTitle: 'IT Support & Troubleshooting',
        roleCompany: 'Systems • Networks • Users',
        roleDesc: 'Incident diagnostics, OS configuration (Linux/Windows), ticket handling, and user support.',

        eduLabel: 'Data & Business Tools',
        eduTitle: 'Data & Operations',
        eduSchool: 'Salesforce • Data Analysis',
        eduDesc: 'Hands-on telecom data auditing for Orange Polska, Salesforce CRM, Jira, and rigorous documentation.',

        focusLabel: 'Software & Tools',
        focusTitle: 'Software & Scripting',
        focusSub: 'Python • Vue/Nuxt • JavaScript',
        focusDesc: 'Diagnostic automation in Python combined with a solid understanding of web applications.',

        langLabel: 'Education & Languages',
        langTitle: 'Computer Science & English C1',
        langSub: 'Czestochowa University of Technology',
        langDesc: 'B.Sc. Engineering studies and full professional English communication fluency.'
      }
    },
    experience: {
      tag: 'Career & Education',
      title: 'Professional Experience',
      academicTag: 'Academic Background',
      jobs: [
        {
          role: 'Frontend Developer & Technical Support',
          company: 'LIKI Mobile Solutions',
          period: '2025 – Present',
          bullets: [
            'Developing, maintaining, and troubleshooting modern web applications.',
            'Implementing new user-facing features and optimizing overall software reliability.',
            'Collaborating with project teams to deliver business requirements and resolve technical incidents.'
          ],
          skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Troubleshooting']
        },
        {
          role: 'CAD Designer & Process Specialist',
          company: 'Align Technology',
          period: '2021 – 2023',
          bullets: [
            'Managed business processes, requests, and case tickets in Salesforce CRM.',
            'Constructed digital treatment plans adhering to strict quality assurance standards.',
            'Conducted thorough technical data analysis and procedural documentation reviews.',
            'Provided technical support and onboarding for new team members on operational workflows and tools.'
          ],
          skills: ['Salesforce CRM', 'Ticketing & Support', 'AutoCAD 2D/3D', 'Data Analysis', 'Documentation']
        },
        {
          role: 'Data Specialist (Project for Orange Polska)',
          company: 'THESAR Systemy Informatyczne Sp. z o.o.',
          period: '2020 – 2021',
          bullets: [
            'Audited, verified, and reconciled technical telecommunications infrastructure data for Orange Polska.',
            'Managed technical network infrastructure documentation and records.',
            'Ensured database accuracy and performed updates across corporate IT systems.'
          ],
          skills: ['Data Analysis', 'Telecom Infrastructure', 'Quality Verification', 'Database Systems']
        }
      ],
      education: [
        {
          institution: 'Politechnika Częstochowska (Czestochowa University of Technology)',
          degree: 'Inżynier (B.Sc. in Engineering)',
          field: 'Computer Science',
          period: '2025 – Present',
          details: 'Curriculum focusing on software engineering, computer networks, operating system administration, database systems, and cybersecurity.'
        }
      ]
    },
    projects: {
      tag: 'Hands-on Work',
      title: 'Projects',
      live: 'Demo',
      code: 'Code',
      items: [
        {
          title: 'System & Network Health Checker',
          description:
            'Modular Linux system diagnostics CLI tool & daemon inspecting CPU/RAM metrics, disk partitions, inodes, network reachability (gateway, ping, DNS, TCP sockets), systemd units, and journalctl errors.',
          tech: ['Python', 'Linux', 'Rich', 'psutil', 'pytest', 'systemd'],
          github: 'https://github.com/frankizaw/system-health-checker',
          demo: ''
        },
        {
          title: 'Frontend Playground',
          description:
            'Interactive vanilla JavaScript project focused on modular component structure, UI interactions, and browser event management.',
          tech: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/frankizaw/frontend-playground',
          demo: 'https://frontend-playground-pearl.vercel.app'
        }
      ]
    },
    skills: {
      tag: 'Expertise',
      title: 'Skills & Tools',
      categories: {
        frontend: 'Systems & IT Support',
        systems: 'Data & Business Systems',
        tools: 'Web & Engineering Tools',
        languages: 'Languages'
      },
      frontendList: [
        'Linux & Windows Administration',
        'Technical Troubleshooting',
        'Networking Fundamentals (TCP/IP, DNS, Gateway)',
        'OS Installation & Configuration',
        'Automation & Python Scripting',
        'WordPress & Hosting'
      ],
      systemsList: [
        'Data Analysis & Integrity Auditing',
        'Salesforce CRM (Processes / Tickets)',
        'Jira & Helpdesk / Service Desk Systems',
        'Technical Documentation Management',
        'MS Office Suite (Excel, Word)',
        'AutoCAD 2D/3D'
      ],
      toolsList: [
        'Git & GitHub',
        'JavaScript (ES6+) & TypeScript',
        'Vue.js & Nuxt',
        'HTML5 & Tailwind CSS',
        'Vite',
        'Figma & Photoshop'
      ],
      languagesList: [
        { name: 'Polish', level: 'Native' },
        { name: 'English', level: 'C1 (Advanced)' },
        { name: 'German', level: 'A2 (Elementary)' }
      ]
    },
    contact: {
      tag: 'Get in Touch',
      title: "Let's connect",
      description: 'Looking for a reliable specialist who bridges technical support, data management, and software understanding? Feel free to reach out directly.',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      location: 'Location',
      locationVal: 'Poland'
    },
    footer: {
      copyright: '© 2026 Franciszek Zawadzki',
      builtWith: 'Built with Nuxt & Vue'
    }
  }
}
