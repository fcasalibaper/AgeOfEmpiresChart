import axios from 'axios';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
const { publicRuntimeConfig = {} } = getConfig() || {};

// Exporting Home
export { default } from "@views/Home";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async (context) => {
	const API_CIVILIZATIONS = publicRuntimeConfig.API;
  const response = await axios.get(`${API_CIVILIZATIONS}/civilizations`)
    .then(res => res.data)
    .then(data => {
			const checkData = Array.isArray(data.civilizations) && data.civilizations.length > 0;
      return checkData ? data.civilizations : null;
    })
		.catch(e => {
			console.log(`error: ${e}`)
			return null
		})
  
  return {
    props: {
			civilizations: response
		}
  }
}