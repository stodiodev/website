import { define } from "@/lib/utils.ts";
import Footer from "@/components/footer.tsx";
import Navbar from "@/components/navbar.tsx";
import { Partial } from "fresh/runtime";

export default define.layout(({ Component }) => {
	return (
		<body class="flex flex-col" f-client-nav>
			<Navbar/>
			<main class="flex-1">
				<Partial name="page-content">
					<Component/>
				</Partial>
			</main>
			<Footer/>
		</body>
	)
})
