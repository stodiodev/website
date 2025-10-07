#!/usr/bin/env DENO_DIR=/tmp deno run --version v2.5.3

export default {
	fetch: await import("../_fresh/server.js").then(mod => mod.default.fetch)
}