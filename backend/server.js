const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// Website status
app.get("/api/status", (req, res) => {
    res.json({
        name: "Nexa",
        status: "online",
        version: "2.0",
        message: "Welcome to Nexa API"
    });
});

// Services
app.get("/api/services", (req, res) => {
    res.json([
        "Artificial Intelligence",
        "Website Development",
        "Software Development",
        "Mobile App Development",
        "Cybersecurity",
        "Cloud Solutions",
        "IT Consulting"
    ]);
});

// Quote request
app.post("/api/quote", (req, res) => {

    const quote = req.body;

    console.log("New Quote Request:");
    console.log(quote);

    res.json({
        success: true,
        message: "Quote request received successfully."
    });

});
app.get("/api/dashboard", (req, res) => {
    res.json({
        quoteRequests: 0,
        clients: 0,
        projects: 0,
        api: "Online"
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Nexa API running on port ${PORT}`);
});
