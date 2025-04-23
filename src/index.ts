import express from 'express';
import router from './routes/router.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())
app.use('/',router)
const PORT = 5000;
try {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err);
  }