import { Router } from "express";
import { fetchAllOrders } from "../controllers/orderController";

export const orderRoute = Router();

// fetch all orders
orderRoute.get("/", fetchAllOrders);
