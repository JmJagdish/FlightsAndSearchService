const express = require("express");
const { PORT } = require("./config/serverConfig");

const SetupAndStartServer = () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
}

SetupAndStartServer();