import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
// import "font-awesome/css/font-awesome.min.css";
import "./Question.css";
import { FaGreaterThan } from "react-icons/fa";

function QuestionDetail({ question }) {
  return (
    <Link to={`/answer/${question.question_id}`} className="header_question text-decoration-none text-black">
      <div className="question_user" style={{ textAlign: "center" }}>
        <CgProfile style={{ width: "80%", height: "80%", margin: "auto" }} />
        <div style={{ width: "80%", height: "20%", margin: "auto" }}>
          {question.user_name ? question.user_name + "" : "New User"}{" "}
        </div>
      </div>
      <div className="question_title">
        <div className="question_content">
          {question.title ? question.title : "New Title"}
        </div>
        <div className="question_arrow">
          <FaGreaterThan />
        </div>
      </div>
    </Link>
  );
}

export default QuestionDetail;
