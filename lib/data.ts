import React from "react";
import { FaComputer, FaReact } from "react-icons/fa6";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import kanbamImg from "@/public/kanbam.png";
import hellYumImg from "@/public/hellyum.png";
import concertFinderImg from "@/public/concert_finder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate college",
    location: "Provo, UT",
    description:
      "I graduated from BYU with a degree in Physics Education and a minor in Mathematics",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "High School Teacher",
    location: "Orem, UT",
    description:
      "I teach at Mountain View High School. I create programs and assignments using PHP, Python and more.",
    icon: React.createElement(LuSchool),
    date: "2019 - 2024",
  },
  {
    title: "Complete Bootcamp",
    location: "Salt Lake City, UT",
    description:
      "Completed the University of Utah's full stack coding bootcamp.",
    icon: React.createElement(FaComputer),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Orem, UT",
    description:
      "I currently work as a Full-Stack Developer doing freelance work, and working part time for Spring Micro.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Kanban Board",
    description:
      "A project organizer that allows you to move tasks as they move from one part of development to another.",
    tags: [
      "Apollo",
      "Jest",
      "Bootstrap",
      "Express",
      "Bcrypt",
      "MongoDB",
      "Heroku",
    ],
    imageUrl: kanbamImg,
  },
  {
    title: "Hell-Yum",
    description:
      "An app to store and share recipes, an create a shopping list of needed ingredients",
    tags: ["MongoDB", "Bulma", "Heroku", "Express", "Handlebars", "Sequelize"],
    imageUrl: hellYumImg,
  },
  {
    title: "Concert Finder",
    description:
      "My first project was a concert finder where you can find upcoming shows for any given artist",
    tags: ["Javascript", "Bulma"],
    imageUrl: concertFinderImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Bulma",
  "MUI",
  "Prisma",
  "Sequelize",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgresSQL",
  "Python",
  "Django",
  "Flask",
  "PHP",
] as const;
