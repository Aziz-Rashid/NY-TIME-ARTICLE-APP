const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed";

export const fetchNYTArticles = async (days: number) => {
  try {
    const url = `${BASE_URL}/${days}.json?api-key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`API Error: ${response.statusText}`);
      return []; // Return an empty array on API failure
    }

    return await response.json();
  } catch (error) {
    console.error("Network error fetching NYT articles:", error);
    return []; // Return an empty array on network failure
  }
};
