import axios from 'axios';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
const { publicRuntimeConfig = {} } = getConfig() || {};

// Exporting Home
export { default } from "@views/Detail";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async (context) => {
	const API_CIVILIZATIONS = publicRuntimeConfig.API;
	const response = await axios.get(`${API_CIVILIZATIONS}/civilization/${context.query.Item}`)
    .then(res => res.data)
    .then(data => {
			const checkData = (data !== undefined || data !== []);
      return checkData ? [data] : null;
    })
		.catch(e => {
			console.log(`error: ${e}`)
			return null
		})
  
  return {
    props: {
			civilization: response
		}
  }
}