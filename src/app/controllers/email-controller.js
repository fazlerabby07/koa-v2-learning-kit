import mailer from 'nodemailer';

/* mail configurtion start*/
// create reusable transporter object using the default SMTP transport
const transporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'xxxxxx@gmail.com',
        pass: 'something'      // for gmail two step varification we need pass and here is link for this https://nodemailer.com/using-gmail/
    }
});
const mailOptions = {
    from: 'xxxxxx@gmail.com', // sender address
    to: 'yyyyyy@live.com', // list of receivers
    subject: 'Test mail subject', // Subject line
    text: 'this is a test mail text....', // plaintext body
    html: '<b>this is a test mail for</b> <h3>html</h3>......' // html body
};
const email =  async function(ctx) {
    try {
        const mail = transporter.sendMail( mailOptions );
        ctx.body = 'success!!!!';
    } catch (err) {
        ctx.body = err.code;
    }
};
export default {
    email
};
