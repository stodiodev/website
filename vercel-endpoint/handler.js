/**
 * @param {import("@vercel/node").VercelRequest} req - The incoming request object.
 * @returns {Promise<import("@vercel/node").VercelResponse>} - The response from the Fresh server.
 */
export default async function handler(req) {
	const server = await import("../_fresh/server.js");

	const url = new URL(req.url ?? '', `https://${req.headers.host}`);

	const standardRequest = new Request(url.toString(), {
		method: req.method,
		headers: new Headers(req.headers),
		body: ['GET', 'HEAD'].includes(req.method ?? '') ? undefined : JSON.stringify(req.body),
	});


	return server.default.fetch(standardRequest);
};
