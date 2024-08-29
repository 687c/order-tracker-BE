import http from "http";
import app from "./app";
import { PORT } from "./config";

const server = http.createServer(app);
server.setTimeout(60000); // Set timeout to 60 seconds (adjust as needed)

server.listen(PORT, () => {
	console.log(`⚡️[server]: Server is listening on port ${PORT}`);
});
