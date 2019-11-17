/**
 * Telnyx inbound SMS delivery for Telegram
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const fetch = require('node-fetch');
const {
  TELEGRAM_BOT_ID,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID
} = process.env;

const sendMessage = async (payload) => {
  try {
    return await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_ID}:${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `From: ${payload.from.phone_number}\nTo: ${payload.to}\n${payload.text}`
        })
      }
    );
  } catch (err) {
    console.log('Fetch error occurred', err.message);
  }
}

// CloudFunction Handler
exports.handler = async (req, res) => {
  const {body: {data: {payload}}} = req;
  try {
    const {status} = await sendMessage(payload);
    res.status(status).send(status);
    res.end();
  } catch(err) {
    console.log(err);
    return new Error('Handler error', err.message);
  }
};
