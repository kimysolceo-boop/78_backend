import express from 'express';

const app = express();
    
app.use(express.json());

// тестовый метод для проверки работоспособности сервера
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});