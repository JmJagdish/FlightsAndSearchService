const express = require("express");
const { PORT } = require("./config/serverConfig");

const SetupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.get('/',(req,res) =>{
        res.send("Server is running Successfully 🚀");
    })

    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
}

SetupAndStartServer();