import express from 'express';
import router from './routes/route.js';
import DBConnection from './database/database.js';
import cors from 'cors';

DBConnection();
const app = express();

app.use(cors());



app.use("/", router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});