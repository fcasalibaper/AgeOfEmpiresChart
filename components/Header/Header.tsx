import Image from 'next/image'
import { HeaderStyled } from './Header.styled'
import { Container } from '@styles/general.styles';
// import ageLogo from '@static/ageOfEmpireLogo.png';

type HeaderProps = {
	fav: string | boolean
}



export const Header = ({fav} : HeaderProps) => {
	return (
		<HeaderStyled as="header" colSize={12}>
			<Container
				justifyContent={'space-between'}
				alignCenter={'center'}
			>
				<figure>
					<Image
						src="/static/ageOfEmpireLogo.png"
						alt="Age Of Emppires Chart"
						layout="responsive"
						width={530}
						height={262}
					/>
				</figure>
				{fav && <span>
					Your Favorite civilization is:<br />
					<strong>{fav}</strong>
				</span>}
			</Container>
		</HeaderStyled>
	)
}
