import { Request, Response } from "express";
import { orderService } from "../app";

/**
 * Get All orders
 *
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @returns {Promise<void>}
 */
export async function fetchAllOrders(
	req: Request,
	res: Response
): Promise<void> {
	try {
		let resp = await orderService.fetchFulfilmentOrders();

		res.json(resp);
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
}
