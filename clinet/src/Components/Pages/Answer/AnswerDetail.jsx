import React from "react";
import Avatar from "../../Resources/Avatar.jpg";
import './AnswwerCodeBlock.css';
import $ from 'jquery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AnswerDetail({ answer }) {
  let alias = true;
  if ($(window).width() <= 750) alias = true;
  else alias = false;

  const truncate = (str) => {
    return str?.length > 40 ? str.substr(0, 40 - 1) + "..." : str;
  }

  const truncate2 = (str) => {
    return str?.length > 180 ? str.substr(0, 180 - 1) + "..." : str;
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <div className="header_question text-decoration-none text-black">
          <div className="question_user" style={{ textAlign: "center" }}>
        <img src={Avatar} alt="" className="hi" />
        <div style={{ width: "80%", height: "20%", margin: "auto" }}>
          {answer.user_name ? answer.user_name: "New User"}{" "}
        </div>
        </div>
            <div className="question_title ms-3" style={{ height: "80%" }}>
              <div> {alias ? truncate(answer.answer ? answer.answer : "New Answer") : truncate2(answer ? answer.answer : "New Answer")}</div>
            </div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="question_title" style={{ height: "80%" }}>
          <div> <p><h5>Answer Full Length:</h5>{answer.answer ? answer.answer : "New Answer"}</p></div>
        </div>

        <div className="s-prose">
          <pre className="lang-py s-code-block p-4 shadow" style={{ position: "relative" }}>
            <code className="hljs language-python">
              {answer.answertag ? answer.answertag : "Their is no code Answer from the Community."}
            </code>
          </pre>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AnswerDetail;
