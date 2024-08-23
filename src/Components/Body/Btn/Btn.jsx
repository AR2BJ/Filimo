import { NavLink } from "react-router-dom";

const Btn = (props) => {
  return (
    <button
      className={`${props.className} transition-all duration-0.3 ease-_out hover:bg-purchase_hover`}
      type="button"
    >
      <NavLink
        className="w-full text-white lg:text-base md:text-base text-sm font-[IRANSansmed] flex flex-row justify-center items-center"
        to="https://www.filimo.com/payment"
      >
        {props.text}
        {props.icon}
      </NavLink>
    </button>
  );
};

export default Btn;
