//const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index", {
    page_name: "index",
  });
};
exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};

exports.sendEmail = async (req, res) => {
  // const outputMessage = `
  // <h1>Mail Details</h1>
  // <ul>
  // <li> Name: ${req.body.name}</li>
  // <li> Email: ${req.body.email}</li>
  // </ul>
  // <h1>Message</h1>
  // <p>${req.body.message}</p>
  // `;

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: "",
  //     pass: "",
  //   },
  // });

  // let info = await transporter.sendMail({
  //   from: "'Smart EDU Contact Form' <husamcahit@gmail.com' ",
  //   to: "",
  //   subject: "",
  //   text: "",
  //   html: outputMessage,
  // });
  console.log(req.body);
  req.flash("success", "You message will be replied");

  res.redirect("contact");
};
