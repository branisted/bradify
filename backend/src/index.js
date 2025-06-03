import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

const FRONTEND_PORT = process.env.FRONTEND_PORT;

app.use(cors({
    origin: `http://localhost:${FRONTEND_PORT}`, // or your frontend URL
    credentials: true
}));


const PORT = process.env.PORT; // or your preferred port

app.post('/api/spotify/token', async (req, res) => {
    const { code } = req.body;

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', process.env.REDIRECT_URI);

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(
                    process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
                ).toString('base64')
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.response?.data || error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});