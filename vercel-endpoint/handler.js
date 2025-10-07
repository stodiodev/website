export default async function handler(req) {
	const server = await import("../_fresh/server.js");
	server.default.fetch(req);
};
