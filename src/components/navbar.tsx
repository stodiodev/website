import logo from "@/assets/logo.svg";

export default function Navbar() {
	return (
		<>
			<div class="h-16"></div>

			<nav
				class="bg-base-100 border-b-2 border-base-content p-2 fixed z-50 top-0 left-0 right-0 flex justify-between items-center"
			>
				<a
					href="/"
					class="bg-primary"
				>
					<img
						src={logo}
						class="w-auto h-10"
						alt="Home"
					/>
				</a>
				<a class="btn btn-accent" href="/contact">
					Contact
				</a>
			</nav>
		</>
	)
}
