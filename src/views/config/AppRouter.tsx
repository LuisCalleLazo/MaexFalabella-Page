
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../home/HomeLayout";
import { HomeView } from "../home/HomeView";
import { ContactView } from "../contact/ContactView";
import { ServicesView } from "../services/ServicesView";
import { AboutView } from "../about/AboutView";

export const AppRouter = () => {

  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element = {<HomeView />}/> 
          <Route path="/about" element = {<AboutView />}/>
          <Route path="/services" element = {<ServicesView />}/> 
          <Route path="/contact" element = {<ContactView />}/>
        </Routes>
      </HomeLayout>
    </>
  )
}