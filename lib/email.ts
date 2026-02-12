// Email service utilities
// Uncomment and configure based on your chosen email provider

// ============================================
// OPTION 1: Resend (Recommended)
// ============================================
// import { Resend } from 'resend';
// 
// const resend = new Resend(process.env.RESEND_API_KEY);
// 
// export async function sendContactEmail(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   return await resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'your-email@example.com',
//     subject: `New Contact Form: ${data.service}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Service:</strong> ${data.service}</p>
//       <p><strong>Message:</strong></p>
//       <p>${data.message}</p>
//     `,
//   });
// }

// ============================================
// OPTION 2: SendGrid
// ============================================
// import sgMail from '@sendgrid/mail';
// 
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
// 
// export async function sendContactEmail(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   const msg = {
//     to: 'your-email@example.com',
//     from: 'noreply@yourdomain.com',
//     subject: `New Contact Form: ${data.service}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Service:</strong> ${data.service}</p>
//       <p><strong>Message:</strong></p>
//       <p>${data.message}</p>
//     `,
//   };
//   
//   return await sgMail.send(msg);
// }

// ============================================
// OPTION 3: Nodemailer (SMTP)
// ============================================
// import nodemailer from 'nodemailer';
// 
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '587'),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });
// 
// export async function sendContactEmail(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   return await transporter.sendMail({
//     from: process.env.SMTP_USER,
//     to: 'your-email@example.com',
//     subject: `New Contact Form: ${data.service}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Service:</strong> ${data.service}</p>
//       <p><strong>Message:</strong></p>
//       <p>${data.message}</p>
//     `,
//   });
// }

// Placeholder export (remove when implementing above)
export async function sendContactEmail(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  console.log('Email would be sent:', data);
  return { success: true };
}
