import { EarthIcon } from "lucide-preact";

export default function CarbonBadge() {
	const percentage = 0.95;
	const mark = "A+";
	
	return (
		<a 
			class="flex flex-row gap-2"
			href="https://www.websitecarbon.com/website/stodio.dev/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="This website's carbon footprint"
		>
			<span class="badge">
				<EarthIcon class="w-4 h-4"/>
				Cleaner than {percentage * 100}% of websites
			</span>
			<span class="badge">
				<b>{mark}</b>
				Carbon rating
			</span>
		</a>
	)
}