import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { firstName, lastName, email, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            replyTo: email,
            subject: `Contact Form Submission - ${email}`,
            text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}  
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email Sent Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}