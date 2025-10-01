import { define } from "@/lib/utils.ts";
import Footer from "@/components/footer.tsx";
import Navbar from "@/components/navbar.tsx";

export default define.layout(({ Component }) => {
	return (
		<body class="flex flex-col">
			<Navbar/>
			<main class="flex-1">
				<Component/>
			</main>
			<Footer/>
		</body>
	)
})
