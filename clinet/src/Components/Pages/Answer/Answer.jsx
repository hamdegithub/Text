import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import Axios from "../../../Axios";
import AnswerDetail from "./AnswerDetail";
import "./Answer.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Answer() {
  const { id } = useParams();
  console.log(id);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const axios = Axios();
  const navigate = useNavigate();
  const [userData, setUserData] = React.useContext(UserContext);

  React.useEffect(() => {
    if (!userData.user) navigate("/login");

  }, [userData?.user, navigate]);

  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const postRes = await axios.post(
        "/api/answer/newanswer",
        {
          answer: form.new_answer,
          question_id: id,
          answertag: form.answertag
        },
        userData.config
      );
      setAnswers((answers) => [
        ...answers,
        {
          answer: form.new_answer,
          time: new Date(),
          user_id: question.user_id,
          user_name: userData.user.display_name,
          answer_id: postRes.data.insertId,
          answertag: form.answertag
        },
      ]);
      e.target.reset();
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    loadQuestion();
    loadAnswers();
  }, []);

  async function loadQuestion() {
    const response = await axios.get(
      `/api/question/getquestionbyid?question_id=${id}`,
      userData.config
    );
    setQuestion(response.data?.data);
  }

  async function loadAnswers() {
    const response = await axios.get(
      `/api/answer/getanswer?question_id=${id}`,
      userData.config
    );
    setAnswers(response.data?.data);
  }

  useEffect(() => {
    if (!userData.user) navigate("/login");
    
  }, [userData?.user, navigate]);

  return (
    <section className="container">
      <div className="AFTER">
        <h2>Questions</h2>
        <h4>{question.title ? question.title : "New Title"}</h4>
        <p>{question.question ? question.question : "New Question"}</p>
        {/* {question ? question.questiontag : "New Code Problem"}{console.log(question)} */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1>See Code Problem</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="s-prose">
          <pre className="lang-py s-code-block p-4 shadow" style={{ position: "relative" }}>
            <code className="hljs language-python">
            {question.questiontag ? question.questiontag : "Their is no code Answer from the Community."}
            </code>
          </pre>
        </div>
        </AccordionDetails>
      </Accordion>
        {answers.length > 0 && (
          <h2 className="community_title">Answer From The Community</h2>
        )}
        <div>
          {answers?.map((value, index) => {
            return <AnswerDetail answer={value} key={index} />;
          })}
          {/* {console.log(answers)} */}


        </div>
        <div className="container shadow rounded-5 py-3 px-5" style={{ 
          width: "90%",
          borderRadius: "20px",
          marginTop: "100px"
          }}>
          <div
            className="container"
            style={{
              paddingTop: "50px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <h2>Answer The Top Question</h2>
            <Link to="/">Go to Question Page</Link>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div style={{ width: "100%" }}>
              <div>
                <textarea
                  style={{
                    marginTop: "15px",
                    height: "200px",
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px 15px",
                  }}
                  maxLength="200"
                  type="text"
                  name="new_answer"
                  placeholder="Your Answer . . . "
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  style={{
                    marginTop: "15px",
                    height: "200px",
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px 15px",
                  }}
                  type="text"
                  name="answertag"
                  placeholder="Your Code Answer . . . "
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                className="suplex"
              >
                <button
                  style={{
                    padding: "10px 25px",
                    borderRadius: "5px",
                  }}
                  className="btn btn-lg btn-primary"
                  type="submit"
                >
                  Post Your Answer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Answer;
