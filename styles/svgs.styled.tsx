import styled, { css } from "styled-components";
import { COLOR_BLUE, COLOR_GREYLIGHT } from "./variables.styled";
import LogoFoot from "./../static/svgs/logo-paseguros-footer.svg";
import LogoH from "@static/svgs/logo-paseguros-bici.svg";
import LogoB from "@static/svgs/logoPasegurosBici.svg";
import LogoIn from "@static/svgs/insta.svg";
import LogoF from "@static/svgs/fb.svg";
// import Ilustracion from '@static/svgs/ilustracion.svg';
import BlueBG from '@static/svgs/blueSide.svg';
import NextArrow from '@static/svgs/slide-right.svg';
import PrevArrow from '@static/svgs/slide-left.svg';
import Robo from '@static/svgs/icn-robo.svg';
import Incendio from '@static/svgs/icn-incendio.svg';
import IncendioCasa from '@static/svgs/icn-incendio-casa.svg';
import Plomeria from '@static/svgs/icn-plomeria.svg';
import Asistencia24Hs from '@static/svgs/icn-asistencia-24-hs.svg';
import Asistencia from '@static/svgs/icn-asistencia.svg';
import Check from '@static/svgs/check.svg';
import BackArrow from '@static/svgs/arrow-back.svg';
import { media } from './breakpoints.styled';
import Close from '@static/svgs/icn-close.svg';
import Couch from '@static/svgs/couch.svg';
import LeftTop from '@static/svgs/leftTop.svg';
import RightTop from '@static/svgs/rightTop.svg';
import RightBottom from '@static/svgs/rightBottom.svg';
import Calificacion from '@static/svgs/icnCalificacion-01.svg';
import CaucionGarantia from '@static/svgs/icnCaucionGarantia-01.svg';
import Documentacion from '@static/svgs/icnDocumentacion-01.svg';
import FinContrato from '@static/svgs/icnFinContrato-01.svg';
import PagoCuotas from '@static/svgs/icnPagoCuotas-01.svg';
import PlazosDeEntrega from '@static/svgs/icnPlazosEntrega.svg';
import Done from '@static/svgs/done.svg';
// import ImgSlider from '@static/svgs/icono-steps.svg';

const ArrowCSS = css`
	width: 100%;
	max-width: 79px;
	fill: ${({theme}) => theme.slider.colors.arrows};

	${media.greaterThan('sm')`
		max-width: 64px;
	`};
`;

export const NextArrowStyled = styled(NextArrow)`
	${ArrowCSS}
`;

export const CloseStyled = styled(Close)`
	width: 20px;
	height: 20px;
	z-index: 9;
`;

export const PrevArrowStyled = styled(PrevArrow)`
	${ArrowCSS}
`;

export const BackArrowStyled = styled(BackArrow)`
	max-width: 21px;
	height: 16px;
	cursor: pointer;
	z-index: 9;

	${media.greaterThan &&`
		max-width: 25px;
	`};
`;

export const ImgSliderStyled = styled.img`
	max-width: 400px;
	width: 100%;
	/* height: 100%; */
	align-self: center;
	z-index: 1;

	${media.lessThan('sm')`
		position: absolute;
		top: -300px;
		width: 142vw;
		max-width: 200vw;
	`}
`;

export const CloseStyles = styled.svg`
	position: relative;
	width:40px;
	margin-bottom: .7rem;
	fill: rgba(${COLOR_GREYLIGHT}, .5);
`;

export const LogoHead = styled(LogoH)`
	position: relative;
	width:100%;
	max-width: 255px;
	.st0{
		fill:#FFFFFF; fill-opacity: 1;
		&:nth-child(2) {
			fill: #ffffff;
		}
	}
	.st1{fill: ${COLOR_BLUE};}
	.st2{fill:#ffffff}
	.st3{
		fill:${COLOR_BLUE};
		&:nth-child(2) {
			fill:${COLOR_BLUE};
		} 
	}
	.st4{fill: red; opacity: 1;}
	.st5{mask:url(#b1zkdovsld);fill:${COLOR_BLUE};}
	.st6{filter:url(#Adobe_OpacityMaskFilter_2_);}
	.st7{mask:url(#fng7wl40pf);fill:${COLOR_BLUE};}
	.st8{fill:#FFFFFF;fill-opacity:0.7;}
	
`;
export const LogoInvert = styled(LogoB)`
	position: relative;
	width: 100%;
	max-width: 148px;
`;
export const LogoFooter = styled(LogoFoot)`
	position: relative;
	width:100%;
	max-width: 200px;
	path:nth-child(2) {
		fill : ${({theme}) => theme.footer.colorSpan};
	}
`;

export const LogoInsta = styled(LogoIn)`
	position: relative;
	width:100%;
	max-width: 30px;
`;
export const LogoFb = styled(LogoF)`
	position: relative;
	width:100%;
	max-width: 30px;
`;

// export const Ilus = styled(Ilustracion)`
// 	position: relative;
// 	width: 100%;

// 	g:nth-child(2) > use:nth-child(2) {
// 		fill: ${({theme}) => theme.icons.check};
// 	}
// `;

export const BlueBGStyled = styled(BlueBG)`
	position: absolute;
	/* width: 60%; */
	height: calc(100% + 59px );
	top: -59px;
	right: 0;
	z-index: 0;

	${media.lessThan("md")`
		display: none;
	`}
`;

export const CheckStyled = styled(Check)`
	width: 20px;
  height: 20px;
`;

// FEATURES
const commonCSS = css`
	max-width: 100%;
`;
export const RoboStyled = styled(Robo)`
	${commonCSS};
	
`;
export const IncendioStyled = styled(Incendio)`
	${commonCSS};
`;
export const IncendioCasaStyled = styled(IncendioCasa)`
	${commonCSS};
`;
export const PlomeriaStyled = styled(Plomeria)`
	${commonCSS};
`;
export const Asistencia24HsStyled = styled(Asistencia24Hs)`
	${commonCSS};
`;
export const AsistenciaStyled = styled(Asistencia)`
	${commonCSS};
`;

export const PlazosDeEntregaStyled = styled(PlazosDeEntrega)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;
export const CalificacionStyled = styled(Calificacion)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;
export const DocumentacionStyled = styled(Documentacion)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;
export const CaucionGarantiaStyled = styled(CaucionGarantia)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;
export const PagoCuotasStyled = styled(PagoCuotas)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;
export const FinContratoStyled = styled(FinContrato)`
	${commonCSS};
	path {
		fill: ${({theme}) => theme.icons.check};
	}
`;


// ALQUILERES
export const CouchStyled = styled(Couch)`
	max-width: 624px;
`;

export const LeftTopStyled = styled(LeftTop)`
	position: absolute;
	top:0;
	left: 0;

	path {
		fill: ${({theme}) => theme.slider.colors.background};
	}
`;
export const RightTopStyled = styled(RightTop)`
	position: absolute;
	top:0;
	right: 0;
	fill: ${({theme}) => theme.slider.colors.background};
	path {
		${media.greaterThan('sm')`
			fill: ${({theme}) => theme.icons.check};
		`}
	}
`;
export const RightBottomStyled = styled(RightBottom)`
	position: absolute;
	bottom:0;
	right: 0;

	path {
		fill: ${({theme}) => theme.slider.colors.background};
	}
`;

export const DoneStyled = styled(Done)`
`;