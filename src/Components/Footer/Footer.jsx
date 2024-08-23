import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

import img_footer from "../../assets/image/img_footer.svg";
import sub_footer from "../../assets/image/sub_footer.svg";
import telegram from "../../assets/image/telegram.svg";
import twitter from "../../assets/image/twitter.svg";
import instagram from "../../assets/image/instagram.svg";
import aparat from "../../assets/image/aparat.svg";

const Footer = () => {
  const submenu = useRef();
  const submenu2 = useRef();
  return (
    <>
      <footer className="w-full min-h-7 bg-background_footer text-footer_title text-xs font-[IRANSansreg] fixed bottom-0 flex flex-row-reverse justify-between items-center transition-all duration-0.3 ease-_out z-20 ">
        <ul className="flex flex-row-reverse justify-center items-center">
          <li>
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              تماشا‌ با تلویزیون
              <img className="ml-1" src={img_footer} alt="img_footer" />
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              اپلیکیشن‌ها
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              تماس و پشتیبانی
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              فروشگاه
            </NavLink>
          </li>
          <li
            className="relative"
            onMouseEnter={() => {
              let sub = submenu.current;
              sub.classList.replace("opacity-0", "opacity-100");
              sub.classList.replace("invisible", "visible");
              sub.classList.replace("-translate-y-4", "translate-y-0");
            }}
            onMouseLeave={() => {
              let sub = submenu.current;
              sub.classList.replace("opacity-100", "opacity-0");
              sub.classList.replace("visible", "invisible");
              sub.classList.replace("translate-y-0", "-translate-y-4");
            }}
          >
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              سایر لینک‌ها
              <img className="ml-1" src={sub_footer} alt="img_footer" />
            </NavLink>
            <div
              className="submenu min-w-[150px] bg-red absolute bottom-7 -left-16 -translate-y-4 opacity-0 invisible transition-all duration-0.3 ease-_out"
              ref={submenu}
            >
              <div className="content w-full h-2 absolute bottom-0">
                <ul className="min-w-[160px] bg-background_footer shadow-[#000_0_8px_16px_0] absolute bottom-1.5 translate-y-0 opacity-100 visible transition-all duration-0.3 ease-_out z-20 before:content-[''] before:bg-background_footer before:w-2.5 before:h-2.5 before:absolute before:-bottom-1.5 before:right-10 before:rotate-45 before:-z-10">
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      قوانین
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      به ما بپیوندید
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      تبلیغات در فیلیمو
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      لوگو
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      دانلود فیلم و سریال
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li
            className="relative"
            onMouseEnter={() => {
              let sub = submenu2.current;
              sub.classList.replace("opacity-0", "opacity-100");
              sub.classList.replace("invisible", "visible");
              sub.classList.replace("-translate-y-4", "translate-y-0");
            }}
            onMouseLeave={() => {
              let sub = submenu2.current;
              sub.classList.replace("opacity-100", "opacity-0");
              sub.classList.replace("visible", "invisible");
              sub.classList.replace("translate-y-0", "-translate-y-4");
            }}
          >
            <NavLink className="py-1 px-2 lg:text-base md:text-base text-[7px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:text-white">
              شبکه‌های اجتماعی
              <img className="ml-1" src={sub_footer} alt="img_footer" />
            </NavLink>
            <div
              className="submenu min-w-[150px] bg-red absolute bottom-7 -left-0 -translate-y-4 opacity-0 invisible transition-all duration-0.3 ease-_out"
              ref={submenu2}
            >
              <div className="content w-full h-2 absolute bottom-0">
                <ul className="min-w-[160px] bg-background_footer shadow-[#000_0_8px_16px_0] absolute bottom-1.5 translate-y-0 opacity-100 visible transition-all duration-0.3 ease-_out z-20 before:content-[''] before:bg-background_footer before:w-2.5 before:h-2.5 before:absolute before:-bottom-1.5 before:right-10 before:rotate-45 before:-z-10">
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      آپارات
                      <img className="ml-1" src={aparat} alt="aparat" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      تلگرام
                      <img className="ml-1" src={telegram} alt="telegram" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      توئیتر
                      <img className="ml-1" src={twitter} alt="twitter" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-[11px] flex flex-row justify-end items-center transition-all duration-0.3 ease-_out hover:bg-background_footer_hover hover:text-white">
                      اینستاگرام
                      <img className="ml-1" src={instagram} alt="instagram" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
