const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const schedule = require('node-schedule');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Vo dale CTM ✅');

    // Programar el mensaje diario a las 23:00 (11:00 PM)
    schedule.scheduleJob('00 23 * * *', function() { 
        client.sendMessage('56999881707@c.us', '♥.♥¡Buenas noches amor! 🌙 No olvides que te amo mucho, gracias por todo y tomate la pastilla. 🌙');
        console.log('📩 Mensaje enviado a las 23:00. 📩');
    });
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'hola') {
        msg.reply('¡Hola! 😎​');
    }
});

client.initialize();