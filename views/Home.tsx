import Link from 'next/link';

const NoData = <span>No hay datos para mostrar</span>

const Home = (api) => {
	const { civilizations } = api;

	console.log('civilizations: ', civilizations)
	
	return civilizations ? (
		<ul>
			{
				civilizations.map(item => {
					return (
						<li key={item.id}>
							<header>
								<h2>{item.name}</h2>
							</header>
							<footer>
								<ul>
									{item.civilization_bonus.map(bonus => <li key={bonus}><h4>{bonus}</h4></li>)}
								</ul>
							</footer>
							<Link
								href={`detail/[item]`}
								as={`detail/${item.name}`}
							>
								<a>{item.name}</a>
							</Link>
						</li>
					)
				})
			}
		</ul>
	) : NoData
}

export default Home;
