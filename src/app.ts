import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Express, Request } from "express";
import morgan from "morgan";

import { OrderService } from "./services/orderService";

export const prisma = new PrismaClient();
export const orderService = new OrderService();

import { orderRoute } from "./routes/orderRoute";

const app: Express = express();

app.use(morgan(":method :url :status :response-time ms"));

app.use(cors<Request>());

app.use(express.json());

app.get("/", (_req, res) => {
	return res.status(200).json({
		uptime: process.uptime(),
		message: "Daijōbu (大丈夫)!", // "Daijōbu" means "OK" or "It's fine" in Japanese
		timestamp: Date.now(),
	});
});

app.use("/v1/orders", orderRoute);

export default app;
