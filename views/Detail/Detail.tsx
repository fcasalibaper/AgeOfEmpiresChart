import { useSessionStorageString } from 'react-use-window-sessionstorage';
import { Layout } from '~/common/Layout/Layout';
import { NoData } from '~/common/NoData/NoData';
import { useRouter } from 'next/router';
import { DetailStyled } from './Detail.styled';
import { Grid } from '@styles/grid.styled';
import { ButtonStyled, UnderlineLink } from '@styles/general.styles';
import { Bread } from '~/common/Bread/Bread';
import Link from 'next/link';
import { Fragment } from 'react';

type DetailProps = {
	api : object[],
	civilization : [{
		id: number,
		name: string,
		army_type: string,
		civilization_bonus: string[], // Changed from []
		unique_tech: string[] // Changed from []
	}]
}

const Detail = (api : DetailProps) => {
	const router = useRouter();
	const defaultValue = '';
	const [fav, setFav] = useSessionStorageString('selectedCivilization', defaultValue);
	const favChecked = fav !== null && fav;
	const { civilization } = api;

	const handleSelection = (selected: string) => { // Added type string
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

								{(item.unique_tech && item.unique_tech.length > 0) && (
									<Fragment>
										<h2>Technologies:</h2>
										<Grid
											as={"ul"}
											colSize={12}
											direction={'column'}
											padd={'0 0 20px 0'}
										>
										{
											item.unique_tech.map(tech => {
												const parts = tech.split('/');
												const lastSegment = parts.pop() || parts.pop(); // Removed argument from pop()
												const finalSegment = lastSegment || ""; // Ensure it's a string
												const nameTech =  finalSegment.indexOf('_') > 0 ? finalSegment.replace(/_/g, ' ') : finalSegment;
												return (
													<Link
														key={tech}
														href={`/tech/[subIndex]`}
														as={`/tech/${finalSegment}`} // Use finalSegment
													><UnderlineLink as={'a'}>
														<li key={tech}>{nameTech}</li>
													</UnderlineLink>
													</Link>
												)
											})
										}
										</Grid>
									</Fragment>
								)}
							

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
