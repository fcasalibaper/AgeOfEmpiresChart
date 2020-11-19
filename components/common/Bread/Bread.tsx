import Link from 'next/link';
import { BreadStyled } from './Bread.styled';

type BreadProps = {
	href?: string,
	text?: string
}

export const Bread = ({ href = '/', text = '< back to home' } : BreadProps) => {
	return (
		<BreadStyled>
			<Link href={href}><a>{text}</a></Link>
		</BreadStyled>
	)
}
