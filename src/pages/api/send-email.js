import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, email, message } = req.body;

    // Configuración del transporte
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email', // Servidor SMTP de Titan Mail
      port: 587, // Puerto SMTP (cambia a 465 si usas SSL/TLS)
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico de Titan Mail
        pass: process.env.EMAIL_PASS, // Tu contraseña o token de aplicación de Titan Mail
      },
    });

    // Configuración del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@gamc.cl', // El correo al que se enviará el mensaje
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${name}
        Empresa: ${company}
        Correo: ${email}
        Mensaje: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error('Error enviando correo:', error);
      res.status(500).json({ message: 'Error enviando correo', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
