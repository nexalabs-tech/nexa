const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api", (req, res) => {
    res.json({
        name: "Nexa",
        status: "online",
        version: "1.0"
    });
});

app.listen(PORT, () => {
    console.log(`Nexa running on port ${PORT}`);
});
