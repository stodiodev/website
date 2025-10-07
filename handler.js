export default {
	fetch: await import("./_fresh/server.js").then(mod => mod.default.fetch)
}