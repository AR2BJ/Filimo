import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import Btn from "./Btn/Btn";
import Comments from "./Comments/Comments";

import { FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

import "./Body.css";

import check from "../../assets/image/check.svg";
import icon_1 from "../../assets/image/icon_1.svg";
import icon_2 from "../../assets/image/ticket.png";
import gift from "../../assets/image/gift.svg";
import f_logo from "../../assets/image/logo_text.png";
import cinema_film from "../../assets/image/cinema_film.jpg";
import bg_cinema from "../../assets/image/bg-cinama.png";
import carton from "../../assets/image/bg-kids.png";
import device_img from "../../assets/image/device_img.png";
import TV_img from "../../assets/image/TVBG.png";
import TV_img_2 from "../../assets/image/TVBG-2.jpeg";
import tv from "../../assets/image/TV.png";
import android_TV from "../../assets/image/androidTV.png";
import laptop from "../../assets/image/laptop.png";
import mobile from "../../assets/image/mobile.png";
import game from "../../assets/image/game.png";

const Body = () => {
  const sliderRef = useRef(null);
  const btn_1 = useRef();
  const btn_2 = useRef();
  const cards = useRef();
  const [slide, setSlide] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [activeContent, setActiveContent] = useState(null);
  const [selectone, setSelectone] = useState(true);
  const [selecttwo, setSelecttwo] = useState(false);
  const [pop, setPop] = useState([]);
  const [free, setFree] = useState([]);
  const [comments, setComments] = useState([]);
  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  const handleClick = (index, content) => {
    setActiveCard(index);
    setActiveContent(content);
  };
  const fetchContnet = async () => {
    let data = await fetch("http://localhost:3000/popular");
    let res = await data.json();
    setPop(res);
  };
  const fetchFree = async () => {
    let data = await fetch("https://66c8af9f8a477f50dc2efb10.mockapi.io/free");
    let res = await data.json();
    setFree(res);
  };
  const fetchComments = async () => {
    let data = await fetch(
      "https://66c8af9f8a477f50dc2efb10.mockapi.io/comments"
    );
    let res = await data.json();
    setComments(res);
  };
  const fetchSlide = async () => {
    let data = await fetch("http://localhost:3000/slider_1");
    let res = await data.json();
    setSlide(res);
  };
  useEffect(() => {
    fetchContnet();
    fetchFree();
    fetchComments();
    fetchSlide();
  }, []);
  useEffect(() => {
    if (pop && pop.length > 0) {
      if (selectone && !selecttwo && pop[0].serial) {
        setActiveCard(0);
        setActiveContent(pop[0].serial[0]);
      } else {
        setActiveCard(0);
        setActiveContent(pop[1].film[0]);
      }
    }
  }, [pop, selectone, selecttwo]);
  return (
    <>
      <div className="slider_1 lg:py-[18.5%] md:py-[50%] py-[80%] mt-[52px] relative flex flex-row justify-center items-center">
        <div className="cover_1 absolute inset-0 m-auto z-30"></div>
        <div className="cover_2 absolute inset-0 m-auto z-30"></div>
        <Swiper
          speed={2000}
          autoplay={{
            delay: 5000,
            stopOnLastSlide: true,
          }}
          spaceBetween={30}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          className="Swiper1 absolute inset-0 m-auto z-20"
        >
          {slide?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img className="h-full object-cover" src={item.image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="Contents w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5 absolute bottom-16 flex flex-col justify-center items-center z-40">
          <p className="subtitle w-full mb-4 text-transparent text-sm font-[IRANSansbol] leading-5 flex flex-row justify-center items-center !bg-clip-text">
            با فیلیمو بی‌وقفه فیلم ببین
          </p>
          <h1 className="title w-full pb-2 2xl:mb-8 xl:mb-8 mb-8 lg:mb-4 text-white text-center text-[40px] font-[IRANSansbol] leading-10 flex flex-row justify-center items-center">
            !کنترل همیشه دست توست
          </h1>
          <div className="items w-full 2xl:mb-16 xl:mb-16 lg:mb-4 md:mb-8 mb-10 flex lg:flex-row md:flex-col flex-col justify-evenly md:justify-center items-center lg:gap-8 md:gap-3">
            <div className="item flex flex-row justify-center items-center">
              <p className="text text-item_text 2xl:text-base xl:text-base lg:text-sm font-[IRANSansThin]">
                می‌تونی یک عضو، مخصوص تماشای کودک بسازی
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
            <div className="item flex flex-row justify-center items-center">
              <p className="text text-item_text 2xl:text-base xl:text-base lg:text-sm font-[IRANSansThin]">
                می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
            <div className="item flex flex-row justify-center items-center">
              <p className="text text-item_text 2xl:text-base xl:text-base lg:text-sm font-[IRANSansThin] flex flex-row-reverse">
                95 هزار اپیزود فیلم و سریال برای تماشا داری
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 mt-0.5 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
          </div>
          <Btn
            className="lg:w-[285px] md:w-[200px] w-[285px] bg-purchase lg:py-4 md:py-3 py-3 mx-auto rounded-lg lg:text-base md:text-xs flex flex-row justify-center items-center"
            icon={<img className="btn_icon_1 pl-2" src={icon_1} alt="share" />}
            text="خرید اشتراک و تماشا"
          />
          <p className="mt-2 text-inner_btn text-[10px] font-[IRANSansreg] flex flex-row justify-center items-center">
            تخفیف ویژه برای کاربران جدید
            <img className="w-[18px] h-[18px] ml-1" src={gift} alt="gift" />
          </p>
        </div>
      </div>
      <div className="popular w-full bg-background_primary mb-6  flex flex-row justify-center items-center">
        <div className="Contents w-full flex flex-col justify-center items-center">
          <div className="top w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5 mx-auto flex flex-col justify-center items-center">
            <div className="title w-full mb-6 flex flex-row-reverse justify-start items-center">
              <span className="ml-4 text-white text-lg font-[IRANSansbol] leading-6">
                محبوب‌ترین‌های فیلیمو
              </span>
              <div className="switch w-[120px] p-px border border-solid border-active_2 rounded-full flex flex-row-reverse justify-center items-center">
                <button
                  className="w-1/2 bg-active_2 px-2 rounded-2xl text-white text-sm font-[IRANSansbol] leading-6"
                  type="button"
                  ref={btn_1}
                  onClick={() => {
                    if (btn_2.current.classList.contains("bg-active_2")) {
                      btn_2.current.classList.remove("bg-active_2");
                      btn_1.current.classList.add("bg-active_2");
                    }
                    setSelectone(true);
                    setSelecttwo(false);
                  }}
                >
                  سریال
                </button>
                <button
                  className="w-1/2 px-2 rounded-2xl text-white text-sm font-[IRANSansbol] leading-6"
                  type="button"
                  ref={btn_2}
                  onClick={() => {
                    if (btn_1.current.classList.contains("bg-active_2")) {
                      btn_1.current.classList.remove("bg-active_2");
                      btn_2.current.classList.add("bg-active_2");
                    }
                    setSelectone(false);
                    setSelecttwo(true);
                  }}
                >
                  فیلم
                </button>
              </div>
            </div>
            <div className="Cards w-full pt-4 pr-2 pb-6 flex lg:flex-row-reverse md:flex-wrap flex-wrap lg:justify-between md:justify-center justify-center items-center">
              {pop?.map((item) => {
                if (selectone && !selecttwo && item.serial) {
                  return item.serial.map((is, index) => (
                    <div
                      className={`card_${
                        index + 1
                      } min-w-32 mb-2 ml-2.5 flex flex-row justify-center items-center transition-all duration-150 ease-out ${
                        activeCard === index ? "active_card" : ""
                      }`}
                      key={index}
                      onClick={() => handleClick(index, is)}
                    >
                      <div className="content w-full relative flex flex-row justify-center items-center transition-all duration-0.3 ease-out cursor-pointer group">
                        {is.label ? (
                          <>
                            <div className="cover rounded-lg absolute inset-0 m-auto z-20"></div>
                            <img
                              className="absolute bottom-3 z-30"
                              src={is.label}
                              alt="label"
                            />
                          </>
                        ) : (
                          ""
                        )}
                        <img
                          className={`card rounded-lg transition-all duration-0.3 ease-out group-hover:opacity-100 ${
                            activeCard === index
                              ? "opacity-100"
                              : "opacity-[0.65]"
                          }`}
                          src={is.image}
                          alt="serial_img"
                        />
                      </div>
                    </div>
                  ));
                } else if (!selectone && selecttwo && item.film) {
                  return item.film.map((i, index) => (
                    <div
                      className={`card_${
                        index + 1
                      } min-w-32 mb-2 ml-2.5 flex flex-row justify-center items-center transition-all duration-150 ease-out ${
                        activeCard === index ? "active_card" : ""
                      }`}
                      key={index}
                      onClick={() => handleClick(index, i)}
                    >
                      <div className="content w-full relative flex flex-row justify-center items-center transition-all duration-0.3 ease-out cursor-pointer group">
                        {i.label ? (
                          <>
                            <div className="cover rounded-lg absolute inset-0 m-auto z-20"></div>
                            <img
                              className="absolute bottom-3 z-30"
                              src={i.label}
                              alt="label"
                            />
                          </>
                        ) : (
                          ""
                        )}
                        <img
                          className={`card rounded-lg transition-all duration-0.3 ease-out group-hover:opacity-100 ${
                            activeCard === index
                              ? "opacity-100"
                              : "opacity-[0.65]"
                          }`}
                          src={i.image}
                          alt="serial_img"
                        />
                      </div>
                    </div>
                  ));
                }
              })}
            </div>
          </div>
          <div className="pop w-full flex flex-row-reverse justify-center items-center">
            <div
              className="cards w-full flex flex-col justify-center items-center"
              ref={cards}
            >
              {activeContent && (
                <div className="Content w-full relative flex flex-col justify-center items-center">
                  <div className="cover_1 absolute inset-0 m-auto z-20"></div>
                  <div className="cover_2 absolute inset-0 m-auto z-20"></div>
                  <img
                    className="w-full h-full object-cover object-top absolute inset-0 m-auto z-10"
                    src={activeContent.cover}
                    alt="cover"
                  />
                  <div className="items w-full pt-2.5 pb-[85px] flex flex-col justify-center items-center z-30">
                    <div className="detail w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5 mx-auto relative mb-4 flex flex-row justify-end items-center">
                      <div className="logo absolute top-0 left-24">
                        <img
                          className="max-w-[220px] max-h-[190px]"
                          src={activeContent.logo}
                          alt="logo"
                        />
                      </div>
                      <div className="title flex flex-col justify-center items-end">
                        <h3 className="mb-9 text-white text-lg font-[IRANSansbol] leading-8">
                          {activeContent.title}
                        </h3>
                        <p className="mb-6 text-description text-xs font-[IRANSansThin] leading-3">
                          {activeContent.subtitle}
                        </p>
                        <div className="cat mb-6 w-full flex flex-row-reverse justify-start items-center gap-2">
                          {activeContent.cat.map((i, index) =>
                            index === 0 && activeContent.IMDb ? (
                              <span
                                className="w-max bg-[#ffc43c1f] py-1 px-2 rounded-2xl text-answer text-xs font-[IRANSansreg] flex flex-row justify-center items-center backdrop-blur"
                                key={index}
                              >
                                {i}
                                <img
                                  className="w-[22px] ml-1"
                                  src={activeContent.IMDb}
                                  alt="IMDb"
                                />
                              </span>
                            ) : (
                              <span
                                className="min-w-[50px] bg-cat py-1 px-4 rounded-3xl text-white text-xs font-[IRANSansreg]"
                                key={index}
                              >
                                {i}
                              </span>
                            )
                          )}
                        </div>
                        <p className="max-w-[708px] max-h-[100px] mb-6 text-white text-sm text-ellipsis whitespace-nowrap font-[IRANSansThin] leading-7 overflow-y-auto overflow-hidden">
                          {activeContent.description}
                        </p>
                        {activeContent.IMDb ? (
                          <>
                            <Btn
                              className="w-[260px] bg-purchase py-3 px-4 mb-6 rounded text-xs flex flex-row justify-center items-center"
                              icon={
                                <img
                                  className="btn_icon_1 w-6 pl-1"
                                  src={icon_1}
                                  alt="share"
                                />
                              }
                              text="خرید اشتراک و تماشا"
                            />
                            <p className="text-white text-[10px] font-[IRANSansreg]">
                              {activeContent.rule}
                            </p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="parts w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5 mx-auto mb-4 flex flex-row justify-start items-center">
                      <Swiper
                        navigation={true}
                        slidesPerView={4}
                        spaceBetween={28}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {activeContent.part
                          ? activeContent.part.map((item, index) => (
                              <SwiperSlide
                                className="lg:!w-[309px] lg:!h-[210px] md:h-[100px] md:!w-[130px] rounded-lg flex flex-col justify-center items-start cursor-pointer"
                                key={index}
                              >
                                <div className="content w-full h-[177px] mb-2 relative flex flex-row justify-center items-start">
                                  {item.cover !== false ? (
                                    <div className="cover bg-background_blur m-auto rounded-lg absolute inset-0 backdrop-blur-[5px]"></div>
                                  ) : (
                                    ""
                                  )}
                                  {item.lock ? (
                                    <div className="lock w-12 h-12 bg-background_blur m-auto rounded-full absolute inset-0 flex flex-row justify-center items-center backdrop-blur-[5px]">
                                      <img
                                        className="w-1/2"
                                        src={item.lock}
                                        alt="lock"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {item.cover === false ? (
                                    <>
                                      <div className="bottom w-full absolute bottom-0 px-2 pb-2 flex flex-row justify-between items-center">
                                        <div className="free bg-background_badge text-badge py-1 px-2 rounded-3xl flex flex-row justify-center items-center">
                                          <img
                                            className="ml-1"
                                            src={item.icon}
                                            alt="icon"
                                          />
                                          <p className="text-[10.5px] font-[IRANSansreg]">
                                            رایگان
                                          </p>
                                        </div>
                                        <div className="time bg-background_blur py-1 px-2 rounded-lg text-[#e3e3e3] text-[11px] font-[IRANSansbol] backdrop-blur-[14px]">
                                          <p>{item.time}</p>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                  <img
                                    className="w-full h-full rounded-lg object-cover"
                                    src={item.img}
                                  />
                                </div>
                                <p className="text-[#f6f6f6] text-xs font-[IRANSansbol] leading-4 z-10">
                                  {item.title}
                                </p>
                              </SwiperSlide>
                            ))
                          : ""}
                      </Swiper>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="devices w-full bg-background_primary py-16 flex flex-row justify-center items-center">
        <div className="Contents w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5 flex lg:flex-row-reverse md:flex-row-reverse flex-col md:justify-around items-center">
          <div className="img 2xl:w-[570px] xl:w-[570px] lg:w-[570px] md:w-[300px] mr-6">
            <img src={device_img} alt="device_img" />
          </div>
          <div className="content w-1/2 md:mt-0 mt-10 flex flex-col justify-between items-end">
            <h3 className="mb-4 text-right text-white text-lg font-[IRANSansbol] md:leading-4 leading-6">
              تماشای فیلیمو با همه دستگاه‌ها
            </h3>
            <p className="mb-8 text-subtitle text-right text-[15px] font-[IRANSansThin] leading-6">
              می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
              تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
            </p>
            <div className="item_1 w-full mb-8 flex flex-row justify-end items-start">
              <div className="text flex flex-col justify-center items-end">
                <p className="text-subtitle mb-4 text-[15px] font-[IRANSansbol] leading-4">
                  کامپیوتر و لپ‌تاپ
                </p>
                <p className="text-description text-[11px] font-[IRANSansreg] leading-3">
                  windows PC - MacOS - Chorom OS
                </p>
              </div>
              <img className="w-7 ml-2.5" src={laptop} alt="laptop" />
            </div>
            <div className="item_2 w-full mb-8 flex flex-row justify-end items-start">
              <div className="text flex flex-col justify-center items-end">
                <p className="text-subtitle mb-4 text-[15px] font-[IRANSansbol] leading-4">
                  موبایل و تبلت
                </p>
                <p className="text-description text-[11px] font-[IRANSansreg] leading-3">
                  Android Phone & Tablets - Iphone and Ipad - Amazon Fire
                  Tablets
                </p>
              </div>
              <img className="w-5 ml-2.5" src={mobile} alt="mobile" />
            </div>
            <div className="item_3 w-full mb-8 flex flex-row justify-end items-start">
              <div className="text flex flex-col justify-center items-end">
                <p className="text-subtitle mb-4 text-[15px] font-[IRANSansbol] leading-4">
                  (Browser) کنسول های بازی
                </p>
                <p className="text-description text-[11px] font-[IRANSansreg] leading-3">
                  Xbox Series S - Xbox Seris X - PS5 - PS4
                </p>
              </div>
              <img className="w-7 ml-2.5" src={game} alt="game" />
            </div>
            <Btn
              className="w-[160px] bg-purchase py-1.5 px-3 rounded-lg text-xs flex flex-row justify-center items-center"
              icon={
                <img className="btn_icon_2 pl-2" src={icon_1} alt="share" />
              }
              text="خرید اشتراک و تماشا"
            />
          </div>
        </div>
      </div>
      <div className="television w-full relative bg-background_blur md:bg-black py-16 flex flex-row justify-center items-center">
        <div className="Contents w-full max-w-[1440px] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex- flex-col justify-end md:justify-center items-center">
          <div className="img xl:w-[785px] lg:w-[600px] mr-6 2xl:absolute xl:absolute lg:absolute md:static bottom-0 left-0">
            {window.screen.width <= 768 ? (
              <img src={TV_img_2} alt="device_img" />
            ) : (
              <img src={TV_img} alt="device_img" />
            )}
          </div>
          <div className="content w-full px-[60px] flex flex-col justify-between items-end">
            <h3 className="mb-6 text-white text-lg font-[IRANSansbol] leading-4">
              چطور با تلویزیون، فیلیمو تماشا کنم؟
            </h3>
            <p className="max-w-[400px] mb-8 pb-4 text-subtitle text-right text-[13px] font-[IRANSansThin] leading-6">
              ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
              فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که
              می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون
              شما سازگار است را انتخاب کنید.
            </p>
            <div className="item_1 w-full mb-8 flex flex-row justify-end items-start">
              <div className="text flex flex-col justify-center items-end">
                <p className="text-subtitle mb-4 text-[15px] font-[IRANSansbol] leading-4">
                  تلویزیون
                </p>
                <p className="text-description text-[11px] font-[IRANSansreg] leading-3">
                  Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
                  devices - Samsung
                </p>
              </div>
              <img className="w-7 ml-2.5" src={tv} alt="TV" />
            </div>
            <div className="item_2 w-full mb-16 flex flex-row justify-end items-start">
              <div className="text flex flex-col justify-center items-end">
                <p className="text-subtitle mb-4 text-[15px] font-[IRANSansbol] leading-4">
                  اندروید تی‌وی
                </p>
                <p className="text-description text-[11px] font-[IRANSansreg] leading-3">
                  NVIDIA - amazon - xiaomi - minix - skystream - turewell -
                  ematic - humax - matricom
                </p>
              </div>
              <img className="w-5 ml-2.5" src={android_TV} alt="android_TV" />
            </div>
            <button
              className="bg-default py-2.5 px-4 rounded-lg text-xs flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:bg-[#737373]"
              type="button"
            >
              <NavLink
                className="w-full text-white font-[IRANSansmed] flex flex-row justify-center items-center"
                to="https://www.filimo.com/payment"
              >
                <FaChevronLeft className="mr-2" />
                ویدیوهای آموزشی تماشا با تلویزیون
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="free w-full relative bg-background_primary py-16 flex flex-row justify-center items-center">
        <div className="Contents w-full max-w-[1440px] px-[60px] flex flex-col justify-center items-start">
          <p className="mb-8 text-white text-lg font-[IRANSansbol]">
            محتواهای رایگان
          </p>
          <Swiper
            navigation={true}
            slidesPerView={6}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            className="mySwiper pt-2.5 px-4"
          >
            {free.map((item, index) => (
              <SwiperSlide
                className="rounded-lg flex flex-col justify-center items-start cursor-pointer"
                key={index}
              >
                <div className="img w-full min-w-[130px] mb-2 relative flex flex-row justify-center items-start">
                  <div className="free bg-background_badge text-badge py-1 px-2 rounded-3xl absolute top-1 lg:right-5 md:right-2 flex flex-row justify-center items-center z-10">
                    <img className="ml-1" src={item.icon} alt="icon" />
                    <p className="text-[10.5px] font-[IRANSansreg]">رایگان</p>
                  </div>
                  <img
                    className="opacity-[0.65] rounded-[10px] object-cover"
                    src={item.image}
                  />
                </div>
                <p className="mr-1 text-[#f6f6f6] text-xs font-[IRANSansbol] leading-4 z-10">
                  {item.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="carton w-full relative pt-[42px] 2xl:px-[60px] xl:px-[60px] lg:px-5 flex flex-row justify-center items-center">
        <div className="cover absolute inset-0 m-auto"></div>
        <div className="Contents w-[85%] max-w-[1440px] mx-auto flex lg:flex-row-reverse md:flex-row-reverse flex-col justify-between items-center">
          <div className="img max-w-[45%]">
            <img className="w-[90%]" src={carton} alt="device_img" />
          </div>
          <div className="content w-1/2 flex flex-col justify-between items-end">
            <h3 className="pb-4 lg:mt-0 md:mt-0 mt-5 text-center text-white lg:text-xl md:text-lg text-sm font-[IRANSansreg]">
              دنیایی متنوع از فیلم و کارتون‌های کودکانه
            </h3>
            <p className="mb-8 text-white text-right lg:text-[15px] md:text-xs text-[10px] font-[IRANSansThin] text-opacity-50 leading-6">
              ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک
              فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را
              ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
            </p>
            <div className="btn mb-6 flex flex-row-reverse justify-end items-center">
              <button
                className="bg-uniq py-2.5 lg:px-4 px-2.5 ml-3 rounded-lg lg:text-xs md:text-[10px] text-[8px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:bg-[#d6d6d6]"
                type="button"
              >
                <NavLink
                  className="w-full text-background_primary font-[IRANSansbol] flex flex-row justify-center items-center"
                  to="https://www.filimo.com/payment"
                >
                  فیلیمو کودک بساز
                </NavLink>
              </button>
              <button
                className="bg-uniq py-2.5 lg:px-4 px-2.5 rounded-lg lg:text-xs md:text-[10px] text-[8px] flex flex-row justify-center items-center transition-all duration-0.3 ease-_out hover:bg-[#d6d6d6]"
                type="button"
              >
                <NavLink
                  className="w-full text-background_primary font-[IRANSansbol] flex flex-row justify-center items-center"
                  to="https://www.filimo.com/payment"
                >
                  تماشای فیلیمو کودک
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cinema w-full py-16 relative flex flex-col justify-center items-center">
        <div className="Contents w-full max-w-[1440px] px-[60px] flex flex-col justify-center items-center">
          <div className="img absolute inset-0 mx-auto -z-10">
            <img
              className="w-full h-full object-fill"
              src={bg_cinema}
              alt="bg_cinama"
            />
          </div>
          <div className="Contents w-full flex flex-col justify-center items-center">
            <h1 className="title w-full mb-8 text-white text-xl font-[IRANSansbol] leading-5 flex flex-row justify-center items-center">
              سینما آنلاین فیلیمو
            </h1>
            <div className="items w-full mb-4 text-center flex lg:flex-row md:flex-col flex-col justify-evenly items-center">
              <div className="item mb-4 flex flex-row justify-center items-center">
                <p className="text text-subtitle text-base font-[IRANSansThin] flex flex-row-reverse">
                  خرید یک بلیت برای تماشا همراه با همه خانواده
                </p>
                <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                  <img
                    className="max-w-fit w-3.5 h-3.5"
                    src={check}
                    alt="check"
                  />
                </div>
              </div>
              <div className="item mb-4 flex flex-row justify-center items-center">
                <p className="text text-subtitle text-base font-[IRANSansThin]">
                  ۸ ساعت زمان برای مشاهده فیلم در هر کجا
                </p>
                <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                  <img
                    className="max-w-fit w-3.5 h-3.5"
                    src={check}
                    alt="check"
                  />
                </div>
              </div>
              <div className="item mb-4 flex flex-row justify-center items-center">
                <p className="text text-subtitle text-base font-[IRANSansThin]">
                  فیلم‌های روز سینمای ایران
                </p>
                <div className="icon w-5 h-5 bg-shadow p-1 mt-0.5 ml-2 rounded-full flex flex-row justify-center items-center">
                  <img
                    className="max-w-fit w-3.5 h-3.5"
                    src={check}
                    alt="check"
                  />
                </div>
              </div>
            </div>
            <div className="film w-full">
              <div className="Contents max-h-[570px] flex flex-row justify-center items-center">
                <div className="item lg:min-w-[528px] p-2.5 m-3 bg-[#ffffff0f] border border-solid border-[#33353d] rounded-xl shadow-[0_10px_36px_#00000040] flex flex-row justify-center items-center backdrop-blur-[32px]">
                  <div className="content w-full relative flex flex-row-reverse justify-start items-center">
                    <div className="label w-max bg-[#0000004d] text-white py-1 px-1.5 rounded-2xl absolute left-5 top-0 flex flex-row justify-center items-center">
                      <p className="text-xs font-[IRANSansreg]">اکران آنلاین</p>
                      <img className="w-1/5" src={icon_2} alt="ticket" />
                    </div>
                    <div className="ml-4 mb-1">
                      <img
                        className="cinema_film w-full rounded-lg"
                        src={cinema_film}
                        alt="cinema_film"
                      />
                    </div>
                    <div className="content h-[224px] flex flex-col justify-between items-end">
                      <p className="w-full mb-3 text-[15px] text-white font-[IRANSansbol] leading-6">
                        بی بدن
                      </p>
                      <p className="w-full mb-6 text-subtitle text-sm font-[IRANSansThin] leading-4">
                        کارگردان: null
                      </p>
                      <div className="cat w-full mb-6 flex flex-row justify-center items-center">
                        <p className="w-max py-1 px-2.5 bg-[#00000033] text-white text-xs font-[IRANSansreg] leading-4 rounded-2xl">
                          درام
                        </p>
                        <p className="w-max py-1 px-2.5 ml-2 bg-[#00000033] text-white text-xs font-[IRANSansreg] leading-4 rounded-2xl">
                          جنایی
                        </p>
                      </div>
                      <div className="w-[70px] p-2.5 border border-solid border-white rounded-lg cursor-pointer hover:bg-background_primary">
                        <p className="ml-3 text-xs font-[IRANSansreg] leading-4">
                          خریدبلیت
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comments w-full relative bg-background_primary py-16 flex flex-row justify-center items-center">
        <div className="Contents w-full max-w-[1440px] px-[60px] flex flex-col justify-center items-start">
          <div className="top w-full flex flex-row justify-between items-center">
            <p className="mb-6 text-white text-[17px] font-[IRANSansbol]">
              نظر کاربران بعد از تماشای فیلیمو
            </p>
            <div className="slider_btn ml-4 flex flex-row justify-center items-center">
              <div className="swiperButtonNext ml-1" onClick={handlePrev} />
              <div className="swiperButtonPrev" onClick={handleNext} />
            </div>
          </div>
          <Swiper
            ref={sliderRef}
            loop={true}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={16}
            className="mySwiper pt-2.5 px-4"
          >
            {comments.map((item, index) => (
              <SwiperSlide
                className="bg-[#ffffff05] p-6 border border-solid border-border_comments shadow-[0_10px_36px_#00000040] rounded-xl flex flex-col justify-center items-start cursor-pointer"
                key={index}
              >
                <div className="feedback w-full min-w-[130px] mb-2 relative flex flex-col justify-center items-start">
                  <div className="top w-full flex flex-row justify-between items-center">
                    <div className="title flex flex-row justify-start items-center">
                      <img className="ml-2" src={item.avatar} alt="avatar" />
                      <p className="text-inner_btn text-[15px] font-[IRANSansreg] flex flex-row justify-start items-center">
                        {item.name}
                      </p>
                    </div>
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="comment h-[75px] mb-4 overflow-y-auto overflow-hidden flex flex-row justify-start items-center">
                    <p className="text-right text-comment text-xs font-[IRANSansreg] leading-4 flex flex-row justify-end items-center">
                      {item.feedback}
                    </p>
                  </div>
                </div>
                <p className="mr-1 text-[#f6f6f6] text-xs font-[IRANSansbol] leading-4 z-10">
                  {item.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="question w-full py-20 flex flex-row justify-center items-center">
        <div className="Contents w-full max-w-[1440px] 2xl:px-[60px] xl:px-[60px] lg:px-5">
          <div className="title w-full mb-8">
            <h3 className="text-base text-center font-[IRANSansreg]">
              سوالات متداول
            </h3>
            <p className="w-full mt-2.5 text-[#9e9e9e] text-xs text-center font-[IRANSansreg]">
              سوال شایع دیگر کاربران شاید برای شما پیش امده باشد
            </p>
          </div>
          <Comments
            title="آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟"
            comments={
              <>
                بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود
                اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید
                یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم
                از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید
                اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به
                <NavLink className="text-answer"> دانلود از طریق سایت </NavLink>
                و
                <NavLink className="text-answer">
                  {" "}
                  دانلود از طریق اپلیکیشن{" "}
                </NavLink>
                را تماشا کنید.
              </>
            }
          />
          <Comments
            title="آیا فیلیمو برای خارج از ایران در دسترس است؟"
            comments={
              <>
                خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان
                تماشا برای افراد خارج از کشور فعال نیست.
              </>
            }
          />
          <Comments
            title="آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟"
            comments={
              <>
                تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛
                یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه
                کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم
                را از داخل خانه تماشا کنید.
              </>
            }
          />
          <Comments
            title="از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟"
            comments={
              <>
                برای نصب نرم&zwnj;افزار اندرویدی فیلیمو می&zwnj;توانید ازطریق
                کافه بازار یا مایکت اقدام به دانلود کنید. یا می&zwnj;توانید روی
                گزینه روبرو بزنید و به&zwnj;طور مستقیم فایل نرم&zwnj;افزار را
                دریافت کنید.{" "}
                <NavLink className="text-answer">
                  {" "}
                  (دانلود مستقیم نرم&zwnj;افزار اندروید){" "}
                </NavLink>
                برای دانلود نرم&zwnj;افزار iOS فیلیمو نیز کافیست روی گزینه روبرو
                بزنید و به&zwnj;طور مستقیم فایل نرم&zwnj;افزار را دریافت کنید.{" "}
                <NavLink className="text-answer">
                  {" "}
                  (دانلود مستقیم نرم&zwnj;افزار iOS){" "}
                </NavLink>
              </>
            }
          />
        </div>
      </div>
      <div className="filimo w-full relative">
        <div className="cover_f absolute inset-0 m-auto -z-10"></div>
        <div className="content py-16 flex flex-col justify-around items-center">
          <div className="logo w-[190px] pb-16 mx-auto">
            <img src={f_logo} alt="logo" />
          </div>
          <div className="items w-full pb-3 mb-8 flex lg:flex-row md:flex-col flex-col justify-center items-center lg:gap-0 md:gap-5 gap-5">
            <div className="item ml-8 flex flex-row justify-center items-center">
              <p className="text text-item_text text-[17px] font-[IRANSansThin]">
                پشتیبانی 24 ساعته برای راهنمایی شما
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
            <div className="item ml-8 flex flex-row justify-center items-center">
              <p className="text text-item_text text-[17px] font-[IRANSansThin]">
                هزاران انیمیشن و کارتون برای کودکان
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
            <div className="item ml-8 flex flex-row justify-center items-center">
              <p className="text text-item_text text-[17px] font-[IRANSansThin] flex flex-row-reverse">
                هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
              </p>
              <div className="icon w-5 h-5 bg-shadow p-1 mt-0.5 ml-2 rounded-full flex flex-row justify-center items-center">
                <img
                  className="max-w-fit w-3.5 h-3.5"
                  src={check}
                  alt="check"
                />
              </div>
            </div>
          </div>
          <Btn
            className="lg:w-[285px] md:w-[285px] w-[180px] bg-purchase py-4 lg:px-0 md:px-0 px-2 mx-auto rounded-lg text-lg flex flex-row justify-center items-center"
            icon={<img className="pl-2" src={icon_1} alt="share" />}
            text="خرید اشتراک و تماشا"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
