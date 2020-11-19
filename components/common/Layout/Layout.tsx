import { Fragment, ReactNode } from 'react'
import { Grid } from '@styles/grid.styled'
import { useSessionStorageString } from 'react-use-window-sessionstorage';
import { Container } from '@styles/general.styles';
import { Header } from '~/Header/Header';

type LayoutProps = {
	children: ReactNode
}

export const Layout = ({children} : LayoutProps) => {
	const [fav] = useSessionStorageString('selectedCivilization');
	const favChecked = fav !== null && fav;

	return (
		<Fragment>
			<Header fav={favChecked} />
			<Grid as={'section'} direction={'column'}>
				<Container wrap={'true'}>
					{children}
				</Container>
			</Grid>
		</Fragment>
	)
}
