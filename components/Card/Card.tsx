import { useState } from 'react';
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
	const [ isSubmitted, setSubmitted ] = useState<boolean>(false);
	
	return (
		<Grid
			as={'li'}
			colSizeXS={12}
			colSizeSM={6}
			colSizeMD={4}
			padd={'1rem'}
		>
			<Link
				href={`/[section]/[item]`}
				as={`/detail/${link}`}
				// disabled={isSubmitted}
			>
				<a style={{width: '100%'}} onClick={() => setSubmitted(true)}>
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
