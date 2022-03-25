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
          <h3>Hola ${name} 👋🏼</h3>
          <p>
              ¡Muchas gracias por contactarnos! Solo confirmamos que hemos recibido tu solicitud de más información y nos comunicaremos contigo dentro de las 24 horas con una respuesta más completa.
          </p>
          <p>
          Si necesitas asistencia inmediata, no dudes en llamarnos al +54 9 2920 36-2448 📱
          </p>
              <p>
          Sinceramente,
          </p>
          <p>
          Everyone's Store 💙
          </p>
      </body>
  </html>`;
};
