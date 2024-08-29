import { prisma } from "../app";
import { FulfilmentType } from "../types";

export class OrderService {
	constructor() {}

	/**
	 * Fetch all orders
	 *
	 * @returns {Promise<FulfilmentType[]>} - returns normalized orders for the FE.
	 * @throws {Error} throw an error when encountered
	 */
	async fetchFulfilmentOrders(): Promise<FulfilmentType[]> {
		try {
			const orders = await prisma.order.findMany({
				select: {
					id: true,
					status: {
						select: {
							status: true,
						},
					},
					account: {
						select: {
							name: true,
						},
					},
				},
			});

			let normalizedResp = orders.map((order) => {
				return {
					id: order.id,
					name: order.account.name ?? "",
					status: order.status?.status ?? "",
				};
			});


			return normalizedResp;
		} catch (err) {
			// ? for the sake of simplicity

			// ? I didn't create a logger
			// ? A better error handling approach should also include checks likely prisma error codes
			// ? docs: https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors
			console.log(err);
			throw new Error("error retrieving orders");
		}
	}
}
