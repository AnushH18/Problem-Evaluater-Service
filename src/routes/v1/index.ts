import express from "express";
import { pingCheck } from "../../controllers/pingController";

const v1route = express.Router();

v1route.get('/', pingCheck);

export default v1route;