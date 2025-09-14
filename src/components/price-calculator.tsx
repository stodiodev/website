import { useMemo, useState } from "react";

export function PriceCalculator() {
	const [editor, setEditor] = useState(false);
	const [analytics, setAnalytics] = useState(false);
	const [hosting, setHosting] = useState(false);
	const [domain, setDomain] = useState(false);
	const [securityUpdates, setSecurityUpdates] = useState(false);
	const [pages, setPages] = useState(3);


	const oneTimePrice = useMemo(() => {
		const basePrice = 50;
		const pagePrice = 10;

		const total = basePrice + pagePrice * pages;

		return total;
	}, [editor, analytics, hosting, securityUpdates, pages]);

	const monthlyPrice = useMemo(() => {
		const editorPrice = editor ? 10 : 0;
		const analyticsPrice = analytics ? 5 : 0;
		const hostingPrice = hosting ? 10 : 0;
		const domainPrice = domain ? 2 : 0;
		const securityUpdatesPrice = securityUpdates ? 5 : 0;

		const total =
			editorPrice +
			analyticsPrice +
			hostingPrice +
			domainPrice +
			securityUpdatesPrice;

		return total;
	}, [editor, analytics, hosting, domain, securityUpdates]);

	return (
		<div
			className="card"
		>
			<div className="card-body">
				<fieldset
					className="fieldset"
				>
					<label className="label max-w-min">
						<input type="checkbox" className="checkbox" checked={editor} onChange={() => setEditor(!editor)} />
						<b>Editor de continut</b>
					</label>

					<label className="label">
						<input type="checkbox" className="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} />
						<b>Analitica</b>
					</label>

					<label className="label">
						<input type="checkbox" className="checkbox" checked={hosting} onChange={() => setHosting(!hosting)} />
						<b>Hosting</b>
					</label>

					<label className="label">
						<input type="checkbox" className="checkbox" checked={domain} onChange={() => setDomain(!domain)} />
						<b>Cumparare + configurare domeniu</b>
					</label>

					<label className="label">
						<input type="checkbox" className="checkbox" checked={securityUpdates} onChange={() => setSecurityUpdates(!securityUpdates)} />
						<b>Actualizari de securitate</b>
					</label>

					<label className="label">Numar de pagini</label>
					<input
						type="number"
						className="input validator"
						placeholder="Nr. pagini"
						defaultValue={pages}
						onChange={(e) => setPages(Number(e.target.value))}
						min={1}
						max={10}
						required
					/>
					<p className="validator-hint">Introduceti un numar intre 1 si 10</p>

					<p
						className="text-5xl font-bold"
					>
						{oneTimePrice}&euro;
					</p>

					{monthlyPrice ?
						<>
							<p>
								si dupa
							</p>
							<p
								className="text-5xl font-bold"
							>
								{monthlyPrice}&euro;/luna
							</p>
						</>
					: null}
				</fieldset>
			</div>
		</div>
	)
}
