// import axios from "axios";
import cardMarkup from "./cardMarkup";
// import getNewsBySearch from "./getNewsBySearch"

// import normalizedNews from "./headerNormalizedNews"; 
// import paginationRender from "./paginationRender";


const apiKey = '3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv';
const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`

async function fetchNYTData() {
  const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`);
  const data = await response.json();
  if (data.status === 'OK') {
	  const articles = data.results;
	  return articles;
  } else {
    throw new Error(error.message);
  }
}

async function getMostPopularArticles() {
	const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`);
	const data = await response.json();
	const { results } = data;
	const resultArticles = []

	console.log(results)
	const image = results[0].media[0]['media-metadata'][0].url;
	console.log(image);
	// let metadata = 'media-metadata';
	console.log(results[0].media[0]['media-metadata'][0].url);

	const articles = results.map(({ title, url, published_date, abstract, section, id }) => {
		// const image = results[0].media[0]['media-metadata'][0].url;
		// console.log(media[0]['media-metadata']);
		const article = {
		headline: title,
		web_url: url, 
      pub_date: published_date,
      lead_paragraph: abstract,
      news_desk: section, 
      bigMobileImg: 'https://static01.nyt.com/images/2023/03/07/multimedia/-01WELL-AGING-EXERCISES21-bzjq/-01WELL-AGING-EXERCISES21-bzjq-thumbStandard.jpg',
      // smallMobileImg: image,
      // smallSquareImg: image,
      // bigSquareImg: image,
      id: id
		}

		resultArticles.push(article);
  } ); 
	console.log(resultArticles);
	return resultArticles;

}

getMostPopularArticles().then(res => {
	const ulEl = document.querySelector('.popular-articles__list');
	ulEl.replaceChildren(cardMarkup(res));
})

// getMostPopularArticles().then(res => {
// 	const ulEl = document.querySelector('.popular-articles__list');
// 	console.log(ulEl);
// 	ulEl.insertAdjacentHTML('beforeend', cardMarkup(res));
// })



// export const weatherMarkup = ``;



// console.log(getMostPopularArticles());
// fetchNYTData()

// cardMarkup(getMostPopularArticles())
/* <div class="weather-week__container">
			  <div class="weather-week__list">
				<p>Weather for week</p>
				<ul class="weather-week__forecast">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			  </div>
			  <div class="date animate__animated animate__fadeInUp"><button class="weather-week-close-button" type="button">back</button></div >
	      </div> */

			