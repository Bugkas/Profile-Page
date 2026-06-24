const { Resend } = require('resend');
require('dotenv').config();

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

/**
 * Sends a notification email when a new message is received.
 * @param {Object} details - Message details
 * @param {string} details.name - Sender name
 * @param {string} details.email - Sender email
 * @param {string} details.subject - Subject line
 * @param {string} details.message - Message body
 */
const sendNotificationEmail = async ({ name, email, subject, message }) => {
  if (!resend) {
    console.warn('⚠️ Resend is not configured. Email notification skipped.');
    return { success: false, error: 'Resend API key missing' };
  }

  const recipient = process.env.NOTIFICATION_EMAIL || 'echotagacy0223@gmail.com';

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      subject: `📧 Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; color: #1a202c;">
          <h2 style="color: #4a5568; border-bottom: 2px solid #edf2f7; padding-bottom: 12px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #718096; width: 120px;">From:</td>
              <td style="padding: 8px 0; color: #2d3748;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #718096;">Email:</td>
              <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #718096;">Subject:</td>
              <td style="padding: 8px 0; color: #2d3748;">${subject || 'No Subject'}</td>
            </tr>
          </table>
          <div style="background-color: #f7fafc; border-radius: 6px; padding: 16px; border-left: 4px solid #3182ce; margin-top: 10px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #2d3748;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 24px 0;" />
          <p style="font-size: 11px; color: #a0aec0; margin: 0; text-align: center;">This notification was sent automatically from your Portfolio contact form.</p>
        </div>
      `
    });

    console.log('✅ Email notification sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Failed to send email notification:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendNotificationEmail };
