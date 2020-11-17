import Link from 'next/link';
import { Grid } from '@styles/grid.styled';
import { ErrorStyled } from "./ErrorPage.styled";
// import useMessage from './useMessage.hook';

type ErrorPageProps = {
	status?: string,
	link?: string,
}

const ErrorPage = ({ status, link } : ErrorPageProps ) => {
	//const [title, subtitle] = useMessage(status);
	
	return (
		<ErrorStyled
			colSize={12}
			xAlign={"center"}
			yAlign={"center"}
			style={{ height: '100vh' }}
		>	
			<Grid colSize={12} xAlign={"center"} yAlign={"center"} direction={"column"}>
				<h2>Error {status}</h2>
				{
					/*
						<FallbackMsg
							padd={'3px 0 30px 0'}
							textAlign="center"
							msg={title}
							subtitle={subtitle}
							fontSize={"18px"}
							fontSizeSubtitle={"18px"}
							color={"#000000"}
						/>
					*/
				}
				<Link href={link !== undefined ? link : "/"}>
					<a>Volver al listado</a>
				</Link>
			</Grid>
		</ErrorStyled>
	);
}

export default ErrorPage
