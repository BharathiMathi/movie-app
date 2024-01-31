import { API } from 'config';

export async function fetchFromAPI(params: string) {
  try {
    const response = await fetch(`${API}${params}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}