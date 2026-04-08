const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Contact form API
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact:");
    console.log(name, email, message);

    res.json({ success: true, message: "Message received!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});