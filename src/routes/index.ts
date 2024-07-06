import express from "express";
import v1route from "./v1";

const apiRoutes = express.Router();

apiRoutes.use('/v1', v1route);

export default apiRoutes;