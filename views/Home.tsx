import { Grid } from '@styles/grid.styled';
import { Card } from '~/Card/Card';
import { useSessionStorageString } from 'react-use-window-sessionstorage';
import { Layout } from '~/common/Layout/Layout';
import { NoData } from '~/common/NoData/NoData';

type HomeProps = {
	api : object[],
	civilizations : [{
		id: number,
		name: string,
		army_type: string,
		civilization_bonus: [],
	}]
}

const Home = (api :  HomeProps) => {
	const { civilizations } = api;
	const [fav] = useSessionStorageString('selectedCivilization');
	const favChecked = fav !== null && fav;
	
	return civilizations ? (
		<Layout>
			<Grid as="ul"
				colSize={12}
				wrap={"true"}
				padd={'30px 0'}
			>
				{
					civilizations.map(item => {
						return (
							<Card
								key={item.id}
								title={item.name}
								bonus={item.civilization_bonus}
								link={item.name}
								selected={favChecked}
							/>
						)
					})
				}
			</Grid>
		</Layout>
	) : NoData
}

export default Home;
