# Simple REST API

### Features

#### Technologies used:

-   Node.js
-   Express

#### Dev tools used

-   Insomnia

### Instructions

#### Create basic server

1. In the terminal run:

```sh
npm init -y

npm install express
```

2. Create a file named "index.js". And fill it with the following:

```sh
const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is runnin on http://localhost:${PORT}`);
});

```

3. You can run the server by typing in the terminal:

```sh
node .
```

It all works ------

#### Add endpoint to the server

1. Let's add the endpoint POST. Between the consts and the server running code line. Add app.get .

```sh
app.get("/tshirt", (req, res) => {
    res.status(200).send({
        tshirt: "Model001",
        size: "large",
        color: "navy blue",
    });
});
```

-   to send a 200 ok message in the response. To send data.
-   IMPORTANT: Remember to restart your server every time you do changes in Index.js. If you don't want to do this every single time, then install NODEMON.

2. Use INSOMNIA to send the GET request to: "http://localhost:8080/tshirt"

-   You should get:

```sh
{
    tshirt: "Model001",
    size: "large",
    color: "navy blue",
}
```

3. Let's add a POST endpoint.

```sh
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
```

4. We need a body parser, because Express doesn't parse JSON in the body by default. We are going to build this middleware to tell Express to parse JSON before the actual data hits the function that handles the request.

-   Change the top of the code like this:

```sh
const express = require("express");
const app = express();
```

-   below everything on top, add the first middleware that will parse json. This has to be placed after the constants and BEFORE the middlewares or endpoints that will handle the resquest (app.get, app.post, app.delete, etc.)

```sh
app.use(express.json());
```

5. with INSOMNIA, hit the addres "http://localhost:8080/tshirt/23" with a POST request. Because it's a POST request, you have to set up the POST request with a JSON body like the following. \* \* Remember that the POST has to have the parameteres needed for the response, in this case is "logo" and "id".

```sh
{
    logo: "IMAGINARY-LOGO",
    id: "001"
}
```

-   If succesful, you will receive this:

```sh
{
    tshirt: `Here you have this Thist with your ${logo} and the ID of ${id}`,
}
```

### You can still add more stuff like

-   more middlewares for Delete and Patch
-   Remember to use next() to make the request pass to the middleware chain.
