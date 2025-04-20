import express from 'express';
import router from './routes/router.js';

const app = express();
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