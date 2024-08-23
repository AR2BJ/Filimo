import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Header.css";

import logo from "../../assets/image/logo.png";
import icon_1 from "../../assets/image/icon_1.svg";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenu = async () => {
    let data = await fetch("http://localhost:3000/menu");
    let res = await data.json();
    setMenu(res);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="menu-bar w-full 2xl:h-[52px] xl:h-[52px] lg:h-fit md:h-[150px] lg:pb-0 md:pb-10 bg-[#040404] fixed top-0 flex flex-row justify-center items-center z-50">
        <div className="menu w-full max-w-[1440px] h-full px-[60px] mx-auto flex flex-row-reverse lg:justify-between md:justify-center items-center">
          <div className="bar lg:h-full md:h-fit flex flex-row-reverse flex-wrap justify-start items-center">
            <NavLink
              className="w-[80px] h-[25px] pl-8 ml-8 lg:mt-5 md:mb-4 lg:border-transparent md:border-transparent border-l border-solid xl:border-[#ffffff4d] 2xl:border-[#ffffff4d] flex flex-row justify-center items-center box-content"
              to="/"
            >
              <img src={logo} alt="logo" />
            </NavLink>
            <ul className="h-full lg:h-[60px] md:h-[30px] flex flex-row-reverse md:flex-wrap justify-center md:justify-start items-center overflow-auto">
              {menu?.map((item) => {
                return (
                  <li
                    className="h-full ml-8 relative flex flex-row justify-center items-center group"
                    key={item.id}
                  >
                    <NavLink
                      className="text-header_link font-[IRANSansreg] text-xs flex flex-row justify-center items-center group-hover:text-hover transition-all duration-0.3 ease-_out"
                      to={item.link}
                    >
                      {item.picon ? <FaAngleDown className="mr-1" /> : ""}
                      {item.title}
                      {item.icon1 === "/src/assets/image/menu_icon_1.svg" ? (
                        <img className="ml-1" src={item.icon1} alt="icon" />
                      ) : item.icon1 ? (
                        <svg
                          viewBox="0 0 24 24"
                          className={
                            item.icon1 !==
                            "M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L8.6 16.82a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48A6 6 0 0 1 17.74 14.74Z"
                              ? "w-6 h-6 ml-1 group-hover:fill-hover transition-all duration-0.3 ease-_out"
                              : "w-[18px] h-[18px] ml-1 group-hover:fill-hover transition-all duration-0.3 ease-_out"
                          }
                          fill="#fff"
                        >
                          <path d={item.icon1}></path>
                          {item.icon2 ? <path d={item.icon2}></path> : ""}
                        </svg>
                      ) : (
                        ""
                      )}
                    </NavLink>
                    {item.picon ? (
                      <div className="bg-dropdown min-w-[333px] rounded-md shadow-[rgba(0,0,0,.2)_0_8px_16px_0] absolute top-16 -right-1.5 transition-all duration-0.3 ease-_out opacity-0 invisible flex flex-row justify-end items-center z-50 group-hover:top-12 group-hover:opacity-100 group-hover:visible">
                        <ul className="w-full flex flex-row-reverse flex-wrap justify-start items-center">
                          {item.subtitle?.map((Item, i) => {
                            return (
                              <li
                                className="subtitle w-1/2 font-[IRANSansreg] text-xs text-white py-2.5 px-1.5 flex flex-row justify-end items-center transition-all duration-0.3 ease-_out cursor-pointer hover:text-hover"
                                key={i}
                              >
                                {Item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btn flex flex-row justify-center items-center">
            <button
              className="h-[2.375rem] py-2.5 px-4 bg-[#ffffff33] rounded text-white flex flex-row justify-center items-center hover:bg-[#ffffff3f] transition-all duration-0.3 ease-_out"
              type="button"
            >
              <NavLink
                className="font-[IRANSansmed] text-xs"
                to="https://www.filimo.com/signin"
              >
                ورود
              </NavLink>
            </button>
            <button
              className="lg:w-32 md:w-36 h-[38px] py-2.5 px-4 ml-4 bg-purchase rounded text-white flex flex-row justify-center items-center hover:bg-purchase_hover transition-all duration-0.3 ease-_out"
              type="button"
            >
              <NavLink
                className="font-[IRANSansmed] text-xs"
                to="https://www.filimo.com/payment"
              >
                خرید اشتراک
              </NavLink>
              <img className="w-[18px] h-[18px] ml-1" src={icon_1} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
