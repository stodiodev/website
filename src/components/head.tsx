import { Head as HeadFresh } from "fresh/runtime";

interface HeadProps {
	title?: string;
}

export default function Head(props: HeadProps) {
	return (
		<HeadFresh>
			<title>
				{props.title ? `${props.title} · ` : null}
				STOODIO
			</title>
		</HeadFresh>
	)
}
