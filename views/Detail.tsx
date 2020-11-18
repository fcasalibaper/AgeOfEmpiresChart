const NoData = <span>No hay datos para mostrar</span>

const Detail = (api) => {
	const { civilization } = api;
	console.log('detail: ', civilization)
	return civilization ? (
		<ul>
			{
				civilization.map(item => {
					return (
						<li key={item.id}>
							<header>
								<h1>
									{item.name}<br/>
									<small>
											Type of Army: {item.army_type}<br />
											Expansion: {item.expansion}
									</small>
								</h1>
							</header>

							{item.civilization_bonus && item.civilization_bonus.map(bonus => <div key={bonus}>{bonus}</div>)}
							<button>Seleccionar</button>
						</li>
					)
				})
			}
		</ul>
	) : NoData
}

export default Detail;
