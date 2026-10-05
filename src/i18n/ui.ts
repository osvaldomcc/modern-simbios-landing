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
  "about.badge": "Est. 2004 · country",
  "about.title.part1": "About",
  "about.title.highlight": "company",
  "about.description.1":
    "At company, we believe that technology should be an enabler, not a hurdle. Based in country, our team of senior consultants and developers specializes in transforming complex technical challenges into streamlined digital experiences.",
  "about.description.2":
    "We partner with companies to build the backbone of their digital future.",
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
    "En company, creemos que la tecnología debe ser un facilitador, no un obstáculo. Con sede en Bélgica, nuestro equipo de consultores y desarrolladores senior se especializa en transformar desafíos técnicos complejos en experiencias digitales optimizadas.",
  "about.description.2":
    "Nos asociamos con empresas para construir la columna vertebral de su futuro digital.",
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
  "about.badge": "Fondé en 2004 · Country",
  "about.title.part1": "À propos de",
  "about.title.highlight": "company",
  "about.description.1":
    "Chez company, nous pensons que la technologie doit être un catalyseur, pas un obstacle. Basée en Country, notre équipe de consultants et de développeurs seniors est spécialisée dans la transformation de défis techniques complexes en expériences numériques fluides.",
  "about.description.2":
    "Nous collaborons avec des entreprises pour construire l'épine dorsale de leur avenir numérique.",
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
  "about.badge": "Sinds 2004 · C",
  "about.title.part1": "Over",
  "about.title.highlight": "company",
  "about.description.1":
    "Bij company geloven we dat technologie een enabler moet zijn, geen hindernis. Ons team van senior consultants en ontwikkelaars, gevestigd in C, is gespecialiseerd in het transformeren van complexe technische uitdagingen naar gestroomlijnde digitale ervaringen.",
  "about.description.2":
    "Wij werken samen met bedrijven om de ruggengraat van hun digitale toekomst te bouwen.",
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
  "switcher.popover": "Thema omschakelen",
};

export const defaultLang = "en";

export const ui: Record<LANG, Record<KEYS, string>> = {
  en: englishTranslations,
  es: spanishTranslations,
  fr: frenchTranslations,
  nl: dutchTranslations,
} as const;
