import type { AppProps} from 'next/app';
import MyHead from "./_head";
import { Fragment } from "react";
import { GlobalStyle } from "@styles/global.styles";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInScreen, fadeInScreenMobile } from '@styles/variablesMotion';
import useMatchMedia from 'react-use-match-media';
import { pxs } from '@styles/breakpoints.styled';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	const width = pxs['sm'] + 1;
	const matchMeedia = useMatchMedia("(min-width: "+ width +"px)");
	return (
		<Fragment>
      <MyHead />
			<GlobalStyle />
			<AnimatePresence
				exitBeforeEnter
				style={{height: '100%'}}
			>
				<motion.div
					style={{height: '100%', width: '100%'}}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={ matchMeedia ? fadeInScreen : fadeInScreenMobile }
					key={`motionPresnce-${router.route}`}
					>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
			{/* <ToolResponsive position={'bottomLeft'} /> */}
    </Fragment>
  )
}

export default MyApp