import axios from 'axios';

// TODO: need to add type and tests
export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}