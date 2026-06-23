export type Lang = 'en' | 'es';

// ─── Translations ─────────────────────────────────────────────────────────────
export const T = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      badge: 'Open to new opportunities',
      firstName: 'Joshua',
      lastName: 'Benavides Guzman',
      title: 'Software Engineering Student',
      subtitle: 'Innovation & Creative Code',
      bio: 'Building scalable enterprise software — bridging IT infrastructure depth, network administration, and full-stack development with real business impact.',
      cta1: 'View My Work',
      cta2: 'Download Resume (PDF)',
    },
    about: {
      label: '// about_me',
      heading: 'Career Focus',
      bio: 'Software Engineering student at Universidad Cenfotec with hands-on corporate IT help desk support and infrastructure experience. I blend structured networking fundamentals with dynamic software architecture to engineer secure, efficient full-stack solutions.',
      bio2: 'I thrive in distributed, agile environments where proactive self-management is key. Actively advancing my English fluency (B2+) to collaborate seamlessly across international remote teams and deliver maintainable clean code.',
      stat1: 'Year Experience',
      stat2: 'Projects Delivered',
      stat3: 'Contractor Ready',
      mission: {
        title: 'Mission',
        body: 'Deliver elegant, high-performing, and secure software applications that optimize user infrastructure and solve real-world technical problems.',
      },
      vision: {
        title: 'Vision',
        body: 'To grow as a lead Full-Stack Developer specializing in Cloud Architecture and Cybersecurity, driving robust and modern system deployments.',
      },
      values: {
        title: 'Core Values',
        body: 'Proactive troubleshooting. Craftsmanship in clean code. Continuous self-taught discipline and clear technical communication.',
      },
    },
    experience: { label: '// professional_experience', heading: 'Timeline' },
    skills: { label: '// tech_stack', heading: 'Technical Skills' },
    projects: {
      label: '// featured_projects',
      heading: 'Selected Work',
      viewDemo: 'View Live Demo',
      sourceCode: 'Source Code',
    },
    contact: {
      label: '// get_in_touch',
      heading: "Let's Transform Your Ideas into Reality",
      sub: 'Available for full-time contractor roles and freelance software engineering projects worldwide. Based in Costa Rica — working globally.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Your Message',
      formSend: 'Send Message',
      downloadCV: 'Download CV (PDF)',
      copyright: '© 2026 Joshua Benavides Guzman. Crafted with precision.',
    },
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades',
      firstName: 'Joshua',
      lastName: 'Benavides Guzmán',
      title: 'Estudiante de Ingeniería de Software',
      subtitle: 'Innovación & Código Creativo',
      bio: 'Creando software empresarial escalable — uniendo infraestructura de TI, administración de redes y desarrollo full-stack con impacto de negocio real.',
      cta1: 'Ver Mi Trabajo',
      cta2: 'Descargar Currículum (PDF)',
    },
    about: {
      label: '// sobre_mí',
      heading: 'Enfoque Profesional',
      bio: 'Estudiante de Ingeniería en Desarrollo de Software en Universidad Cenfotec con experiencia en soporte técnico corporativo help desk e infraestructura física. Combino bases sólidas de redes con programación para diseñar soluciones de software seguras y eficientes.',
      bio2: 'Prospero en entornos remotos y distribuidos mediante una autogestión proactiva. Mantengo un desarrollo constante de fluidez profesional en inglés (B2+) para integrarme eficazmente a equipos globales y entregar código limpio.',
      stat1: 'Año de Experiencia',
      stat2: 'Proyectos Entregados',
      stat3: 'Listo para Contractor',
      mission: {
        title: 'Misión',
        body: 'Entregar aplicaciones de software elegantes, eficientes y seguras que optimicen la infraestructura del usuario y resuelvan problemas técnicos reales.',
      },
      vision: {
        title: 'Visión',
        body: 'Consolidarme como Ingeniero Full-Stack especializado en Arquitectura Cloud y Ciberseguridad, liderando despliegues de sistemas modernos.',
      },
      values: {
        title: 'Valores',
        body: 'Resolución proactiva de problemas. Artesanía en código limpio. Aprendizaje autodidacta continuo y comunicación técnica asertiva.',
      },
    },
    experience: { label: '// experiencia_profesional', heading: 'Trayectoria' },
    skills: { label: '// stack_tecnológico', heading: 'Habilidades Técnicas' },
    projects: {
      label: '// proyectos_destacados',
      heading: 'Trabajo Selecto',
      viewDemo: 'Ver Demo en Vivo',
      sourceCode: 'Código Fuente',
    },
    contact: {
      label: '// contacto',
      heading: 'Transformemos tus Ideas en Realidad',
      sub: 'Disponible para posiciones de tiempo completo bajo esquema contractor y proyectos freelance en todo el mundo. Basado en Costa Rica — trabajo globalmente.',
      formName: 'Tu Nombre',
      formEmail: 'Tu Correo',
      formMessage: 'Tu Mensaje',
      formSend: 'Enviar Mensaje',
      downloadCV: 'Descargar CV (PDF)',
      copyright: '© 2026 Joshua Benavides Guzmán. Creado con precisión.',
    },
  },
};

// ─── Jobs ─────────────────────────────────────────────────────────────────────
export const JOBS = {
  en: [
    {
      company: 'SPC Telecentinel',
      title: 'Junior Specialized Technician',
      dates: 'Mar 2025 – Mar 2026',
      achievements: [
        'Resolved Level 1 and 2 technical and network incidents via remote support tools, managing ticket cycles within Jira Service Desk under strict SLAs.',
        'Administered corporate users, security groups, M365 licensing, and system permissions inside Active Directory and Azure AD environments.',
        'Configured local network connectivity (TCP/IP, VPN, DNS, DHCP) and deployed physical security systems including Maxpro IP cameras and ProWatch access control.',
      ],
      stack: ['Active Directory', 'Azure AD', 'Windows 10/11', 'Jira', 'VPN', 'Networks'],
    },
    {
      company: 'ICODER',
      title: 'Networking IT Intern',
      dates: 'Oct 2022 – Dec 2022',
      achievements: [
        'Designed and implemented structured cabling layouts for local data network infrastructure across public institutional facilities.',
        'Deployed IP telephony systems and handled software deployment and local network device routing on Windows environments.',
      ],
      stack: ['Structured Cabling', 'TCP/IP', 'IP Telephony', 'Windows OS'],
    },
  ],
  es: [
    {
      company: 'SPC Telecentinel',
      title: 'Técnico Especializado Jr.',
      dates: 'Mar 2025 – Mar 2026',
      achievements: [
        'Resolví incidencias técnicas y de conectividad de niveles 1 y 2 mediante soporte remoto, documentando causas raíz en Jira Service Desk bajo estrictos acuerdos de SLA.',
        'Administré cuentas de usuarios, accesos de seguridad, licencias de Microsoft 365 y asignación de permisos dentro de Active Directory y Azure AD.',
        'Configuré redes locales (TCP/IP, VPN, DNS, DHCP) e instalé infraestructuras físicas de seguridad electrónica como cámaras IP Maxpro y controles de acceso ProWatch.',
      ],
      stack: ['Active Directory', 'Azure AD', 'Windows 10/11', 'Jira', 'VPN', 'Redes'],
    },
    {
      company: 'ICODER',
      title: 'Practicante de Informática en Redes',
      dates: 'Oct 2022 – Dic 2022',
      achievements: [
        'Diseñé e implementé la distribución física y estructurada de cableado para redes de datos locales en instalaciones institucionales.',
        'Desplegué sistemas de telefonía IP y realicé tareas de configuración básica de sistemas operativos Windows e impresoras de red.',
      ],
      stack: ['Cableado Estructurado', 'TCP/IP', 'Telefonía IP', 'Windows OS'],
    },
  ],
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    name_en: 'Frontend Development',
    name_es: 'Desarrollo Frontend',
    icon: 'code2',
    color: '#00D9F5',
    techs: ['Angular', 'JavaScript', 'HTML5 / CSS3', 'MVC Architecture', 'TypeScript'],
  },
  {
    name_en: 'Backend Development',
    name_es: 'Desarrollo Backend',
    icon: 'server',
    color: '#4F8EF7',
    techs: ['C#', '.NET', 'Java', 'REST APIs', 'System Architecture'],
  },
  {
    name_en: 'Databases',
    name_es: 'Bases de Datos',
    icon: 'database',
    color: '#34d399',
    techs: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Relational Databases'],
  },
  {
    name_en: 'Tools, Network & Cloud',
    name_es: 'Herramientas, Redes y Cloud',
    icon: 'wrench',
    color: '#a78bfa',
    techs: ['Active Directory', 'Azure AD', 'CCNA 1 & 2', 'Jira', 'Git', 'Linux / Windows', 'VPN'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'Rancho Sacuanjoche Platform',
    desc_en:
      'Lead Full-Stack Developer. Architected and deployed a web reservation platform using Angular...',
    desc_es:
      'Desarrollador Full-Stack Líder. Diseñé y desplegué una plataforma de reservaciones web usando Angular...',
    stack: ['Angular', 'TypeScript', 'REST APIs', 'Dashboard Metrics'],
    demo: 'https://rancho-sacuanjoche.netlify.app',
    repo: '#',
    image: 'assets/RanchoSacuanjoche.png',
  },
  {
    title: 'Pura Vida Care',
    desc_en:
      'Advanced telemedicine application designed for comprehensive elderly care. Synthesizes clinical record tracking, medical monitoring pipelines, and integrates health analytics utilizing Artificial Intelligence APIs for proactive diagnostic insights.',
    desc_es:
      'Aplicación avanzada de telemedicina diseñada para la atención integral de adultos mayores. Integra seguimiento de expedientes clínicos y monitoreo de salud mediante la implementación de APIs de Inteligencia Artificial para análisis clínico preventivo.',
    stack: ['Java', 'PostgreSQL', 'AI APIs', 'REST Services'],
    demo: '#',
    repo: 'https://github.com/J-benavides/PublicPuravidaCare',
    image:'assets/PuravidaCare.png',
  },
  {
    title: 'Hotel Booking System (CRUD)',
    desc_en:
      'Lightweight web application designed for real-time room availability tracking, reservation pipelines, and comprehensive room-type CRUD operations.',
    desc_es:
      'Aplicación web para la gestión de reservas, tipos de habitación y disponibilidad en tiempo real mediante operaciones CRUD completas.',
    stack: ['C#', '.NET', 'SQL Server', 'CRUD Design'],
    demo: '',
    repo: 'https://github.com/J-benavides/Proyecto_Componentes_Hotel',
    image: 'assets/HotelCrud.jpeg',
  },

];