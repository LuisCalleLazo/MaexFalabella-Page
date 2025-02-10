import { ReactNode } from "react";
import { FooterHome } from "./FooterHome";
import { HeadHome } from "./HeadHome";

export const HomeLayout = ({ children }: { children: ReactNode }) =>
{
  return(
    <>
      <HeadHome />
        {children}
      <FooterHome />
      <div className="fixed right-[30px] bottom-[30px] z-50">
        <div className="bg-green-400 rounded-full size-15 flex 
          justify-center items-center hover:cursor-pointer hover:scale-105" onClick={() => window.open('https://wa.me/59178824516', '_blank')}>
          <i className="bi bi-whatsapp text-white text-4xl ml-0.5 mb-0.5"/>
        </div>
      </div>
    </>
  );
}