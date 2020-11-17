import { NextPage } from 'next';
import ErrorPage from '~/ErrorPage/ErrorPage';

type ErrorProps = {
	statusCode?: any
}

const Error : NextPage<ErrorProps> = ({ statusCode }) => {
	return  (
		<ErrorPage status={statusCode} />
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
}

export default Error;