const apiKey = 'a400bc409cc14dd2966e7fbbc736a11d';

export const getNews = type => fetch(`https://newsapi.org/v2/everything?q=${type}&from=2018-10-08&sortBy=publishedAt&apiKey=${apiKey}`)
  .then(response => response.json())
  .catch(error => null);
