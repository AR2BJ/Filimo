import { FaXmark } from "react-icons/fa6";
import { useRef } from "react";

import "./Comment.css";

const Comments = (props) => {
  const xmark = useRef();
  const title_m = useRef();
  const comment = useRef();
  const question = useRef();
  const expand = () => {
    const x = xmark.current;
    const title = title_m.current;
    const com = comment.current;
    const ques = question.current;

    console.log();

    if (
      x.classList.contains("rotate-45") &&
      title.classList.contains("text-white") &&
      ques.style.height === "56px"
    ) {
      x.classList.replace("rotate-45", "rotate-0");
      title.classList.replace("text-white", "text-question");
      com.classList.remove("hidden");
      ques.style.height = `${56 + com.clientHeight}px`;
    } else {
      x.classList.replace("rotate-0", "rotate-45");
      title.classList.replace("text-question", "text-white");
      com.classList.add("hidden");
      ques.style.height = "56px";
    }
  };
  return (
    <div
      className="question_1 w-4/5 bg-[#ffffff05] p-4 mx-auto mb-2 border border-solid rounded-xl border-[#33353d] shadow-[0_10px_36px_#00000040] cursor-pointer transition-all duration-0.3 ease-_out"
      ref={question}
      style={{ height: "56px" }}
    >
      <div className="title relative">
        <div
          className="text-plus absolute top-1/2 left-0 -translate-y-1/2 rotate-45 transition-all duration-0.3 ease-_out"
          ref={xmark}
          onClick={expand}
        >
          <FaXmark className="text-sm" />
        </div>
        <p
          className="text-white lg:text-sm md:text-sm text-xs font-[IRANSansmed] transition-all duration-0.3 ease-_out"
          ref={title_m}
        >
          {props.title}
        </p>
      </div>
      <div className="descrip">
        <div
          className="hidden pt-2 text-[0.84rem] text-[#b6b6b6] text-right font-[IRANSansreg] leading-6 overflow-hidden transition-all duration-0.3 ease-_out"
          ref={comment}
        >
          {props.comments}
        </div>
      </div>
    </div>
  );
};

export default Comments;
