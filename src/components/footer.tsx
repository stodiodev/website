import Steps from "@/assets/layered-steps.svg";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<img
				class="w-full h-64"
				src={Steps}
				alt=""
			/>
			<footer
				class="bg-primary text-primary-content overflow-hidden"
			>
				<div class="container p-4">
					<p class="font-bold mb-2 text-lg">
						STOODIO &copy; {currentYear} Savin Angel-Mario
					</p>
					<div class="footer sm:footer-horizontal">
						<nav>
							<h6 class="footer-title">Legal</h6>
							<a href="/privacy" class="link link-hover">TESTConfidentialitate</a>
							<a href="/third-parties" class="link link-hover">TESTTerte cu care lucram</a>
						</nav>
						<nav>
							<h6 class="footer-title">Social</h6>
							<a href="https://instagram.com/stoodioro" class="link link-hover">TESTInstagram</a>
							<a href="https://facebook.com/stoodioro" class="link link-hover">TESTFacebook</a>
						</nav>
					</div>
				</div>
				<img
					src="logo.svg"
					class="w-full h-auto mb-[-15vw]"
					alt="STODIO"
				/>
			</footer>
		</>
	);
}
