import type { AppProps} from 'next/app';
import MyHead from "./_head";
import { Fragment } from "react";
import { GlobalStyle } from "@styles/global.styles";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInScreen } from '@styles/variablesMotion';
// import ToolResponsive from '@help/ToolResponsive/ToolResponsive';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
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
					variants={ fadeInScreen }
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