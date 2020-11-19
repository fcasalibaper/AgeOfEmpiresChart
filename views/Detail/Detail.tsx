import { useSessionStorageString } from 'react-use-window-sessionstorage';
import { Layout } from '~/common/Layout/Layout';
import { NoData } from '~/common/NoData/NoData';
import { useRouter } from 'next/router';
import { DetailStyled } from './Detail.styled';
import { Grid } from '@styles/grid.styled';
import { ButtonStyled } from '@styles/general.styles';
import { Bread } from '~/common/Bread/Bread';

type DetailProps = {
	api : object[],
	civilization : [{
		id: number,
		name: string,
		army_type: string,
		civilization_bonus: [],
	}]
}

const Detail = (api : DetailProps) => {
	const router = useRouter();
	const defaultValue = '';
	const [fav, setFav] = useSessionStorageString('selectedCivilization', defaultValue);
	const favChecked = fav !== null && fav;
	const { civilization } = api;

	const handleSelection = (selected) => {
		setFav(selected);
		router.push(`/`);
	}

	return civilization ? (
		<Layout>
			<Bread href={"/"} />
			{
				civilization.map(item => {
					return (
						<DetailStyled
							key={item.id}
							colSize={12}
							direction={'column'}
							padd={"30px 0"}
						>
							<header>
								<h1>
									Civilization: <strong>{item.name}</strong><br/>
									<small>
											Type of Army: {item.army_type}
									</small>
								</h1>
							</header>

							<h2>Bonus:</h2>
							<Grid
								as={"ul"}
								colSize={12}
								direction={'column'}
							>
								{item.civilization_bonus && item.civilization_bonus.map(bonus => <li key={bonus}>{bonus}</li>)}
							</Grid>

							<ButtonStyled disabled={favChecked == item.name} onClick={() => handleSelection(item.name)}>Select Civilization {item.name}</ButtonStyled>
						</DetailStyled>
					)
				})
			}
		</Layout>
	) : NoData
}

export default Detail;
