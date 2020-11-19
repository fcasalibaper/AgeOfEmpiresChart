import { Fragment } from 'react';
import { Layout } from '~/common/Layout/Layout';
import { NoData } from '~/common/NoData/NoData';
import { DetailStyled } from './../Detail/Detail.styled';
import { Grid } from '@styles/grid.styled';
import { Bread } from '~/common/Bread/Bread';
import Link from 'next/link';

type TechProps = {
	api : object[],
	tech : {
		id: number,
		name: string,
		description: string,
		age: string,
		cost: {
			Food: number,
			Gold: number
		},
	}
}

const Tech = (api : TechProps) => {
	const { tech } = api;

	return (
		<Layout>
			<Bread href={"/"} />
			{
				[tech].map(item => {
					return (
						<DetailStyled
							key={item.id}
							colSize={12}
							direction={'column'}
							padd={"30px 0"}
						>
							<header>
								<h1>
									Technology: <strong>{item.name}</strong><br/>
									<small>
											Description: {item.description}<br/>
											<em>Age: {item.age}</em>
									</small>
								</h1>
							</header>

							<h2>Technologies:</h2>
							<Grid
								as={"ul"}
								colSize={12}
								direction={'column'}
							>
								{item.cost && [item.cost].map(c => {
									return (
										<Fragment key={c.Food+c.Gold}>
											<li>Cost food: {c.Food}</li>
											<li>Cost gold: {c.Gold}</li>
										</Fragment>
									)
								})}
							</Grid>
						</DetailStyled>
					)
				})
			}
		</Layout>
	)
}

export default Tech;
