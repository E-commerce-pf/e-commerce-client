const baseUri = "http://localhost:3000";

export const subscribe = (id) => {
  return `    
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Subscribe</title>
  
      <!-- Styles -->
      <link rel="stylesheet" />
      <style>
        * {
          box-sizing: border-box;
        }
        main {
          width: 100%;
          display: flex;
          flex-direction: column;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 15px;
        }
        h1 {
          text-align: center;
        }
        img {
          transform: scale(0.3);
        }
        div {
          width: 100%;
          align-items: left;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>Hello 👋🏼</h1>
        <p>
          You have Subscribe to our newsletter to get the latest news and updates.
        </p>
        <p>
          <a href="${baseUri}/unsubscribe/${id}">Unsubscribe</a>
        </p>
        <div>
          <img src="https://i.ibb.co/b5NkjVL/Everylogopf.png" alt="Everylogopf" />
        </div>
      </main>
    </body>
  </html>  
  `;
};

export const unsubscribe = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Subscribe</title>
  
      <!-- Styles -->
      <link rel="stylesheet" />
      <style>
        * {
          box-sizing: border-box;
        }
        main {
          width: 100%;
          display: flex;
          flex-direction: column;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 15px;
        }
        h1 {
          text-align: center;
        }
        img {
          transform: scale(0.3);
        }
        div {
          width: 100%;
          align-items: left;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>Hello 👋🏼</h1>
        <p>
          You have Unsubscribe to our newsletter!.
        </p>
        <div>
          <img src="https://i.ibb.co/b5NkjVL/Everylogopf.png" alt="Everylogopf" />
        </div>
      </main>
    </body>
  </html>     
  `;
};
