// const mysql = require("mysql");

// const pool = mysql.createPool({
//   // connectionLimit: 1000,
//   // connectTimeout: 60 * 60 * 1000,
//   // acquireTimeout: 60 * 60 * 1000,
//   // timeout: 60 * 60 * 1000,
//   host: "localhost",
//   port: "3001",
//   user: "root",
//   password: "",
//   database: "evangadiforum",
//   // connectionLimit: 10,
// });
// pool.getConnection(function (err, connection) {
//   console.log("connected sir");
// });
// let registration = `CREATE TABLE if not exists registration(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_email varchar(255) not null,
//     user_password varchar(255) not null,
//     PRIMARY KEY (user_id),
//     UNIQUE KEY (user_name)
//     )`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

// let question = `CREATE TABLE if not exists question(
//     question_id int auto_increment,
//     user_id int not null,
//     title varchar(200) not null,
//     question varchar(65535) not null,
//     time DateTime not null,
//     PRIMARY KEY (question_id),
//     FOREIGN KEY (user_id) REFERENCES registration(user_id)
// )`;
// let answer = `CREATE TABLE if not exists answer(
//     answer_id int auto_increment,
//     user_id int not null,
//     question_id int not null,
//     answer varchar(65535) not null,
//     time DateTime not null,
//     answertag varchar(65535),
//     PRIMARY KEY (answer_id),
//     FOREIGN KEY (user_id) REFERENCES registration(user_id),
//      FOREIGN KEY (question_id) REFERENCES question(question_id)
// )`;

// pool.query(registration, (err, results) => {
//   if (err) console.log(err) ;
//   console.log("registration table created");
// });
// pool.query(profile, (err, results) => {
//   if (err) console.log(err) ;
//   console.log("profile table created");
// });

// pool.query(question, (err, results) => {
//   if (err) console.log(err) ;
//   console.log("question table created");
// });
// pool.query(answer, (err, results) => {
//   if (err) console.log(err) ;
//   console.log("answer table created");
// });
// pool.end();
// module.exports = pool;



const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.MS,
  connectionLimit: 10,
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;

// let profile = `CREATE TABLE if not exists profile(
//   user_profile_id int auto_increment,
//   user_id int not null,
//   first_name varchar(255) not null,
//   last_name varchar(255) not null,        
//   PRIMARY KEY (user_profile_id),
//   FOREIGN KEY (user_id) REFERENCES registration(user_id)
// )`;

let question = `CREATE TABLE if not exists question(
    question_id int auto_increment,
    user_id int not null,
    title varchar(200) not null,
    question varchar(65535) not null,
    time DateTime not null,
    questiontag varchar(65535),
    PRIMARY KEY (question_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let answer = `CREATE TABLE if not exists answer(
    answer_id int auto_increment,
    user_id int not null,
    question_id int not null,
    answer varchar(65535) not null,
    time DateTime not null,
    answertag varchar(65535),
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (question_id) REFERENCES question(question_id)
)`;

pool.query(registration, (err) => {
  if (err) console.log(err) ;
  console.log("registration table created");
});
pool.query(profile, (err) => {
  if (err) console.log(err) ;
  console.log("profile table created");
});
pool.query(question, (err) => {
  if (err) console.log(err) ;
  console.log("question table created");
});
pool.query(answer, (err) => {
  if (err) console.log(err) ;
  console.log("answer table created");
});

module.exports = pool;

