import LandingPage from "../pages/LandingPage/LandingPage";
import Contact from "../pages/ContactPage/Contact";
import Airvend from "../pages/ProductPages/Airvend/AirvendProduct";
import Airpay from "../pages/ProductPages/Airpay/AirpayProduct";
import Airgate from "../pages/ProductPages/Airgate/AirgateProduct";
import UssdPage from "../pages/ProductPages/Ussd/UssdPage";
import CareersPage from "../pages/CompanyPage/Careers/CareersPage";
import BlogPage from "../pages/Blog/BlogPage";
import TestimonialsPage from "../pages/ResourcesPage/Testimonals/Testimonials";

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
    path: "/testimonials",
    component: TestimonialsPage,
  }
]
export default WebRoutes;
