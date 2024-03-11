var transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "c3d8078ae94a7a09696c178caaf7a7ee"
  }
});