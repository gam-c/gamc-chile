import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, company, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios, excepto empresa.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu-email@gmail.com', // Reemplaza con tu correo de Gmail
      pass: 'tu-contraseña', // Reemplaza con tu contraseña de Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'info@gamc.cl', // Correo al que se enviará el mensaje
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `
      Nombre: ${name}
      Empresa: ${company}
      Correo: ${email}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};
