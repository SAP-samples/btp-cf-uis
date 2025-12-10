import express from "express";

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello from the backend!');
});

router.get('/error', () => {
    throw new Error('This ajax call sends an error to your Logs in BTP Cloud Foundry');
});

export default router;