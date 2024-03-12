const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.submitForm = functions.https.onRequest((req, res) => {
    // Pastikan menggunakan metode POST
    if (req.method !== 'POST') {
        res.status(400).send('Only POST requests are accepted');
        return;
    }

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Validasi data
    if (!name || !email || !message) {
        res.status(400).send('All fields are required');
        return;
    }

    // Misalnya, kita simpan data ke Firestore
    const db = admin.firestore();
    db.collection('submissions').add({
        name: name,
        email: email,
        message: message,
        submittedAt: admin.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        res.status(200).send('Form submitted successfully!');
    }).catch((error) => {
        console.error("Error writing document: ", error);
        res.status(500).send('Error submitting form');
    });
});
