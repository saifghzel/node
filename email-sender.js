const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ghzelsaif2@gmail.com",
    pass: "fnxg gbrw iupt lhgp",
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: { address: "ghzelsaif2@gmail.com" },
    to: "ghzelsaif898@gmail.com",
    subject: "Hello ✔",
    text: "Hello world? bonjour coucou",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
