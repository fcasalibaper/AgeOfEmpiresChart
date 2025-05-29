import axios from 'axios';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
const { publicRuntimeConfig = {} } = getConfig() || {};

interface CivilizationData {
  id: number | string;
  name: string;
  expansion?: string;
  army_type?: string;
  unique_unit?: string[];
  unique_tech?: string[];
  team_bonus?: string;
  civilization_bonus?: string[];
  [key: string]: any;
}

// Exporting Home
export { default } from "@views/Detail/Detail";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async (context) => {
	const API_CIVILIZATIONS = publicRuntimeConfig.API;
	
	try {
    const response = await axios.get<CivilizationData>(`${API_CIVILIZATIONS}/civilization/${context.query.Item}`);
    // Check if response.data exists and is an object (basic validation)
    if (response.data && typeof response.data === 'object') {
      return {
        props: {
          civilization: response.data
        }
      };
    } else {
      // Handle cases where data is not as expected (e.g., empty or wrong format)
      console.log('API did not return the expected data format');
      return {
        props: {
          civilization: null
        }
      };
    }
  } catch (e) {
    console.log(`API error: ${e}`);
    return {
      props: {
        civilization: null
      }
    };
  }
}