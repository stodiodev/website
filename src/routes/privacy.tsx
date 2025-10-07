import { render } from "@deno/gfm";
import { define } from "@/lib/utils.ts";
import Head from "@/components/head.tsx";

export const prerender = false;

export default define.page(async function Privacy() {
	const content = await Deno.readTextFile("./PRIVACY.md");
	const html = render(content);

	return (
		<>
			<Head
				title="Confidentialitate"
			/>
			<div dangerouslySetInnerHTML={{ __html: html }} class="!container prose prose-neutral lg:prose-lg my-4"/>
		</>
	)
})
