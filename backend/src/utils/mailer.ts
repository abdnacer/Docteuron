import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import env from "./validateenv";

class Mail {
  public SendMail = async (path: any, email: any) => {
    const token = jwt.sign({ email: email }, env.Node_ENV);

    let transporter: any = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: env.EMAIL,
        pass: env.PASSWORD,
      },
    });

    let info = {
      from: '"DOCTEURON" <nasseressaouira@gmail.com>',
      to: email,
      subject: "DOCTEURON ✔",
      html: `
        <div style='height: 150px; width: 100%;'>
          <h3>Hy dear,</h3>
          <p>welcome to <span style='font-weight: bold;'>DOCTEURON</span>, Click Button For Active Your Account.</p>
          <a href="http://localhost:${env.PORT}/api/auth/${path}/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Active</a> 
        </div>`,
    };
    await transporter.sendMail(info);

    console.log("Message Send");
  };
}

const Mailer = new Mail;

export default Mailer;
