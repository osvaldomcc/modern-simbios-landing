export const languages = {
  en: "English",
  es: "Español",
  fr: "Français",
  nl: "Nederlands",
};

type LANG = keyof typeof languages;

const englishTranslations = {
  "hero.title.part1": "Scalable IT Solutions for",
  "hero.title.highlight": "Modern Enterprises.",
  "hero.description":
    "We bridge the gap between complex technology and your business goals through expert consulting and custom software development.",
  "hero.cta": "Book a Consultation",
  "hero.badge.years": "20+ Years",
  "hero.badge.label": "Industry Expertise",
  "about.badge": "Est. 2004 · Belgium",
  "about.title.part1": "About",
  "about.title.highlight": "company",
  "about.description.1":
    "company is an engineering consultancy, not a staffing shop. Every consultant holds a university degree, most of them a postgraduate one, and goes through a technical interview before ever joining your team.",
  "about.description.2":
    "From our three Belgian offices we place senior engineers, architects and DevOps profiles inside your squads, working time & material with no lock-in.",
  "about.social_proof": "Trusted by 50+ Enterprises",
  "career.badge": "● Open Positions",
  "career.title.part1": "Build Operational",
  "career.title.highlight": "Silence.",
  "career.description":
    "We seek tactical talent focused on solving complex problems. Invisible systems, tangible impact.",
  "career.filter.all": "All",
  "career.filter.engineering": "Engineering",
  "career.filter.design": "Design",
  "career.filter.operations": "Operations",
  "career.apply": "Apply",
  "career.posted": "Posted",
  "lang.label": "Lang",
  "lang.environment": "Environment",
  "contact.testimonial":
    "company fundamentally changed how our infrastructure operates. It's invisible, reliable, and exactly what we needed.",
  "contact.title": "Book a Consultation",
  "contact.subtitle": "See our technical expertise in action.",
  "contact.label.name": "Full Name",
  "contact.label.email": "Work Email",
  "contact.label.company": "Company",
  "contact.placeholder.name": "Jane Doe",
  "contact.button": "Request Consultation",
  "contact.legal.part1": "By requesting a consultation, you agree to our",
  "contact.legal.link": "Terms of Service",
  "solutions.title": "Our Solutions",
  "solutions.subtitle":
    "Expertise designed to scale your business through modern technology.",
  "expertise.title": "Expertise",
  "expertise.subtitle":
    "Scaling your vision through technical mastery and modern innovation.",
  "value.title": "Why Partner with company?",
  "value.subtitle": "Ready to implement the 4-pillar 'company Advantage'...",
  "footer.slogan": "Connecting Technology and Business.",
  "footer.privacy": "Privacy Policy",
  "footer.rights": "All rights reserved.",
  "nav.home": "Home",
  "nav.solutions": "Solutions",
  "nav.expertise": "Expertise",
  "nav.vacancies": "Vacancies",
  "nav.about": "About Us",
  "nav.contact": "Contact Us",
  "social.heading": "Trusted by Industry Leaders & Modern Technologies",
  "solutions.main.title": "Silent Efficiency Across Every Vertical",
  "solutions.main.desc":
    "Discover how company integrates seamlessly into your specialized workflows, bringing operational silence to the chaos.",
  // Operations
  "solutions.v.operations.label": "Operations",
  "solutions.v.operations.title": "Streamline Operations",
  "solutions.v.operations.desc":
    "Automate repetitive tasks and gain real-time visibility into your entire pipeline without adding cognitive load.",
  "solutions.v.operations.f1":
    "Automated supply chain routing based on real-time variables.",
  "solutions.v.operations.f2":
    "Predictive maintenance scheduling for critical infrastructure.",
  "solutions.v.operations.f3":
    "Unified dashboard for cross-departmental resource tracking.",
  "solutions.v.operations.cta": "Explore Operational Silence",
  // HR
  "solutions.v.hr.label": "HR",
  "solutions.v.hr.title": "Intelligent Talent Management",
  "solutions.v.hr.desc":
    "Modernize the employee lifecycle with seamless automation that prioritizes human capital over administrative hurdles.",
  "solutions.v.hr.f1":
    "AI-driven candidate matching to reduce time-to-hire by 40%.",
  "solutions.v.hr.f2":
    "Automated onboarding workflows that scale with your growth.",
  "solutions.v.hr.f3":
    "Employee engagement analytics for proactive retention strategies.",
  "solutions.v.hr.cta": "Learn more about HR Tech",
  // Sales
  "solutions.v.sales.label": "Sales",
  "solutions.v.sales.title": "Accelerated Revenue Growth",
  "solutions.v.sales.desc":
    "Empower your sales force with intelligent lead scoring and automated CRM integration for maximum focus on closing.",
  "solutions.v.sales.f1":
    "Predictive lead scoring based on historical conversion data.",
  "solutions.v.sales.f2":
    "Automated follow-up sequences that feel personal, not robotic.",
  "solutions.v.sales.f3":
    "Real-time sales performance forecasting and gap analysis.",
  "solutions.v.sales.cta": "See Sales Efficiency",
  // Product
  "solutions.v.product.label": "Product Development",
  "solutions.v.product.title": "Faster Innovation Cycles",
  "solutions.v.product.desc":
    "Bridge the gap between ideation and deployment with integrated DevOps and automated QA environments.",
  "solutions.v.product.f1":
    "CI/CD pipelines that eliminate manual deployment bottlenecks.",
  "solutions.v.product.f2":
    "Automated testing suites for zero-regression releases.",
  "solutions.v.product.f3":
    "Centralized documentation and knowledge management systems.",
  "solutions.v.product.cta": "Accelerate Development",
  "value.main.title": "Why Partner with",
  "value.main.desc":
    "We leverage two decades of technical leadership to build the backbone of your digital future.",
  "value.p.expertise.title": "Decades of Expertise",
  "value.p.expertise.desc":
    "Over 20 years of experience delivering high-impact IT projects.",
  "value.p.approach.title": "Tailored Approach",
  "value.p.approach.desc":
    "We don't believe in 'one size fits all.' Every solution is built for your specific needs.",
  "value.p.reliability.title": "Reliability & Security",
  "value.p.reliability.desc":
    "We prioritize data integrity and system uptime in everything we build.",
  "value.p.agile.title": "Agile Methodology",
  "value.p.agile.desc":
    "Faster delivery cycles with transparent communication at every stage.",
  "nav.services": "Services",
  "capabilities.badge": "● What we build",
  "capabilities.title.part1": "Engineering",
  "capabilities.title.highlight": "Capabilities.",
  "capabilities.subtitle":
    "Five delivery practices, one senior team. We staff projects with engineers who ship, from legacy modernization to cloud-native products.",
  "capabilities.group.backend": "Backend & Enterprise",
  "capabilities.group.frontend": "Frontend & Web",
  "capabilities.group.mobile": "Mobile",
  "capabilities.group.cloud": "Cloud & Integration",
  "capabilities.group.data": "Data & Business Apps",
  "capabilities.stack.backend.1": "Java / Jakarta EE",
  "capabilities.stack.backend.2": ".NET & C#",
  "capabilities.stack.backend.3": "Python & Django",
  "capabilities.stack.backend.4": "PHP & Node.js",
  "capabilities.stack.frontend.1": "TypeScript, React & Angular",
  "capabilities.stack.frontend.2": "HTML5, CSS3 & Design Systems",
  "capabilities.stack.frontend.3": "REST & GraphQL APIs",
  "capabilities.stack.mobile.1": "Native iOS & Android",
  "capabilities.stack.mobile.2": ".NET MAUI & React Native",
  "capabilities.stack.mobile.3": "Offline-first field apps",
  "capabilities.stack.cloud.1": "Azure, AWS & Google Cloud",
  "capabilities.stack.cloud.2": "CI/CD, IaC & container platforms",
  "capabilities.stack.cloud.3": "Service buses & message brokers",
  "capabilities.stack.data.1": "Oracle, SQL Server & PostgreSQL",
  "capabilities.stack.data.2": "ETL, warehousing & BI",
  "capabilities.stack.data.3": "SharePoint & MS Dynamics",
  "capabilities.profiles.title": "Profiles you can hire",
  "capabilities.profiles.1": "Medior & senior developers",
  "capabilities.profiles.2": "Solution architects",
  "capabilities.profiles.3": "DevOps & platform engineers",
  "capabilities.profiles.4": "Project managers & analysts",
  "capabilities.profiles.5": "Technical & functional consultants",
  "capabilities.cta": "Discuss your project",
  "career.filter.backend": "Backend",
  "career.filter.frontend": "Frontend",
  "career.filter.mobile": "Mobile",
  "career.filter.data": "Data",
  "career.type.hybrid": "Hybrid",
  "career.type.remote": "Remote",
  "career.type.onsite": "Client site",
  "career.roles.backend.title": "Senior Java Engineer",
  "career.roles.backend.desc":
    "Design and evolve mission-critical services on the JVM, from Spring Boot APIs to event-driven integrations.",
  "career.roles.dotnet.title": ".NET Solution Developer",
  "career.roles.dotnet.desc":
    "Build and modernize business applications on .NET with clean architecture and automated delivery pipelines.",
  "career.roles.python.title": "Python Engineer",
  "career.roles.python.desc":
    "Deliver data services, automation and back-end tooling for fast-moving product teams.",
  "career.roles.frontend.title": "Frontend Engineer (React & TypeScript)",
  "career.roles.frontend.desc":
    "Turn complex flows into fast, accessible interfaces built with React, TypeScript and a disciplined design system.",
  "career.roles.mobile.title": "Mobile Engineer (.NET MAUI)",
  "career.roles.mobile.desc":
    "Ship cross-platform mobile apps that stay reliable offline and feel native on every device.",
  "career.roles.data.title": "Oracle Database Engineer",
  "career.roles.data.desc":
    "Own schemas, performance and migration paths for large Oracle and SQL Server estates.",
  "career.quals.title": "What we look for",
  "career.quals.1": "At least 5 years of hands-on experience in your stack",
  "career.quals.2":
    "A university degree in computer science, or equivalent experience",
  "career.quals.3":
    "Comfort across several frameworks, tools and databases (SQL and NoSQL)",
  "career.quals.4":
    "Fluent written and spoken English; Dutch or French is a plus",
  "career.quals.5":
    "A problem-solving mindset and appetite for broad technical exposure",
  "career.quals.6":
    "Team player, communicative and flexible with changing priorities",
  "career.quals.7":
    "Certifications (Microsoft, Oracle, AWS, Google) are a plus",
  "career.mission.title": "What the role involves",
  "career.mission.1": "Design, build, test and document software that lasts",
  "career.mission.2":
    "Apply standards for security, performance and code quality",
  "career.mission.3": "Promote reusable components and share them with the team",
  "career.mission.4": "Support clients directly, from estimation to go-live",
  "career.offer.title": "What you get",
  "career.offer.1": "A permanent contract with a competitive European salary",
  "career.offer.2":
    "Long-term assignments that match your seniority and ambitions",
  "career.offer.3": "A laptop and a budget for training and certifications",
  "career.offer.4":
    "Relocation support: paperwork, housing and local onboarding",
  "career.offer.5": "A senior peer group that reviews, pairs and mentors",
  "offices.badge": "● Where to find us",
  "offices.title.part1": "Three offices,",
  "offices.title.highlight": "one team.",
  "offices.subtitle":
    "Pick the office closest to your project, or work with us fully remote across Belgium.",
  "offices.hq.label": "Headquarters",
  "offices.hq.city": "Brussels",
  "offices.walloon.label": "Wallonia Office",
  "offices.walloon.city": "Rochefort",
  "offices.flanders.label": "Flanders Office",
  "offices.flanders.city": "Buggenhout",
  "offices.call": "Call us",
  "offices.write": "Email us",
  "about.stat.years.value": "20+",
  "about.stat.years.label": "Years delivering IT projects",
  "about.stat.offices.value": "3",
  "about.stat.offices.label": "Offices across Belgium",
  "about.stat.degrees.value": "25%",
  "about.stat.degrees.label": "Team with a postgraduate degree",
  "footer.vat": "VAT",
  "footer.location": "Brussels · Belgium",
  "nav.menu": "Menu",
  "switcher.popover": "Toggle theme",
};

type KEYS = keyof typeof englishTranslations;
type TRANSLATION = Record<KEYS, string>;

const spanishTranslations: TRANSLATION = {
  "hero.title.part1": "Soluciones IT Escalables para",
  "hero.title.highlight": "Empresas Modernas.",
  "hero.description":
    "Unimos la brecha entre la tecnología compleja y sus objetivos comerciales mediante consultoría experta y desarrollo de software a medida.",
  "hero.cta": "Agendar una Consulta",
  "hero.badge.years": "20+ Años",
  "hero.badge.label": "Experiencia en la Industria",
  "about.badge": "Est. 2004 · Bélgica",
  "about.title.part1": "Sobre",
  "about.title.highlight": "company",
  "about.description.1":
    "company es una consultoría de ingeniería, no una agencia de personal. Cada consultor tiene título universitario, la mayoría con posgrado, y supera una entrevista técnica antes de unirse a tu equipo.",
  "about.description.2":
    "Desde nuestras tres oficinas en Bélgica colocamos ingenieros senior, arquitectos y perfiles DevOps dentro de tus squads, con modelo time & material y sin ataduras.",
  "about.social_proof": "Confiado por más de 50 empresas",
  "career.badge": "● Posiciones Abiertas",
  "career.title.part1": "Construye el",
  "career.title.highlight": "Silencio Operativo.",
  "career.description":
    "Buscamos talento táctico enfocado en resolver problemas complejos. Sistemas invisibles, impacto tangible.",
  "career.filter.all": "Todos",
  "career.filter.engineering": "Ingeniería",
  "career.filter.design": "Diseño",
  "career.filter.operations": "Operaciones",
  "career.apply": "Postular",
  "career.posted": "Publicado hace",
  "lang.label": "Idioma",
  "lang.environment": "Entorno",
  "contact.testimonial":
    "company cambió fundamentalmente cómo opera nuestra infraestructura. Es invisible, confiable y exactamente lo que necesitábamos.",
  "contact.title": "Agendar una Consulta",
  "contact.subtitle": "Vea nuestra experiencia técnica en acción.",
  "contact.label.name": "Nombre Completo",
  "contact.label.email": "Email Corporativo",
  "contact.label.company": "Empresa",
  "contact.placeholder.name": "Juan Pérez",
  "contact.button": "Solicitar Consultoría",
  "contact.legal.part1": "Al solicitar una consulta, usted acepta nuestros",
  "contact.legal.link": "Términos de Servicio",
  "solutions.title": "Nuestras Soluciones",
  "solutions.subtitle":
    "Experiencia diseñada para escalar su negocio a través de tecnología moderna.",
  "expertise.title": "Especialidad",
  "expertise.subtitle":
    "Escalando su visión a través de maestría técnica e innovación moderna.",
  "value.title": "¿Por qué elegir a company?",
  "value.subtitle":
    "Listo para implementar el 'company Advantage' de 4 pilares...",
  "footer.slogan": "Conectando Tecnología y Negocios.",
  "footer.privacy": "Política de Privacidad",
  "footer.rights": "Todos los derechos reservados.",
  "nav.home": "Inicio",
  "nav.solutions": "Soluciones",
  "nav.expertise": "Especialidad",
  "nav.vacancies": "Vacantes",
  "nav.about": "Sobre Nosotros",
  "nav.contact": "Contacto",
  "social.heading":
    "Confiado por Líderes de la Industria y Tecnologías Modernas",
  "solutions.main.title": "Eficiencia Silenciosa en Cada Vertical",
  "solutions.main.desc":
    "Descubra cómo company se integra perfectamente en sus flujos de trabajo especializados, aportando silencio operativo al caos.",
  "solutions.v.operations.label": "Operaciones",
  "solutions.v.operations.title": "Optimice sus Operaciones",
  "solutions.v.operations.desc":
    "Automatice tareas repetitivas y obtenga visibilidad en tiempo real de toda su cadena sin añadir carga cognitiva.",
  "solutions.v.operations.f1":
    "Enrutamiento automatizado de la cadena de suministro basado en variables reales.",
  "solutions.v.operations.f2":
    "Programación de mantenimiento predictivo para infraestructura crítica.",
  "solutions.v.operations.f3":
    "Panel unificado para el seguimiento de recursos entre departamentos.",
  "solutions.v.operations.cta": "Explorar Silencio Operativo",
  "solutions.v.hr.label": "RR.HH.",
  "solutions.v.hr.title": "Gestión Inteligente de Talento",
  "solutions.v.hr.desc":
    "Modernice el ciclo de vida del empleado con automatización que prioriza el capital humano sobre las trabas administrativas.",
  "solutions.v.hr.f1":
    "Emparejamiento de candidatos por IA para reducir el tiempo de contratación en un 40%.",
  "solutions.v.hr.f2":
    "Flujos de incorporación automatizados que escalan con su crecimiento.",
  "solutions.v.hr.f3":
    "Analítica de compromiso del empleado para estrategias de retención proactivas.",
  "solutions.v.hr.cta": "Saber más sobre HR Tech",
  "solutions.v.sales.label": "Ventas",
  "solutions.v.sales.title": "Crecimiento Acelerado de Ingresos",
  "solutions.v.sales.desc":
    "Potencie su fuerza de ventas con puntuación inteligente de leads e integración CRM automatizada.",
  "solutions.v.sales.f1":
    "Puntuación predictiva de leads basada en datos históricos de conversión.",
  "solutions.v.sales.f2":
    "Secuencias de seguimiento automatizadas con tono personal, no robótico.",
  "solutions.v.sales.f3":
    "Previsión de rendimiento de ventas y análisis de brechas en tiempo real.",
  "solutions.v.sales.cta": "Ver Eficiencia en Ventas",
  "solutions.v.product.label": "Desarrollo de Producto",
  "solutions.v.product.title": "Ciclos de Innovación más Rápidos",
  "solutions.v.product.desc":
    "Cierre la brecha entre la idea y el despliegue con DevOps integrado y entornos de QA automatizados.",
  "solutions.v.product.f1":
    "Pipelines de CI/CD que eliminan cuellos de botella en despliegues manuales.",
  "solutions.v.product.f2":
    "Suites de pruebas automatizadas para lanzamientos sin regresiones.",
  "solutions.v.product.f3":
    "Sistemas centralizados de documentación y gestión del conocimiento.",
  "solutions.v.product.cta": "Acelerar Desarrollo",
  "value.main.title": "¿Por qué asociarse con",
  "value.main.desc":
    "Aprovechamos dos décadas de liderazgo técnico para construir la columna vertebral de su futuro digital.",
  "value.p.expertise.title": "Décadas de Experiencia",
  "value.p.expertise.desc":
    "Más de 20 años entregando proyectos de TI de alto impacto.",
  "value.p.approach.title": "Enfoque a Medida",
  "value.p.approach.desc":
    "No creemos en soluciones únicas. Cada solución se construye para sus necesidades específicas.",
  "value.p.reliability.title": "Fiabilidad y Seguridad",
  "value.p.reliability.desc":
    "Priorizamos la integridad de los datos y el tiempo de actividad del sistema en todo lo que construimos.",
  "value.p.agile.title": "Metodología Ágil",
  "value.p.agile.desc":
    "Ciclos de entrega más rápidos con comunicación transparente en cada etapa.",
  "nav.services": "Servicios",
  "capabilities.badge": "● Lo que construimos",
  "capabilities.title.part1": "Capacidades de",
  "capabilities.title.highlight": "Ingeniería.",
  "capabilities.subtitle":
    "Cinco prácticas de entrega, un solo equipo senior. Cubrimos proyectos con ingenieros que entregan, desde la modernización de sistemas heredados hasta productos cloud-native.",
  "capabilities.group.backend": "Backend y Empresarial",
  "capabilities.group.frontend": "Frontend y Web",
  "capabilities.group.mobile": "Móvil",
  "capabilities.group.cloud": "Cloud e Integración",
  "capabilities.group.data": "Datos y Aplicaciones de Negocio",
  "capabilities.stack.backend.1": "Java / Jakarta EE",
  "capabilities.stack.backend.2": ".NET y C#",
  "capabilities.stack.backend.3": "Python y Django",
  "capabilities.stack.backend.4": "PHP y Node.js",
  "capabilities.stack.frontend.1": "TypeScript, React y Angular",
  "capabilities.stack.frontend.2": "HTML5, CSS3 y Design Systems",
  "capabilities.stack.frontend.3": "APIs REST y GraphQL",
  "capabilities.stack.mobile.1": "iOS y Android nativas",
  "capabilities.stack.mobile.2": ".NET MAUI y React Native",
  "capabilities.stack.mobile.3": "Aplicaciones de campo offline-first",
  "capabilities.stack.cloud.1": "Azure, AWS y Google Cloud",
  "capabilities.stack.cloud.2": "CI/CD, IaC y contenedores",
  "capabilities.stack.cloud.3": "Service buses y colas de mensajería",
  "capabilities.stack.data.1": "Oracle, SQL Server y PostgreSQL",
  "capabilities.stack.data.2": "ETL, data warehouse y BI",
  "capabilities.stack.data.3": "SharePoint y MS Dynamics",
  "capabilities.profiles.title": "Perfiles que puedes contratar",
  "capabilities.profiles.1": "Desarrolladores medior y senior",
  "capabilities.profiles.2": "Arquitectos de solución",
  "capabilities.profiles.3": "Ingenieros DevOps y de plataforma",
  "capabilities.profiles.4": "Project managers y analistas",
  "capabilities.profiles.5": "Consultores técnicos y funcionales",
  "capabilities.cta": "Hablemos de tu proyecto",
  "career.filter.backend": "Backend",
  "career.filter.frontend": "Frontend",
  "career.filter.mobile": "Móvil",
  "career.filter.data": "Datos",
  "career.type.hybrid": "Híbrido",
  "career.type.remote": "Remoto",
  "career.type.onsite": "En cliente",
  "career.roles.backend.title": "Ingeniero Java Senior",
  "career.roles.backend.desc":
    "Diseña y evoluciona servicios críticos sobre la JVM, desde APIs con Spring Boot hasta integraciones orientadas a eventos.",
  "career.roles.dotnet.title": "Desarrollador de Soluciones .NET",
  "career.roles.dotnet.desc":
    "Construye y moderniza aplicaciones de negocio sobre .NET con arquitectura limpia y pipelines de entrega automatizados.",
  "career.roles.python.title": "Ingeniero Python",
  "career.roles.python.desc":
    "Entrega servicios de datos, automatización y herramientas de backend para equipos de producto ágiles.",
  "career.roles.frontend.title": "Ingeniero Frontend (React y TypeScript)",
  "career.roles.frontend.desc":
    "Convierte flujos complejos en interfaces rápidas y accesibles construidas con React, TypeScript y un design system disciplinado.",
  "career.roles.mobile.title": "Ingeniero Móvil (.NET MAUI)",
  "career.roles.mobile.desc":
    "Lanza apps multiplataforma que se mantienen fiables sin conexión y se sienten nativas en cada dispositivo.",
  "career.roles.data.title": "Ingeniero de Bases de Datos Oracle",
  "career.roles.data.desc":
    "Responsable de esquemas, rendimiento y rutas de migración en grandes entornos Oracle y SQL Server.",
  "career.quals.title": "Lo que buscamos",
  "career.quals.1": "Al menos 5 años de experiencia práctica en tu stack",
  "career.quals.2":
    "Título universitario en informática o experiencia equivalente",
  "career.quals.3":
    "Manejo de varios frameworks, herramientas y bases de datos (SQL y NoSQL)",
  "career.quals.4":
    "Inglés escrito y hablado con fluidez; el neerlandés o el francés es una ventaja",
  "career.quals.5":
    "Mentalidad resolutiva y ganas de exposición técnica amplia",
  "career.quals.6":
    "Trabajo en equipo, comunicación fluida y flexibilidad ante cambios de prioridad",
  "career.quals.7":
    "Las certificaciones (Microsoft, Oracle, AWS, Google) son una ventaja",
  "career.mission.title": "En qué consiste el puesto",
  "career.mission.1":
    "Diseñar, construir, probar y documentar software que dure",
  "career.mission.2":
    "Aplicar estándares de seguridad, rendimiento y calidad de código",
  "career.mission.3":
    "Promover componentes reutilizables y compartirlos con el equipo",
  "career.mission.4":
    "Dar soporte directo al cliente, desde la estimación hasta el go-live",
  "career.offer.title": "Lo que ofrecemos",
  "career.offer.1":
    "Contrato indefinido con salario competitivo europeo",
  "career.offer.2":
    "Asignaciones a largo plazo acordes a tu seniority y ambiciones",
  "career.offer.3":
    "Portátil y presupuesto para formación y certificaciones",
  "career.offer.4":
    "Ayuda con la reubicación: papeleo, vivienda y onboarding local",
  "career.offer.5":
    "Un grupo de pares senior que revisa, empareja y hace mentoring",
  "offices.badge": "● Dónde encontrarnos",
  "offices.title.part1": "Tres oficinas,",
  "offices.title.highlight": "un solo equipo.",
  "offices.subtitle":
    "Elige la oficina más cercana a tu proyecto o trabaja con nosotros en remoto desde toda Bélgica.",
  "offices.hq.label": "Sede central",
  "offices.hq.city": "Bruselas",
  "offices.walloon.label": "Oficina de Valonia",
  "offices.walloon.city": "Rochefort",
  "offices.flanders.label": "Oficina de Flandes",
  "offices.flanders.city": "Buggenhout",
  "offices.call": "Llámanos",
  "offices.write": "Escríbenos",
  "about.stat.years.value": "20+",
  "about.stat.years.label": "Años entregando proyectos de TI",
  "about.stat.offices.value": "3",
  "about.stat.offices.label": "Oficinas por toda Bélgica",
  "about.stat.degrees.value": "25%",
  "about.stat.degrees.label": "Equipo con posgrado",
  "footer.vat": "IVA",
  "footer.location": "Bruselas · Bélgica",
  "nav.menu": "Menú",
  "switcher.popover": "Alternar tema",
};

const frenchTranslations: TRANSLATION = {
  "hero.title.part1": "Solutions IT Évolutives pour les",
  "hero.title.highlight": "Entreprises Modernes.",
  "hero.description":
    "Nous comblons le fossé entre la technologie complexe et vos objectifs commerciaux grâce à des conseils d'experts et au développement de logiciels sur mesure.",
  "hero.cta": "Prendre Rendez-vous",
  "hero.badge.years": "20+ Ans",
  "hero.badge.label": "Expertise du Secteur",
  "about.badge": "Fondé en 2004 · Belgique",
  "about.title.part1": "À propos de",
  "about.title.highlight": "company",
  "about.description.1":
    "company est un cabinet d'ingénierie, pas un cabinet de placement. Chaque consultant est diplômé d'une université, la plupart avec un diplôme de troisième cycle, et passe un entretien technique avant de rejoindre votre équipe.",
  "about.description.2":
    "Depuis nos trois bureaux belges, nous intégrons des ingénieurs seniors, architectes et profils DevOps au sein de vos squads, en time & material et sans dépendance contractuelle.",
  "about.social_proof": "Approuvé par plus de 50 entreprises",
  "career.badge": "● Postes Ouverts",
  "career.title.part1": "Bâtissez le",
  "career.title.highlight": "Silence Opérationnel.",
  "career.description":
    "Nous recherchons des talents tactiques axés sur la résolution de problèmes complexes. Systèmes invisibles, impact tangible.",
  "career.filter.all": "Tous",
  "career.filter.engineering": "Ingénierie",
  "career.filter.design": "Design",
  "career.filter.operations": "Opérations",
  "career.apply": "Postuler",
  "career.posted": "Publié il y a",
  "lang.label": "Langue",
  "lang.environment": "Environnement",
  "contact.testimonial":
    "company a fondamentalement changé le fonctionnement de notre infrastructure. C'est invisible, fiable et exactement ce dont nous avions besoin.",
  "contact.title": "Réserver une Consultation",
  "contact.subtitle": "Découvrez notre expertise technique en action.",
  "contact.label.name": "Nom Complet",
  "contact.label.email": "E-mail Professionnel",
  "contact.label.company": "Entreprise",
  "contact.placeholder.name": "Jean Dupont",
  "contact.button": "Demander une Consultation",
  "contact.legal.part1": "En demandant une consultation, vous acceptez nos",
  "contact.legal.link": "Conditions d'Utilisation",
  "solutions.title": "Nos Solutions",
  "solutions.subtitle":
    "Une expertise conçue pour faire évoluer votre entreprise grâce aux technologies modernes.",
  "expertise.title": "Expertise",
  "expertise.subtitle":
    "Donner de l'envergure à votre vision grâce à la maîtrise technique et à l'innovation.",
  "value.title": "Pourquoi s'associer à company ?",
  "value.subtitle":
    "Prêt à mettre en œuvre les 4 piliers de l'Avantage company...",
  "footer.slogan": "Connecter la Technologie et les Affaires.",
  "footer.privacy": "Politique de Confidentialité",
  "footer.rights": "Tous droits réservés.",
  "nav.home": "Accueil",
  "nav.solutions": "Solutions",
  "nav.expertise": "Expertise",
  "nav.vacancies": "Postes Ouverts",
  "nav.about": "À Propos",
  "nav.contact": "Contactez-nous",
  "social.heading":
    "Approuvé par les leaders de l'industrie et les technologies modernes",
  "solutions.main.title": "Efficacité Silencieuse par Secteur",
  "solutions.main.desc":
    "Découvrez comment company s'intègre parfaitement à vos flux de travail spécialisés, apportant le silence opérationnel au chaos.",
  "solutions.v.operations.label": "Opérations",
  "solutions.v.operations.title": "Optimiser les Opérations",
  "solutions.v.operations.desc":
    "Automatisez les tâches répétitives et obtenez une visibilité en temps réel sur l'ensemble de votre pipeline.",
  "solutions.v.operations.f1":
    "Routage automatisé de la chaîne logistique basé sur des variables réelles.",
  "solutions.v.operations.f2":
    "Planification de la maintenance prédictive pour les infrastructures critiques.",
  "solutions.v.operations.f3":
    "Tableau de bord unifié pour le suivi des ressources inter-services.",
  "solutions.v.operations.cta": "Explorer le Silence Opérationnel",
  "solutions.v.hr.label": "RH",
  "solutions.v.hr.title": "Gestion Intelligente des Talents",
  "solutions.v.hr.desc":
    "Modernisez le cycle de vie des employés grâce à une automatisation fluide privilégiant le capital humain.",
  "solutions.v.hr.f1":
    "Matching de candidats par IA pour réduire le temps de recrutement de 40%.",
  "solutions.v.hr.f2":
    "Flux d'onboarding automatisés évoluant avec votre croissance.",
  "solutions.v.hr.f3":
    "Analytique de l'engagement pour des stratégies de rétention proactives.",
  "solutions.v.hr.cta": "En savoir plus sur la HR Tech",
  "solutions.v.sales.label": "Ventes",
  "solutions.v.sales.title": "Accélération de la Croissance",
  "solutions.v.sales.desc":
    "Boostez vos ventes avec un scoring de leads intelligent et une intégration CRM automatisée.",
  "solutions.v.sales.f1":
    "Scoring prédictif des leads basé sur les données historiques.",
  "solutions.v.sales.f2": "Séquences de suivi automatisées au ton personnel.",
  "solutions.v.sales.f3":
    "Prévisions de performance commerciale et analyse des écarts en temps réel.",
  "solutions.v.sales.cta": "Voir l'Efficacité Commerciale",
  "solutions.v.product.label": "Développement Produit",
  "solutions.v.product.title": "Cycles d'Innovation Accélérés",
  "solutions.v.product.desc":
    "Comblez l'écart entre l'idéation et le déploiement avec DevOps intégré et QA automatisée.",
  "solutions.v.product.f1":
    "Pipelines CI/CD éliminant les goulots d'étranglement manuels.",
  "solutions.v.product.f2":
    "Suites de tests automatisées pour des déploiements sans régression.",
  "solutions.v.product.f3":
    "Systèmes centralisés de gestion des connaissances.",
  "solutions.v.product.cta": "Accélérer le Développement",
  "value.main.title": "Pourquoi s'associer à",
  "value.main.desc":
    "Nous mettons à profit deux décennies de leadership technique pour construire l'épine dorsale de votre avenir numérique.",
  "value.p.expertise.title": "Des décennies d'expertise",
  "value.p.expertise.desc":
    "Plus de 20 ans d'expérience dans la réalisation de projets informatiques à fort impact.",
  "value.p.approach.title": "Approche sur mesure",
  "value.p.approach.desc":
    "Nous ne croyons pas aux solutions toutes faites. Chaque solution est conçue pour vos besoins spécifiques.",
  "value.p.reliability.title": "Fiabilité et Sécurité",
  "value.p.reliability.desc":
    "Nous donnons la priorité à l'intégrité des données et à la disponibilité du système.",
  "value.p.agile.title": "Méthodologie Agile",
  "value.p.agile.desc":
    "Des cycles de livraison plus rapides avec une communication transparente.",
  "nav.services": "Services",
  "capabilities.badge": "● Ce que nous construisons",
  "capabilities.title.part1": "Capacités",
  "capabilities.title.highlight": "d'ingénierie.",
  "capabilities.subtitle":
    "Cinq pratiques de livraison, une seule équipe senior. Nous couvrons vos projets avec des ingénieurs qui livrent, de la modernisation du legacy aux produits cloud-native.",
  "capabilities.group.backend": "Backend et Entreprise",
  "capabilities.group.frontend": "Frontend et Web",
  "capabilities.group.mobile": "Mobile",
  "capabilities.group.cloud": "Cloud et Intégration",
  "capabilities.group.data": "Données et Applications Métier",
  "capabilities.stack.backend.1": "Java / Jakarta EE",
  "capabilities.stack.backend.2": ".NET et C#",
  "capabilities.stack.backend.3": "Python et Django",
  "capabilities.stack.backend.4": "PHP et Node.js",
  "capabilities.stack.frontend.1": "TypeScript, React et Angular",
  "capabilities.stack.frontend.2": "HTML5, CSS3 et Design Systems",
  "capabilities.stack.frontend.3": "API REST et GraphQL",
  "capabilities.stack.mobile.1": "iOS et Android natives",
  "capabilities.stack.mobile.2": ".NET MAUI et React Native",
  "capabilities.stack.mobile.3": "Applications de terrain offline-first",
  "capabilities.stack.cloud.1": "Azure, AWS et Google Cloud",
  "capabilities.stack.cloud.2": "CI/CD, IaC et conteneurs",
  "capabilities.stack.cloud.3": "Service buses et brokers de messages",
  "capabilities.stack.data.1": "Oracle, SQL Server et PostgreSQL",
  "capabilities.stack.data.2": "ETL, entrepôt de données et BI",
  "capabilities.stack.data.3": "SharePoint et MS Dynamics",
  "capabilities.profiles.title": "Profils que vous pouvez recruter",
  "capabilities.profiles.1": "Développeurs medior et senior",
  "capabilities.profiles.2": "Architectes solution",
  "capabilities.profiles.3": "Ingénieurs DevOps et plateforme",
  "capabilities.profiles.4": "Chefs de projet et analystes",
  "capabilities.profiles.5": "Consultants techniques et fonctionnels",
  "capabilities.cta": "Parlons de votre projet",
  "career.filter.backend": "Backend",
  "career.filter.frontend": "Frontend",
  "career.filter.mobile": "Mobile",
  "career.filter.data": "Données",
  "career.type.hybrid": "Hybride",
  "career.type.remote": "Télétravail",
  "career.type.onsite": "Chez le client",
  "career.roles.backend.title": "Ingénieur Java Senior",
  "career.roles.backend.desc":
    "Concevoir et faire évoluer des services critiques sur la JVM, des API Spring Boot aux intégrations événementielles.",
  "career.roles.dotnet.title": "Développeur de Solutions .NET",
  "career.roles.dotnet.desc":
    "Construire et moderniser des applications métier sur .NET, avec architecture propre et pipelines de livraison automatisés.",
  "career.roles.python.title": "Ingénieur Python",
  "career.roles.python.desc":
    "Livrer des services de données, de l'automatisation et des outils back-end pour des équipes produit agiles.",
  "career.roles.frontend.title": "Ingénieur Frontend (React et TypeScript)",
  "career.roles.frontend.desc":
    "Transformer des parcours complexes en interfaces rapides et accessibles, construites avec React, TypeScript et un design system rigoureux.",
  "career.roles.mobile.title": "Ingénieur Mobile (.NET MAUI)",
  "career.roles.mobile.desc":
    "Livrer des applications multiplateformes fiables hors ligne et naturelles sur chaque appareil.",
  "career.roles.data.title": "Ingénieur Bases de Données Oracle",
  "career.roles.data.desc":
    "Piloter schémas, performance et trajectoires de migration sur de grands parcours Oracle et SQL Server.",
  "career.quals.title": "Ce que nous recherchons",
  "career.quals.1": "Au moins 5 ans d'expérience pratique sur votre stack",
  "career.quals.2":
    "Diplôme universitaire en informatique ou expérience équivalente",
  "career.quals.3":
    "Aisance sur plusieurs frameworks, outils et bases de données (SQL et NoSQL)",
  "career.quals.4":
    "Anglais courant à l'écrit comme à l'oral ; le néerlandais ou le français est un plus",
  "career.quals.5":
    "Envie de résoudre des problèmes et d'élargir son exposition technique",
  "career.quals.6":
    "Esprit d'équipe, bon communicant et flexible face aux priorités changeantes",
  "career.quals.7":
    "Les certifications (Microsoft, Oracle, AWS, Google) sont un atout",
  "career.mission.title": "Le contenu du poste",
  "career.mission.1":
    "Concevoir, construire, tester et documenter un logiciel durable",
  "career.mission.2":
    "Appliquer les standards de sécurité, de performance et de qualité de code",
  "career.mission.3":
    "Promouvoir des composants réutilisables et les partager avec l'équipe",
  "career.mission.4":
    "Supporter le client directement, de l'estimation au go-live",
  "career.offer.title": "Ce que nous offrons",
  "career.offer.1":
    "Un contrat permanent avec un salaire européen compétitif",
  "career.offer.2":
    "Des missions longues en adéquation avec votre séniorité et vos ambitions",
  "career.offer.3":
    "Un ordinateur portable et un budget de formation et de certifications",
  "career.offer.4":
    "Aide à la réinstallation : démarches, logement et intégration locale",
  "career.offer.5":
    "Un collectif de pairs seniors pour la revue de code, le pairing et le mentoring",
  "offices.badge": "● Où nous trouver",
  "offices.title.part1": "Trois bureaux,",
  "offices.title.highlight": "une seule équipe.",
  "offices.subtitle":
    "Choisissez le bureau le plus proche de votre projet, ou travaillez avec nous entièrement à distance partout en Belgique.",
  "offices.hq.label": "Siège social",
  "offices.hq.city": "Bruxelles",
  "offices.walloon.label": "Bureau de Wallonie",
  "offices.walloon.city": "Rochefort",
  "offices.flanders.label": "Bureau de Flandre",
  "offices.flanders.city": "Buggenhout",
  "offices.call": "Appelez-nous",
  "offices.write": "Écrivez-nous",
  "about.stat.years.value": "20+",
  "about.stat.years.label": "Ans de projets IT livrés",
  "about.stat.offices.value": "3",
  "about.stat.offices.label": "Bureaux partout en Belgique",
  "about.stat.degrees.value": "25%",
  "about.stat.degrees.label": "Équipe avec un diplôme de troisième cycle",
  "footer.vat": "TVA",
  "footer.location": "Bruxelles · Belgique",
  "nav.menu": "Menu",
  "switcher.popover": "Changer de thème",
};

const dutchTranslations: TRANSLATION = {
  "hero.title.part1": "Schaalbare IT-oplossingen voor",
  "hero.title.highlight": "Moderne Ondernemingen.",
  "hero.description":
    "Wij overbruggen de kloof tussen complexe technologie en uw bedrijfsdoelstellingen door middel van deskundig advies en softwareontwikkeling op maat.",
  "hero.cta": "Boek een Consultatie",
  "hero.badge.years": "20+ Jaar",
  "hero.badge.label": "Industrie Expertise",
  "about.badge": "Sinds 2004 · België",
  "about.title.part1": "Over",
  "about.title.highlight": "company",
  "about.description.1":
    "company is een engineeringconsultancy, geen uitzendbureau. Elke consultant heeft een academische graad, de meesten een graduaat, en doorloopt een technisch gesprek voor het team vervoegt.",
  "about.description.2":
    "Vanuit onze drie Belgische kantoren plaatsen we senior ingenieurs, architecten en DevOps-profielen in uw squads, werken we time & material en zitten er geen contractuele kluwen aan vast.",
  "about.social_proof": "Vertrouwd door 50+ ondernemingen",
  "career.badge": "● Openstaande Vacatures",
  "career.title.part1": "Bouw aan",
  "career.title.highlight": "Operational Silence.",
  "career.description":
    "Wij zoeken tactisch talent dat zich richt op het oplossen van complexe problemen. Onzichtbare systemen, tastbare impact.",
  "career.filter.all": "Alle",
  "career.filter.engineering": "Engineering",
  "career.filter.design": "Design",
  "career.filter.operations": "Operations",
  "career.apply": "Solliciteren",
  "career.posted": "Gepost",
  "lang.label": "Taal",
  "lang.environment": "Omgeving",
  "contact.testimonial":
    "company heeft de manier waarop onze infrastructuur werkt fundamenteel veranderd. Het is onzichtbaar, betrouwbaar en precies wat we nodig hadden.",
  "contact.title": "Boek een Consultatie",
  "contact.subtitle": "Zie onze technische expertise in actie.",
  "contact.label.name": "Volledige Naam",
  "contact.label.email": "Zakelijk E-mailadres",
  "contact.label.company": "Bedrijf",
  "contact.placeholder.name": "Jan Jansen",
  "contact.button": "Consultatie Aanvragen",
  "contact.legal.part1":
    "Door een consultatie aan te vragen, gaat u akkoord met onze",
  "contact.legal.link": "Algemene Voorwaarden",
  "solutions.title": "Onze Oplossingen",
  "solutions.subtitle":
    "Expertise ontworpen om uw bedrijf te schalen door middel van moderne technologie.",
  "expertise.title": "Expertise",
  "expertise.subtitle":
    "Uw visie schalen door technisch meesterschap en moderne innovatie.",
  "value.title": "Waarom samenwerken met company?",
  "value.subtitle":
    "Klaar om de 4 pijlers van het 'company Advantage' te implementeren...",
  "footer.slogan": "Technologie en Business Verbinden.",
  "footer.privacy": "Privacybeleid",
  "footer.rights": "Alle rechten voorbehouden.",
  "nav.home": "Home",
  "nav.solutions": "Oplossingen",
  "nav.expertise": "Expertise",
  "nav.vacancies": "Vacatures",
  "nav.about": "Over Ons",
  "nav.contact": "Contacteer Ons",
  "social.heading": "Vertrouwd door marktleiders en moderne technologieën",
  "solutions.main.title": "Operational Silence in Elke Sector",
  "solutions.main.desc":
    "Ontdek hoe company naadloos integreert in uw gespecialiseerde workflows en rust brengt in de chaos.",
  "solutions.v.operations.label": "Operations",
  "solutions.v.operations.title": "Stroomlijn Operaties",
  "solutions.v.operations.desc":
    "Automatiseer repetitieve taken en krijg real-time inzicht in uw gehele pijplijn.",
  "solutions.v.operations.f1":
    "Geautomatiseerde supply chain routing op basis van real-time variabelen.",
  "solutions.v.operations.f2":
    "Predictief onderhoud voor kritieke infrastructuur.",
  "solutions.v.operations.f3":
    "Gecentraliseerd dashboard voor cross-departementale tracking.",
  "solutions.v.operations.cta": "Ontdek Operational Silence",
  "solutions.v.hr.label": "HR",
  "solutions.v.hr.title": "Intelligent Talentbeheer",
  "solutions.v.hr.desc":
    "Moderniseer de werknemerscyclus met automatisering die menselijk kapitaal centraal stelt.",
  "solutions.v.hr.f1":
    "AI-gestuurde kandidaat-matching verkort wervingstijd met 40%.",
  "solutions.v.hr.f2":
    "Geautomatiseerde onboarding-workflows die meegroeien met uw bedrijf.",
  "solutions.v.hr.f3":
    "Betrokkenheidsanalyse voor proactieve retentiestrategieën.",
  "solutions.v.hr.cta": "Meer over HR Tech",
  "solutions.v.sales.label": "Verkoop",
  "solutions.v.sales.title": "Versnelde Omzetgroei",
  "solutions.v.sales.desc":
    "Versterk uw verkoopteam met intelligente lead scoring en CRM-integratie.",
  "solutions.v.sales.f1":
    "Voorspellende lead scoring op basis van conversiedata.",
  "solutions.v.sales.f2":
    "Geautomatiseerde opvolging die persoonlijk aanvoelt.",
  "solutions.v.sales.f3": "Real-time verkoopvoorspelling en gap-analyse.",
  "solutions.v.sales.cta": "Bekijk Sales Efficiency",
  "solutions.v.product.label": "Productontwikkeling",
  "solutions.v.product.title": "Snellere Innovatiecycli",
  "solutions.v.product.desc":
    "Overbrug de kloof tussen idee en uitrol met geïntegreerde DevOps en geautomatiseerde QA.",
  "solutions.v.product.f1":
    "CI/CD pipelines die handmatige knelpunten elimineren.",
  "solutions.v.product.f2":
    "Geautomatiseerde tests voor releases zonder regressie.",
  "solutions.v.product.f3": "Gecentraliseerde documentatie en kennisbeheer.",
  "solutions.v.product.cta": "Versnel Ontwikkeling",
  "value.main.title": "Waarom samenwerken met",
  "value.main.desc":
    "We benutten twee decennia aan technisch leiderschap om de ruggengraat van uw digitale toekomst te bouwen.",
  "value.p.expertise.title": "Decennia aan Expertise",
  "value.p.expertise.desc":
    "Meer dan 20 jaar ervaring in het leveren van IT-projecten met hoge impact.",
  "value.p.approach.title": "Maatwerk Aanpak",
  "value.p.approach.desc":
    "Wij geloven niet in 'one size fits all'. Elke oplossing wordt gebouwd voor uw specifieke behoeften.",
  "value.p.reliability.title": "Betrouwbaarheid & Veiligheid",
  "value.p.reliability.desc":
    "Wij geven prioriteit aan data-integriteit en systeem-uptime in alles wat we bouwen.",
  "value.p.agile.title": "Agile Methodologie",
  "value.p.agile.desc":
    "Snellere leveringscycli met transparante communicatie in elke fase.",
  "nav.services": "Diensten",
  "capabilities.badge": "● Wat we bouwen",
  "capabilities.title.part1": "Engineering",
  "capabilities.title.highlight": "Capabilities.",
  "capabilities.subtitle":
    "Vijf leverpraktijken, één senior team. Wij vullen projecten met ingenieurs die leveren, van legacy-modernisering tot cloud-native producten.",
  "capabilities.group.backend": "Backend & Enterprise",
  "capabilities.group.frontend": "Frontend & Web",
  "capabilities.group.mobile": "Mobiel",
  "capabilities.group.cloud": "Cloud & Integratie",
  "capabilities.group.data": "Data & Bedrijfsapplicaties",
  "capabilities.stack.backend.1": "Java / Jakarta EE",
  "capabilities.stack.backend.2": ".NET & C#",
  "capabilities.stack.backend.3": "Python & Django",
  "capabilities.stack.backend.4": "PHP & Node.js",
  "capabilities.stack.frontend.1": "TypeScript, React & Angular",
  "capabilities.stack.frontend.2": "HTML5, CSS3 & Design Systems",
  "capabilities.stack.frontend.3": "REST- en GraphQL-API's",
  "capabilities.stack.mobile.1": "Native iOS & Android",
  "capabilities.stack.mobile.2": ".NET MAUI & React Native",
  "capabilities.stack.mobile.3": "Offline-first veldapplicaties",
  "capabilities.stack.cloud.1": "Azure, AWS & Google Cloud",
  "capabilities.stack.cloud.2": "CI/CD, IaC & containerplatforms",
  "capabilities.stack.cloud.3": "Service buses & message brokers",
  "capabilities.stack.data.1": "Oracle, SQL Server & PostgreSQL",
  "capabilities.stack.data.2": "ETL, datawarehousing & BI",
  "capabilities.stack.data.3": "SharePoint & MS Dynamics",
  "capabilities.profiles.title": "Profielen die u kunt inhuren",
  "capabilities.profiles.1": "Medior en senior ontwikkelaars",
  "capabilities.profiles.2": "Oplossingsarchitecten",
  "capabilities.profiles.3": "DevOps- en platformingenieurs",
  "capabilities.profiles.4": "Projectmanagers en analisten",
  "capabilities.profiles.5": "Technische en functionele consultants",
  "capabilities.cta": "Bespreek uw project",
  "career.filter.backend": "Backend",
  "career.filter.frontend": "Frontend",
  "career.filter.mobile": "Mobiel",
  "career.filter.data": "Data",
  "career.type.hybrid": "Hybride",
  "career.type.remote": "Remote",
  "career.type.onsite": "Op locatie",
  "career.roles.backend.title": "Senior Java Engineer",
  "career.roles.backend.desc":
    "Ontwerp en laat bedrijfskritische services op de JVM evolueren, van Spring Boot-API's tot event-gedreven integraties.",
  "career.roles.dotnet.title": ".NET Solution Developer",
  "career.roles.dotnet.desc":
    "Bouw en moderniseer bedrijfsapplicaties op .NET met schone architectuur en geautomatiseerde leveringspijplijnen.",
  "career.roles.python.title": "Python Engineer",
  "career.roles.python.desc":
    "Lever dataservices, automatisering en back-end tooling voor productteams die snel vooruitgaan.",
  "career.roles.frontend.title": "Frontend Engineer (React & TypeScript)",
  "career.roles.frontend.desc":
    "Zet complexe flows om in snelle, toegankelijke interfaces gebouwd met React, TypeScript en een gedisciplineerd design system.",
  "career.roles.mobile.title": "Mobile Engineer (.NET MAUI)",
  "career.roles.mobile.desc":
    "Breng cross-platform mobiele apps uit die ook offline betrouwbaar blijven en op elk toestel native aanvoelen.",
  "career.roles.data.title": "Oracle Database Engineer",
  "career.roles.data.desc":
    "Beheer schema's, prestaties en migratiepaden voor grote Oracle- en SQL Server-omgevingen.",
  "career.quals.title": "Wat we zoeken",
  "career.quals.1": "Minstens 5 jaar praktijkervaring in uw stack",
  "career.quals.2":
    "Een academische graad in informatica of gelijkwaardige ervaring",
  "career.quals.3":
    "Vreugde in meerdere frameworks, tools en databases (SQL en NoSQL)",
  "career.quals.4":
    "Vlot gesproken en geschreven Engels; Nederlands of Frans is een plus",
  "career.quals.5":
    "Een probleemoplossende mindset en interesse in brede technische ervaring",
  "career.quals.6":
    "Teamspeler, communicatief en flexibel bij wisselende prioriteiten",
  "career.quals.7":
    "Certificeringen (Microsoft, Oracle, AWS, Google) zijn een plus",
  "career.mission.title": "Wat de rol inhoudt",
  "career.mission.1":
    "Software ontwerpen, bouwen, testen en documenteren die blijft staan",
  "career.mission.2":
    "Standaarden voor veiligheid, prestaties en codekwaliteit toepassen",
  "career.mission.3":
    "Herbruikbare componenten promoten en delen met het team",
  "career.mission.4":
    "Klanten rechtstreeks ondersteunen, van inschatting tot go-live",
  "career.offer.title": "Wat u krijgt",
  "career.offer.1":
    "Een vast contract met een competitief Europees loon",
  "career.offer.2":
    "Langlopende opdrachten die passen bij uw senioriteit en ambities",
  "career.offer.3":
    "Een laptop en een budget voor opleiding en certificeringen",
  "career.offer.4":
    "Verhuissteun: papierwinkel, huisvesting en lokale onboarding",
  "career.offer.5":
    "Een collectief van senior peers voor codereview, pairing en mentoring",
  "offices.badge": "● Waar u ons vindt",
  "offices.title.part1": "Drie kantoren,",
  "offices.title.highlight": "één team.",
  "offices.subtitle":
    "Kies het kantoor het dichtst bij uw project, of werk volledig remote met ons samen in heel België.",
  "offices.hq.label": "Hoofdkantoor",
  "offices.hq.city": "Brussel",
  "offices.walloon.label": "Kantoor Wallonië",
  "offices.walloon.city": "Rochefort",
  "offices.flanders.label": "Kantoor Vlaanderen",
  "offices.flanders.city": "Buggenhout",
  "offices.call": "Bel ons",
  "offices.write": "Mail ons",
  "about.stat.years.value": "20+",
  "about.stat.years.label": "Jaar IT-projecten opgeleverd",
  "about.stat.offices.value": "3",
  "about.stat.offices.label": "Kantoren in heel België",
  "about.stat.degrees.value": "25%",
  "about.stat.degrees.label": "Team met een graduaat",
  "footer.vat": "BTW",
  "footer.location": "Brussel · België",
  "nav.menu": "Menu",
  "switcher.popover": "Thema omschakelen",
};

export const defaultLang = "en";

export const ui: Record<LANG, Record<KEYS, string>> = {
  en: englishTranslations,
  es: spanishTranslations,
  fr: frenchTranslations,
  nl: dutchTranslations,
} as const;
