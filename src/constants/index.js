
import { useEffect, useState } from 'react';
import {
  logo,
  backend,
  creator,
  Arduino,
  IotIcon,
  Arduinologo,
  gearXpert,
  project2,
  project3,
  git,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  NodeMCU,
  openCV,
  Python,
  onShape,
  Kicad,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Arduino Developer",
    icon: Arduino,
  },
  {
    title: "Iot Development",
    icon: IotIcon,
  },
  {
    title: "3D Designing",
    icon: backend,
  },
  {
    title: "3D Parametric Modeling",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Arduino",
    icon: Arduinologo,
  },
  {
    name: "Node MCU",
    icon: NodeMCU
  },
  {
    name: "Open CV",
    icon: openCV,
  },
  {
    name: "Python AI/ML",
    icon: Python,
  },
  {
    name: "Onshape",
    icon: onShape,
  },
  {
    name: "Kicad",
    icon: Kicad,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Arduino UNO,NANO and MEGA",
    company_name: "Corizo",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flearn.corizo.in%2F&psig=AOvVaw23bx2T6822jBwupNArl3hA&ust=1750928107587000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiBxdCZjI4DFQAAAAAdAAAAABAE",
    iconBg: "#383E56",
    date: "Jan 2025 - present",
points: [
  "Designing and developing embedded systems and IoT applications using platforms like Arduino and ESP32.",
  "Collaborating with hardware and software teams to create reliable, real-time wireless communication systems (e.g., using ESP-NOW).",
  "Implementing responsive control systems, integrating analog/digital sensors, servo motors, and ensuring power-efficient embedded designs.",
  "Reviewing circuit designs, optimizing microcontroller code, and providing constructive feedback on embedded project improvements.",
],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];
const projects = [
  {
    name: "Drone-x450-quad",
    description:
      "An open-source, GPS-enabled X-type quadcopter** built on APM 2.8, optimized for stable autonomous missions, failsafe landings, and easy calibration",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project3,
    source_code_link: "https://github.com/AROMATRX/Drone-x450-quad/tree/main/",
  },
];

export { services, technologies, experiences, testimonials, projects };
