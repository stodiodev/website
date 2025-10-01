import { define } from "@/lib/utils.ts";
import { AwardIcon, ComponentIcon, ExternalLinkIcon, PaintbrushVerticalIcon, PhoneIcon, ShieldCheckIcon, GithubIcon } from "lucide-preact";
import Head from "../components/head.tsx";

export const prerender = true;

export default define.page(function Home() {
	return (
		<>
			<Head />
			<div class="h-96 flex flex-col justify-center gap-2 container">
				<h1
					class="text-5xl md:text-7xl font-black"
				>
					Stodioul creativ pentru totul web.
				</h1>
				<div class="flex flex-row gap-2">
					<a
						href="/contact"
						class="btn btn-primary"
					>
						<PhoneIcon/>
						Hai sa vorbim
					</a>
					<a
						href="/about"
						class="btn btn-accent"
					>
						Mai multe
					</a>
				</div>
			</div>

			<div class="wave-box py-32 bg-primary">
					<div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
						<div class="card bg-base-100">
							<div class="card-body">
								<h2 class="card-title">
									<ComponentIcon/>
									Design
								</h2>
								<p>
									Folosind principii standarde de design
									și experiență utilizatorului, creăm experiențe digitale
									care îmbunătățesc vizibilitatea și conversia.
								</p>
							</div>
						</div>

						<div class="card bg-base-100">
							<div class="card-body">
								<h2 class="card-title">
									<ShieldCheckIcon/>
									Securitate
								</h2>
								<p>
									Securitatea este una dintre cele mai importante aspecte,
									vom asigura securitatea site-ului tau prin audite de securitate,
									scanari frecvente si actualizari.
								</p>
							</div>
						</div>

						<div class="card bg-base-100">
							<div class="card-body">
								<h2 class="card-title">
									<PaintbrushVerticalIcon/>
									Customizare
								</h2>
								<p>
									Prin dashboard-ul oferit de noi, puteti actualiza continutul site-ului
									si adauga diferite elemente pe pagina dupa cum doriti.
								</p>
							</div>
						</div>

						<div class="card bg-base-100">
							<div class="card-body">
								<h2 class="card-title">
									<AwardIcon/>
									Preturi
								</h2>
								<p>
									Datorita arhitecturii noastre eficiente, putem oferi preturi competitive.
									Noi nu compromitem calitatea pentru a reduce costurile.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="container mt-16 text-center flex flex-col items-center justify-center gap-4">
						<p class="text-base-content/75">
							Codul nostru este verificat zilnic folosind
						</p>
						<p class="flex flex-row justify-center items-center gap-1 text-5xl sm:text-6xl md:text-7xl">
							<GithubIcon
								class="w-16 h-16"
							/>
							CodeQL
						</p>
						<a
							href="https://codeql.github.com"
							class="btn btn-outline decoration-dashed underline mt-4"
							target="_blank"
						>
							<ExternalLinkIcon/>
							Afla mai multe
						</a>
					</div>
		</>
	);
});
