import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';
import { config } from './config';

const app = express();
app.use(cors({origin: true}));

app.post('/email', (req, res) => {
    try {
        const { subject, dest, message, userName, language } = req.body;

        const emailUserMessage = language === 'en' ?
        `Kind regards <span style="font-weight: bold;">Mr./Mrs. ${userName}</span>. Thanks for write. I will contact you as soon as possible.` : 
        `Saludos cordiales <span style="font-weight: bold;">Sr./Sra. ${userName}</span>. Gracias por escribir. Me pondré en contacto con usted tan pronto como sea posible.`
        transporter.sendMail({
            from: 'miguelramidev@gmail.com',
            to: dest.trim(),
            subject,
            html: `
            <html>
                <body style="color: #3c3c3c; font-family: Arial, Helvetica, sans-serif; margin: 0; 
                padding: 1%; border: 0;">
                    <div style="width: 80%; background-color: #2a6896; padding: 20px; border-radius: 10px;
                    margin: auto;">
                        <h1 style="text-align: center; color: white; font-style: italic;">Miguelramidev</h1>
                    </div>
            
                    <div style="width: 80%; margin: auto;">
                        <p style="font-size: 20px; margin: 35px 0;">
                            ${emailUserMessage}
                        </p>
                
                        <p style="text-align: right; font-size: 20px; font-style: italic;">
                            Att: <span style="font-weight: bold;">Miguel Ramirez</span>.
                        </p>
                    </div>
                </body>
            </html>
            `
        }, (err, info) => {
            if (err) {
                res.status(400).send({
                    error: err,
                    success: false
                });
                return;
            }

            transporter.sendMail({
                from: 'miguelramidev@gmail.com',
                to: 'miguelramidev@gmail.com',
                subject: 'Mensaje de Portafolio',
                html: `
                    <html>
                        <p>La persona ${userName} con correo ${dest} te mandó este mensaje: </p>
                        <p>${message}</p>
                    </html>
                `
            }, (error, information) => {
                if (error) {
                    return;
                }
            });

            res.status(200).send({
                success: true,
                data: info
            });
        });

    } catch (error) {
        res.status(500).send({
            error: 'Internal Error',
            success: false
        })
    }
})



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'miguelramidev@gmail.com',
        pass: config.emailPass
    }
});

admin.initializeApp();

/**
 * @description Envia un correo electrónico
 */
export const api = functions.https.onRequest(app)

