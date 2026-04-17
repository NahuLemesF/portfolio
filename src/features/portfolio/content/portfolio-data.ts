import {
  Activity,
  Award,
  BookOpen,
  Bug,
  Code,
  Coffee,
  FileDown,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  TestTubeDiagonal,
  Zap,
} from "lucide-react";
import type {
  HeroAction,
  HighlightItem,
  NavLink,
  ProfileContent,
  ProjectItem,
  QaItem,
  SocialLink,
  StudyItem,
} from "@/features/portfolio/types/portfolio";

export const portfolioProfile: ProfileContent = {
  name: "Nahuel Lemes",
  brandMark: "<Nahuel Lemes />",
  role: "Fullstack Developer & QA Engineer",
  heroRole: "Fullstack Full Cycle Developer & QA Engineer",
  heroDescription:
    "Diseño, desarrollo, pruebo y despliego. Domino el ciclo de vida completo del software con Java, React y automatización de calidad.",
  shortBio:
    "Diseño, desarrollo, pruebo y despliego software con foco en calidad y en una base técnica sólida.",
  aboutParagraphs: [
    "Soy Nahuel Lemes, desarrollador Fullstack y QA Engineer apasionado por construir software de calidad de principio a fin. Me especializo en el ciclo de vida completo del desarrollo: desde el diseño de arquitecturas backend con Java y Spring Boot, hasta interfaces modernas con React y TypeScript, pasando por la automatización de pruebas que garantizan que todo funcione como debe.",
    "Creo firmemente en que un buen desarrollador no solo escribe código, sino que entiende el problema, diseña la solución y valida el resultado. Esa filosofía \"full cycle\" es lo que define mi forma de trabajar. Cuando no estoy programando, probablemente me encuentres explorando nuevas tecnologías o contribuyendo a proyectos open source.",
  ],
  footerLabel: "© 2026 · Nahuel Lemes",
  email: "nahulem@gmail.com",
};

export const navigationLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#qa", label: "QA" },
  { href: "#experiencia", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export const heroActions: HeroAction[] = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    variant: "primary",
    external: true,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: Github,
    variant: "primary",
    external: true,
  },
  {
    href: "#",
    label: "Descargar CV",
    icon: FileDown,
    variant: "secondary",
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${portfolioProfile.email}`, label: "Email" },
];

export const aboutHighlights: HighlightItem[] = [
  { icon: Code, label: "Full Cycle Dev", description: "Diseño → Deploy" },
  { icon: ShieldCheck, label: "QA Engineer", description: "Automation & Testing" },
  { icon: Coffee, label: "Aprendizaje", description: "Mejora continua" },
];

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    title: "Dashboard Analytics",
    description:
      "Plataforma de analítica en tiempo real con gráficos interactivos, gestión de usuarios y reportes automatizados.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGRhcmt8ZW58MXx8fHwxNzc2MjgwOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    href: "https://github.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Tienda en línea con carrito de compras, pasarela de pagos, panel de administración y API REST completa.",
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzYyODA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Java", "React", "Docker", "MySQL"],
    href: "https://github.com",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Aplicación móvil con autenticación biométrica, transferencias en tiempo real y notificaciones push.",
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc2MjY1OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Node.js", "MongoDB"],
    href: "https://github.com",
  },
  {
    id: 4,
    title: "API Microservices",
    description:
      "Arquitectura de microservicios con gateway, service discovery, circuit breaker y testing automatizado.",
    image:
      "https://images.unsplash.com/photo-1667372335936-3dc4ff716017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzYyODA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Spring Boot", "Docker", "Karate DSL", "k6"],
    href: "https://github.com",
  },
];

export const manualQaItems: QaItem[] = [
  { icon: FlaskConical, name: "Postman", description: "API Testing & Collections" },
  { icon: TestTubeDiagonal, name: "Bruno", description: "API Client & Testing" },
  { icon: Bug, name: "Bug Tracking", description: "Jira / Linear" },
];

export const automationQaItems: QaItem[] = [
  { icon: ShieldCheck, name: "Karate DSL", description: "API Test Automation" },
  { icon: Zap, name: "Serenity BDD", description: "BDD Automation Framework" },
  { icon: Activity, name: "k6", description: "Performance & Load Testing" },
];

export const educationItems: StudyItem[] = [
  {
    title: "Ingeniería en Sistemas / Desarrollo de Software",
    institution: "Universidad / Instituto",
    period: "2020 - Presente",
    description:
      "Formación integral en ingeniería de software, algoritmos, estructuras de datos y arquitectura de sistemas.",
    icon: GraduationCap,
    tags: ["Algoritmos", "POO", "Bases de Datos"],
  },
  {
    title: "Fullstack Java Developer",
    institution: "Bootcamp / Certificación",
    period: "2022",
    description:
      "Desarrollo backend con Java, Spring Boot, frontend con React y despliegue con Docker.",
    icon: BookOpen,
    tags: ["Java", "Spring Boot", "React"],
  },
  {
    title: "QA Automation Engineer",
    institution: "Certificación profesional",
    period: "2023",
    description:
      "Automatización de pruebas con Karate DSL, Serenity BDD y pruebas de performance con k6.",
    icon: Award,
    tags: ["Karate DSL", "Serenity BDD", "k6"],
  },
  {
    title: "React & TypeScript Avanzado",
    institution: "Curso especializado",
    period: "2024",
    description:
      "Patrones avanzados de React, TypeScript, testing de componentes y performance optimization.",
    icon: BookOpen,
    tags: ["React", "TypeScript", "Testing"],
  },
];
