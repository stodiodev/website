import { define } from "@/lib/utils.ts";

export default define.page(function App({ Component }) {
	return (
		<html lang="ro" class="bg-primary">
			<head>
				<meta charset="utf-8" />
				<link rel="icon" type="image/svg+xml" href="/logo.svg" />
				<meta name="viewport" content="width=device-width" />
			</head>
			<Component />
		</html>
	);
});
