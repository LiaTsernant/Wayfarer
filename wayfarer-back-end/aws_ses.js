let AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' }); 

function sendEmail(ToAddresses, name) {
  let params = {
    Destination: { /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        `${ToAddresses}`,
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
          Charset: "UTF-8",
          Data: `<html>
                      <head></head>
                      <body>
                        <h1>Dear ${name}!</h1>
                        <p>Happy to see you on our web-site!</p>
                      </body>
                      </html>`
        },
        Text: {
          Charset: "UTF-8",
          Data: "Welcome!\r\n"
            + "Happy to see you on our web-site!"
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Welcome Email'
      }
    },
    Source: 'aalto2011@yandex.ru', /* required */
    ReplyToAddresses: [
      'aalto2011@yandex.ru',
      /* more items */
    ],
  };

  let sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
};

module.exports = sendEmail;