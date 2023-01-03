import { hydrate, prerender as ssr } from 'preact-iso';
import { useState } from 'preact/hooks';

export function App() {
	const [clickItems, setClickItems] = useState([]);
	const getRandomColor = (rgbOffset, rgbRange) => {
		return (
			'rgba(' +
			(Math.floor(Math.random() * rgbRange) + rgbOffset) +
			',' +
			(Math.floor(Math.random() * rgbRange) + rgbOffset) +
			',' +
			(Math.floor(Math.random() * rgbRange) + rgbOffset) +
			',1)'
		);
	};

	return (
		<>
			<div class="click-count">{clickItems.length}</div>
			<div
				class="clicker"
				onClick={(ev) =>
					setClickItems((clickItems) => [
						...clickItems,
						{ x: ev.clientX, y: ev.clientY, color: getRandomColor(80, 136) },
					])
				}
			></div>
			{clickItems.map((item, index) => {
				return (
					<div
						class="click-item"
						style={{
							top: `${item.y}px`,
							left: `${item.x}px`,
							backgroundColor: item.color,
						}}
					>
						{index}
					</div>
				);
			})}
		</>
	);
}

hydrate(<App />);

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
