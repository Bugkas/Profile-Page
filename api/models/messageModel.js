const pool = require('../config/db');

const Message = {
  /**
   * Initializes the 'messages' table if it does not exist in the database.
   */
  initTable: async () => {
    const queryText = `
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    try {
      await pool.query(queryText);
      console.log('✅ "messages" table is verified/created in PostgreSQL');
    } catch (error) {
      console.error('❌ Failed to initialize "messages" table:', error.message);
    }
  },

  /**
   * Inserts a new contact submission into the database.
   * @param {Object} messageData
   * @param {string} messageData.name
   * @param {string} messageData.email
   * @param {string} messageData.subject
   * @param {string} messageData.message
   */
  create: async ({ name, email, subject, message }) => {
    const queryText = `
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, subject, message];
    const res = await pool.query(queryText, values);
    return res.rows[0];
  },

  /**
   * Retrieves all messages ordered by creation date.
   */
  getAll: async () => {
    const queryText = 'SELECT * FROM messages ORDER BY created_at DESC;';
    const res = await pool.query(queryText);
    return res.rows;
  }
};

module.exports = Message;
