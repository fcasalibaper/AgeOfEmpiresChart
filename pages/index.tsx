// import axios from 'axios';
// import getConfig from 'next/config';
// const { publicRuntimeConfig = {} } = getConfig() || {};

// Exporting Home
export { default } from "@views/Home";

// reciving data from api / variables
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const response = await axios.get('http://localhost:3000/api/bicicleta')
//   //   .then(res => res.data)
//   //   .then(data => {
//   //     return data;
//   //   })
// 	// 	.catch(e => console.log(`error: ${e}`))
		
// 	const API_TEST = publicRuntimeConfig.VARIABLE_TEST_FER;
  
//   return {
//     props: {
// 			API_TEST
//     }
//   }
// }