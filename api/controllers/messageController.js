const Message = require('../models/messageModel');
const { sendNotificationEmail } = require('../config/mailer');

const messageController = {
  /**
   * POST /api/messages
   * Validates contact form fields, saves the message in PostgreSQL, and sends email notification.
   */
  createMessage: async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate inputs
      if (!name || !name.trim()) {
        return res.status(400).json({ success: false, error: 'Name is required' });
      }
      if (!email || !email.trim() || !email.includes('@')) {
        return res.status(400).json({ success: false, error: 'A valid email is required' });
      }
      if (!message || !message.trim()) {
        return res.status(400).json({ success: false, error: 'Message content is required' });
      }

      // Save to database
      const dbResult = await Message.create({
        name: name.trim(),
        email: email.trim(),
        subject: subject ? subject.trim() : 'No Subject',
        message: message.trim()
      });

      // Send email alert asynchronously
      const emailStatus = await sendNotificationEmail({
        name: dbResult.name,
        email: dbResult.email,
        subject: dbResult.subject,
        message: dbResult.message
      });

      return res.status(201).json({
        success: true,
        message: 'Message received and saved successfully!',
        data: {
          id: dbResult.id,
          name: dbResult.name,
          email: dbResult.email,
          subject: dbResult.subject,
          created_at: dbResult.created_at
        },
        emailSent: emailStatus.success
      });

    } catch (error) {
      console.error('❌ Controller error in createMessage:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error. Could not save message.'
      });
    }
  },

  /**
   * GET /api/messages
   * Admin utility to inspect messages.
   */
  getMessages: async (req, res) => {
    try {
      // Basic Authorization Check (optional, can check for a header/secret key)
      const authHeader = req.headers['x-admin-key'];
      if (!authHeader || authHeader !== process.env.RESEND_API_KEY) {
        return res.status(403).json({ success: false, error: 'Unauthorized access' });
      }

      const messages = await Message.getAll();
      return res.status(200).json({ success: true, data: messages });
    } catch (error) {
      console.error('❌ Controller error in getMessages:', error);
      return res.status(500).json({ success: false, error: 'Failed to retrieve messages' });
    }
  }
};

module.exports = messageController;
