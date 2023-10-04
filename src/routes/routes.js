import LandingPage from "../pages/LandingPage/LandingPage";
import Contact from "../pages/ContactPage/Contact";
import Airvend from "../pages/ProductPages/Airvend/AirvendProduct";
import Airpay from "../pages/ProductPages/Airpay/AirpayProduct";
import Airgate from "../pages/ProductPages/Airgate/AirgateProduct";
import UssdPage from "../pages/ProductPages/Ussd/UssdPage";
import CareersPage from "../pages/CompanyPage/Careers/CareersPage";
import BlogPage from "../pages/Blog/BlogPage";
import TestimonialsPage from "../pages/ResourcesPage/Testimonals/Testimonials";
// import Viewall from "../pages/ResourcesPage/Testimonals/SideBar/Viewall";
import Viewall from "../pages/ResourcesPage/Testimonals/SideBar/Viewall";
import AirgateTestimonal from "../pages/ResourcesPage/Testimonals/SideBar/AirgateTestimonal";
import AirvendTestimonal from "../pages/ResourcesPage/Testimonals/SideBar/AirvendTestimonal";
import AirpayTestimonal from "../pages/ResourcesPage/Testimonals/SideBar/AirpayTestimonal";
import News from "../pages/ResourcesPage/News/News";
import AboutPage from "../pages/CompanyPage/AboutUs/About";
import TeamPage from "../pages/CompanyPage/Team/Team";
import GalleryPage from "../pages/CompanyPage/Gallery/Gallery";

const WebRoutes = [
  {
    title: "Home",
    path: "/",
    component: LandingPage,
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    title: "Airvend",
    path: "/airvend",
    component: Airvend,
  },
  {
    title: "Airpay",
    path: "/airpay",
    component: Airpay,
  },
  {
    title: "Airgate",
    path: "/airgate",
    component: Airgate,
  },
  {
    title: "UssdPage",
    path: "/ussdPage",
    component: UssdPage,
  },
  {
    title: "Career",
    path: "/career",
    component: CareersPage,
  },
  {
    title: "Blog",
    path: "/blog",
    component: BlogPage,
  },
  {
    title: "Testimonials",
    path: "/testimonials/*",
    component: TestimonialsPage,
    children: [
      {
        title: "Viewall",
        path: "viewall-Testimonials",
        component: Viewall,
      },
      {
        title: "Airgate",
        path: "airgate-Testimonials",
        component: AirgateTestimonal,
      },
      {
        title: "Airpay",
        path: "airpay-Testimonials",
        component: AirpayTestimonal,
      },
      {
        title: "Airvend",
        path: "airvend-Testimonials",
        component: AirvendTestimonal,
      },
    ],
  },
  {
    title: "News",
    path: "/news",
    component: News,
  },
  {
    title: "About",
    path: "/about",
    component: AboutPage,
  },
  {
    title: "Team",
    path: "/team",
    component: TeamPage,
  },
  {
    title: "Gallery",
    path: "/gallery",
    component: GalleryPage,
  },
];
export default WebRoutes;
