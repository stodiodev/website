import CalEmbed from "@/components/islands/cal-embed.tsx";
import { define } from "@/lib/utils.ts";

export const prerender = false;

export default define.page(function Contact() {
	return (
		<div class="container mt-8">
			<h1 class="text-5xl md:text-7xl font-bold">
				Contact
			</h1>
			<CalEmbed/>
		</div>
	)
})
