import express, {Express} from "express";

import serverConfig from "./config/serverConfig";
import apiRoutes from "./routes";

const app : Express = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT , ()=>{
    console.log(`Server started in port ${serverConfig.PORT} `);
    
});