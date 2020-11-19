import { Grid } from '@styles/grid.styled'
import { CardStyled } from '~/Card/Card.styled'
import Link from 'next/link'

type CardProps = {
	title: string,
	bonus? : [] | undefined,
	link : string,
	selected? : string | false
}

export const Card = ({
	title,
	bonus,
	link,
	selected
} : CardProps) => {

	return (
		<Grid
			as={'li'}
			colSizeXS={12}
			colSizeSM={6}
			colSizeMD={4}
			padd={'1rem'}
		>
			<Link
				href={`detail/[item]`}
				as={`detail/${link}`}
			>
				<a style={{width: '100%'}}>
					<CardStyled
						colSize={12}
						padd={'2rem'}
						direction={"column"}
						selected={selected === title && true}
					>
						<header>
							<h2>{title}</h2>
						</header>

						{bonus && <footer>
							<h3>Bonus civilization:</h3>
							<Grid
								as={"ul"}
								colSize={12}
								direction={"column"}
							>
								{bonus.map(bonusItem => <li key={bonusItem}><h4>{bonusItem}</h4></li>)}
							</Grid>
						</footer>}
					</CardStyled>
				</a>
			</Link>
		</Grid>
	)
}
