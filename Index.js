const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

// this will send the GET request to   http://localhost:8080/tshirt
app.get("/tshirt", (req, res) => {
    console.log("GET request sent to http://localhost:8080/tshirt");
    res.status(200).send({
        tshirt: "Model001",
        size: "large",
        color: "navy blue",
    });
});

// POST request to get a specific tshirt through its ID (:id is let's say a placeholder)
app.post("/tshirt/:id", (req, res) => {
    // to destructure // to extract the info we need
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: "We need a logo." });
    }

    res.send({
        tshirt: `Here you have this Thist with your ${logo} and the ID of ${id}`,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
