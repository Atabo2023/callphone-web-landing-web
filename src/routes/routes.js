
import LandingPage from "../pages/LandingPage/LandingPage";
import Contact from "../pages/ContactPage/Contact";
import Airvend from "../pages/ProductPages/Airvend/AirvendProduct";


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
];
export default WebRoutes;

