import {
  boldo,
  presto,
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceBg1,
  serviceBg2,
  heroBg2,
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  blog1,
  blog2,
  blog3,
} from "../../public/assets";

import { FaThermometer, FaSun, FaEye } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";


export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "login",
    title: "Login",
  },
];

export const clients = [
  {
    id: "boldo",
    title: "Boldo",
    logo: boldo,
  },
  {
    id: "presto",
    title: "Presto",
    logo: presto,
  },
];

export const duplicatedClients = [];

for (let i = 0; i < 3; i++) {
  duplicatedClients.push(...clients);
}

export const services = [
  {
    id: "services-1",
    img: serviceImg1,
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "#",
  },
  {
    id: "services-2",
    img: serviceImg2,
    title: "Even cooler feature",
    content: "Learning curve network effects return on investment.",
    link: "#",
  },
  {
    id: "services-3",
    img: serviceImg3,
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "#",
  },
];

export const servicesTwo = [
  {
    id: "services1",
    img: serviceBg1,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "#",
    content: [
      {
        icon: HiCheck,
        content: "We connect our customers with the best.",
      },
      {
        icon: HiCheck,
        content: "Advisor success customer launch party.",
      },
      {
        icon: HiCheck,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
  {
    id: "services2",
    img: serviceBg2,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "#",
    content: [
      {
        icon: FaThermometer,
        content: "We connect our customers with the best.",
      },
      {
        icon: FaEye,
        content: "Advisor success customer launch party.",
      },
      {
        icon: FaSun,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
];

export const servicesThree = [
  {
    id: "services3",
    img: heroBg2,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    content: [
      {
        icon: HiCheck,
        sub: "We connect our customers with the best?",
      },
      {
        icon: HiCheck,
        sub: "Android research & development rockstar?",
      },
    ],
  },
];

export const userfeedback = [
  {
    id: "feedback-1",
    content:
      "Buyer buzz partner network disruptive non-disclosure agreement business.",
    name: "Albus Dumbledore",
    title: "Manager @ Howarts",
    img: person1,
  },
  {
    id: "feedback-2",
    content:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    name: "Severus Snape",
    title: "Manager @ Slytherin",
    img: person2,
  },
  {
    id: "feedback-3",
    content:
      "Release facebook responsive web design business model canvas seed money monetization.",
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
    img: person3,
  },
];

export const products = [
  {
    id: "products-1",
    type: "Category",
    date: "November 21, 2021",
    content: "Pitch termsheet backing validation focus release.",
    person: "Chandler Bing",
    img: person4,
    imgProduct: blog1,
  },
  {
    id: "products-2",
    type: "Category",
    date: "November 22, 2021",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    person: "Rachel Green",
    img: person5,
    imgProduct: blog2,
  },
  {
    id: "products-3",
    type: "Category",
    date: "November 23, 2021",
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    person: "Monica Geller",
    img: person6,
    imgProduct: blog3,
  },
];

export const footerUrl = [
  {
    title: "Landings",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Careers",
        info: "Hiring!",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
];

