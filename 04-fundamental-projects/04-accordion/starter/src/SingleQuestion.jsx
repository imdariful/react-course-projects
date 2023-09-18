import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ question, activeId, toggleQuestion }) => {
  const title = question?.title;
  const info = question?.info;
  const id = question?.id;

  const idActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {idActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {idActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
