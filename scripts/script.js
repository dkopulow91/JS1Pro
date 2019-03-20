const items = [
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
		];

		const renderItem = ({ name, price }) => `<div class='item'><h3>${name}</h3><span>${price}</span></div>`;
		const renderList = (items) => {
			const itemsHtml = items.map(renderItem);

			document.querySelector('.headerBacket').innerHTML = itemsHtml.join('');
		}

		renderList(items);