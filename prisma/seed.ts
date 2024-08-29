import { prisma } from "../src/app";

async function main() {
	// Create some statuses
	const statuses = await prisma.status.createMany({
		data: [
			{ status: "Pending" },
			{ status: "Processing" },
			{ status: "Shipped" },
			{ status: "Delivered" },
			{ status: "Cancelled" },
		],
	});

	console.log(`Created ${statuses.count} statuses`);

	// Create some accounts
	const account1 = await prisma.account.create({
		data: {
			name: "Alice",
			email: "alice@crypto.com",
		},
	});
	const account2 = await prisma.account.create({
		data: {
			name: "Bob",
			email: "bob@crypto.com",
		},
	});

	await prisma.account.create({
		data: {
			name: "John Doe",
			email: "john@example.com",
		},
	});

	await prisma.account.create({
		data: {
			name: "Jane Smith",
			email: "jane@example.com",
		},
	});

	console.log(`Created accounts: ${account1.name}, ${account2.name}`);

	// Create some orders for the accounts
	await prisma.order.createMany({
		data: [
			{
				account_id: account1.id,
				status_id: 1, // Pending
			},
			{
				account_id: account1.id,
				status_id: 2, // Processing
			},
			{
				account_id: account2.id,
				status_id: 3, // Shipped
			},
			{
				account_id: account2.id,
				status_id: 4, // Delivered
			},
		],
	});

	console.log("Created orders for the accounts");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
