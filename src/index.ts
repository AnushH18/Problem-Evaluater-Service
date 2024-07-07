import express, {Express} from "express";

import serverConfig from "./config/serverConfig";
import apiRoutes from "./routes";
import SampleJobProducer from "./producers/SampleJobProducer";

import sampleWorker from "./workers/SampleWorker";

const app : Express = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT , ()=>{
    console.log(`Server started in port ${serverConfig.PORT} `);
    
    sampleWorker('SampleQueue');

    SampleJobProducer('SampleJob', {
        name : "Anush",
    },1);
});