export const supportMsgTemplate = (name) => {
  return `<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email template</title>
      </head>
      <body>
          <h3>Hi ${name} 👋🏼</h3>
          <p>
            Thank you for contacting us! We only confirmed that we have received your request for more information and we will contact you within 24 hours with a more complete answer..
          </p>
          <p>
          If you need immediate assistance, do not hesitate to call us at +54 9 2920 36-2448 📱
          </p>
          <p>
          best regards,
          </p>
          <p>
          Everyone's Store 💜
          </p>
      </body>
  </html>`;
};
