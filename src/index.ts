import express from 'express';
console.log("before")
import router from './routes/router.js';
console.log("After")
const app = express();
app.use(express.json())
console.log(router);
app.use('/',router)
const PORT = 5000;
try {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err);
  }