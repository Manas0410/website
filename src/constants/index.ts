import insta from "/assets/instagram.png";
import faceBook from "/assets/facebook.png";
import linkedin from "/assets/linkedin.png";
import twitter from "/assets/twitter.png";

type Link = {
  id: number;
  name: string;
  href: string;
};

export const navLinks: Link[] = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

type Social = {
  icon: string;
  color?: string;
  link: string;
};

export const socials: Social[] = [
  {
    icon: insta,
    link: "https://www.instagram.com/msxdev01",
  },
  {
    icon: linkedin,
    color: "#0a66c2",
    link: "https://www.linkedin.com/in/msxdev-dev-148881329",
  },
  {
    icon: twitter,
    color: "gray",
    link: "https://x.com/Msx_dev43",
  },
  {
    icon: faceBook,
    color: "#0866ff",
    link: "https://www.facebook.com/people/Manas-Srivastava/pfbid0346K4C6MKpr2EyGuExTJLEBbPWf3dxKi61xe4eYrAq6GHSkB2VEx7RHJHc5hPUA19l/?mibextid=ZbWKwL",
  },
];

type Service = {
  heading: string;
  description: string;
  imgSrc: string;
  href: string;
};

export const services: Service[] = [
  {
    heading: "Modern Web Development",
    description:
      "We build cutting-edge websites using the latest technologies, ensuring high performance, security, and scalability for your business. Our team specializes in creating custom web solutions, whether it's a dynamic single-page application or a complex enterprise platform. We ensure each project meets industry standards and exceeds client expectations with continuous support and future-proof designs.",
    imgSrc: "/assets/servicebanner2.jpg",
    href: "webdev",
  },
  {
    heading: "E-commerce Web/Store",
    description:
      "Launch your online store with our tailor-made e-commerce solutions, designed to boost your business. We develop user-friendly, secure, and scalable e-commerce platforms that integrate seamless payment gateways, inventory management, and responsive design. From small boutiques to large online marketplaces, we help you attract customers and offer a superior shopping experience that keeps them coming back.",
    imgSrc: "/assets/servicebanner2.jpg",
    href: "ecommerce",
  },
  {
    heading: "Responsive + SEO",
    description:
      "We create mobile-first, responsive websites that deliver an outstanding user experience on all devices, from smartphones to desktops. Our SEO-focused strategies ensure your website not only looks great but also ranks well in search engines, helping you attract more organic traffic. By blending technical SEO, content optimization, and modern web design, we position your site to thrive in a competitive digital landscape.",
    imgSrc: "/assets/servicebanner2.jpg",
    href: "responsive",
  },
  {
    heading: "Portfolio Website",
    description:
      "Showcase your creative work or business offerings with a beautifully crafted portfolio website. Our team works closely with you to design a site that reflects your personal or brand identity, ensuring it's both visually appealing and functionally effective. Whether you're an artist, designer, or entrepreneur, we'll help you build a platform that highlights your strengths and leaves a lasting impression.",
    imgSrc: "/assets/servicebanner2.jpg",
    href: "portfolio",
  },
  {
    heading: "UI-UX Consulting",
    description:
      "Enhance the usability and design of your digital products with our UI/UX consulting services. We conduct thorough user research, create intuitive wireframes, and craft aesthetically pleasing interfaces that drive user engagement and satisfaction. Whether you’re launching a new product or optimizing an existing one, our design team ensures that your application not only meets user needs but also creates memorable digital experiences.",
    imgSrc: "/assets/servicebanner2.jpg",
    href: "uiux",
  },
];

export const homeBannerText: string =
  "We offer comprehensive services, from crafting custom websites using all the modern technologies to building e-commerce platforms, web applications, and responsive designs. They manage front-end and back-end development, provide maintenance, support, and integrate SEO to ensure optimal performance and visibility online.";

export const servicesDescription: string =
  "At SMxDev, we specialize in delivering cutting-edge web development solutions tailored to your business needs. Our services range from building modern, responsive websites and e-commerce platforms to optimizing for SEO and creating engaging portfolio websites. We also offer expert UI/UX consulting to enhance user experience, ensuring your digital products are intuitive, visually appealing, and highly functional.";
