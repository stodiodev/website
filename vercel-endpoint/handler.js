/**
 * @param {import("@vercel/node").VercelRequest} req - The incoming request object.
 * @returns {Promise<import("@vercel/node").VercelResponse>} - The response from the Fresh server.
 */
export default async function handler(req) {
	const server = await import("../_fresh/server.js");

	return server.default.fetch(req);
};
