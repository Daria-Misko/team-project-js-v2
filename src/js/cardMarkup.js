// import { hasItem, addItem, removeItem } from './localstorage';
// const FAVORITE_KEY = 'favorite-key';
// const READ_KEY = 'read-key';

// function formatDate(dt) {
//   return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDate()}`
// }

// export default function cardMarkup(items) {
//   const markup = items.map(item => {
//     const {
//       headline,
//       web_url,
//       pub_date,
//       lead_paragraph,
//       news_desk,
//       bigMobileImg,
//       smallMobileImg,
//       smallSquareImg,
//       bigSquareImg,
//     } = item;
//     const lenght =
//       lead_paragraph.length > 80
//         ? lead_paragraph.slice(0, 80) + '...'
//         : lead_paragraph;
//         const img = !bigSquareImg ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXq6h_EHL7Iu-tVrAWQPJ4ozAiL3y5NY2m5jmcw&s' : `https://www.nytimes.com/${bigSquareImg}`;

//     const isFav = hasItem(FAVORITE_KEY, item => item.web_url == web_url);
//     const isReaded = hasItem(READ_KEY, item => item.web_url == web_url);

//     const pub_date_fmt = formatDate(new Date(pub_date))
    
//     const cardItem = document.createElement('li');
//     cardItem.classList.add('card__item');
//     cardItem.innerHTML = `<div class="card__wrapper">

//       <div class="card-image__wrapper">
//         <img
//           class="card__image"
//           src=${img}
//           alt="news"
//           width="288"
//           height="395"
//           loading='lazy'
//         />
//         <span class="card-jobsearching"> ${news_desk} </span>
//         <span class="card-already__read ${
//           isReaded ? '' : 'is-hidden'
//         }">Already read</span>
//         <button class="card__btn btn-add ${
//           isFav ? 'is-hidden' : ''
//         }" type="button" 
//         data-url="${web_url}">Add to favorite</button>
//         <button class="card__btn btn-remove ${
//           isFav ? '' : 'is-hidden'
//         }" type="button" data-url="${web_url}">Remove from favorite</button>
//       </div>

//       <h2 class="card__title">${headline}</h2>
//       <p class="card__article">${lenght}</p>

//       <div class="card__info">
//         <span class="card__info--date">${pub_date_fmt}</span>
//         <a class="card__info--readmore" href="${web_url}" target="_blank">
//           Read more
//         </a>
//       </div>
//     </div>`;

//     const btnAddToFavorite = cardItem.querySelector('button.card__btn.btn-add');
//     const btnRemoveFromFavorite = cardItem.querySelector(
//       'button.card__btn.btn-remove'
//     );
//     const labelAlreadyRead = cardItem.querySelector('.card-already__read')
//     const lnkReadMore = cardItem.querySelector('a.card__info--readmore')

//     btnAddToFavorite.addEventListener('click', () => {
//       addItem(FAVORITE_KEY, item);
//       btnAddToFavorite.classList.add('is-hidden');
//       btnRemoveFromFavorite.classList.remove('is-hidden');
//     });

//     btnRemoveFromFavorite.addEventListener('click', () => {
//       removeItem(FAVORITE_KEY, ({ web_url:url }) => web_url === url);
//       btnRemoveFromFavorite.classList.add('is-hidden');
//       btnAddToFavorite.classList.remove('is-hidden');
//     });

//     lnkReadMore.addEventListener('click', () => {
//       removeItem(READ_KEY, ({web_url: url}) => web_url === url)
//       item.readDate=formatDate(new Date())
//       addItem(READ_KEY, item);
//       labelAlreadyRead.classList.remove('is-hidden')
//     })
    
//     return cardItem;
//   });

//   const weatherElement = document.createElement('li')
//   weatherElement.classList.add('card__item')
//   weatherElement.innerHTML = '<div class="card__item--weather"></div>'
//   let clientViewportWidth = window.innerWidth;
//   if (clientViewportWidth >= 768 && clientViewportWidth < 1280) {
//     markup.splice(1, 0, weatherElement);
//   } else if (clientViewportWidth >= 1280) {
//     markup.splice(2, 0, weatherElement);
//   } else {
//     markup.splice(0, 0, weatherElement);
//   }

//   // return markup.join('');
//   const cardItemsFragment = document.createDocumentFragment()
//   markup.forEach(card => cardItemsFragment.appendChild(card))
  

//   return cardItemsFragment;
// }
import { hasItem, addItem, removeItem } from './localstorage';
const FAVORITE_KEY = 'favorite-key';
const READ_KEY = 'read-key';
// import { weatherMarkup } from './getPopularNews'
function formatDate(dt) {
 

  return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDate()}`
}

export default function cardMarkup(items) {
  if ('response' in items && 'docs' in items.response) {
    items = items.response.docs
  }

  items = items || []

  const markup = items.map(item => {
    const {
      headline,
      web_url,
      pub_date,
      lead_paragraph,
      news_desk,
      bigMobileImg,
      smallMobileImg,
      smallSquareImg,
      bigSquareImg,
    } = item;
    const lenght =
      lead_paragraph.length > 80
        ? lead_paragraph.slice(0, 80) + '...'
        : lead_paragraph;

    const isFav = hasItem(FAVORITE_KEY, item => item.web_url == web_url);
    const isReaded = hasItem(READ_KEY, item => item.web_url == web_url);

    const pub_date_fmt = formatDate(new Date(pub_date));
    const img = !bigSquareImg ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXq6h_EHL7Iu-tVrAWQPJ4ozAiL3y5NY2m5jmcw&s' : `https://www.nytimes.com/${bigSquareImg}`;
    
    const cardItem = document.createElement('li');
    cardItem.classList.add('card__item');
    cardItem.innerHTML = `<div class="card__wrapper">
      <div class="card-image__wrapper">
        <img
          class="card__image"
          src=${img}
          alt="news"
          width="288"
          height="395"
          loading='lazy'
        />
        <span class="card-jobsearching"> ${news_desk} </span>
        <span class="card-already__read ${
          isReaded ? '' : 'is-hidden'
        }">Already read</span>
        <button class="card__btn btn-add ${
          isFav ? 'is-hidden' : ''
        }" type="button" 
        data-url="${web_url}">Add to favorite</button>
        <button class="card__btn btn-remove ${
          isFav ? '' : 'is-hidden'
        }" type="button" data-url="${web_url}">Remove from favorite</button>
      </div>

      <h2 class="card__title">${headline}</h2>
      <p class="card__article">${lenght}</p>

      <div class="card__info">
        <span class="card__info--date">${pub_date_fmt}</span>
        <a class="card__info--readmore" href="${web_url}" target="_blank">
          Read more
        </a>
      </div>
    </div>`;

    const btnAddToFavorite = cardItem.querySelector('button.card__btn.btn-add');
    const btnRemoveFromFavorite = cardItem.querySelector(
      'button.card__btn.btn-remove'
    );
    const labelAlreadyRead = cardItem.querySelector('.card-already__read')
    const lnkReadMore = cardItem.querySelector('a.card__info--readmore')

    btnAddToFavorite.addEventListener('click', () => {
      addItem(FAVORITE_KEY, item);
      btnAddToFavorite.classList.add('is-hidden');
      btnRemoveFromFavorite.classList.remove('is-hidden');
    });

    btnRemoveFromFavorite.addEventListener('click', () => {
      removeItem(FAVORITE_KEY, ({ web_url:url }) => web_url === url);
      btnRemoveFromFavorite.classList.add('is-hidden');
      btnAddToFavorite.classList.remove('is-hidden');
    });

    lnkReadMore.addEventListener('click', () => {
      removeItem(READ_KEY, ({web_url: url}) => web_url === url)
      item.readDate=formatDate(new Date())
      addItem(READ_KEY, item);
      labelAlreadyRead.classList.remove('is-hidden')
    })
    
    return cardItem;
  });

  const weatherElement = document.createElement('li')
  weatherElement.classList.add('card__item')
  weatherElement.innerHTML = `<div class="weather-container__all"><div class="weather-container">
  <div class="weather-current__container">
    <div class="weather-top-card">
      <div class="temperature-value animate__animated animate__fadeInUp">
        <p></p>
      </div>
      <div class="description-wrapper">
        <div
          class="temperature-description animate__animated animate__fadeInUp">
          <p>weather description</p>
        </div>
        <div class="location animate__animated animate__fadeInUp">
          <p>Location</p>
        </div>
      </div>
    </div>
    <div class="weather-icon">
      <img src="/src/images/svg/unknown.png" alt="" height="155" width="165" />
    </div>
    <div class="day animate__animated animate__fadeInUp">
      <p></p>
    </div>
    <div class="date animate__animated animate__fadeInUp">
      <p></p>
    </div>
    <div class="week-weather animate__animated animate__fadeInUp">
      <button class="weather-button" type="button">weather for week</button>
    </div>
  </div>
</div>
<div class="weather-week__container">
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
  <div class="date animate__animated animate__fadeInUp">
    <button class="weather-week-close-button" type="button">back</button>
  </div>
</div></div>`
  let clientViewportWidth = window.innerWidth;
  if (clientViewportWidth >= 768 && clientViewportWidth < 1280) {
    markup.splice(1, 0, weatherElement);
  } else if (clientViewportWidth >= 1280) {
    markup.splice(2, 0, weatherElement);
  } else {
    markup.splice(0, 0, weatherElement);
  }

  // return markup.join('');
  const cardItemsFragment = document.createDocumentFragment()
  markup.forEach(card => cardItemsFragment.appendChild(card))
  

  return cardItemsFragment;
}


// const apiKey = "73bd6bca6bd522830119f0c6decba840";
// const KELVIN = 273;

// const tempElement = document.querySelector(".temperature-value p");
// const descElement = document.querySelector(".temperature-description p");
// const locationElement = document.querySelector(".location p");
// const iconElement = document.querySelector(".weather-icon");
// const dayElement = document.querySelector(".day p");
// const dateElement = document.querySelector(".date p");
// const button = document.querySelector(".weather-button");
// const weatherWeek = document.querySelector(".weather-week__container");
// const weatherCurrent = document.querySelector(".weather-current__container");
// const closeBtn = document.querySelector(".weather-week-close-button")
// const weatherWeekDayForecast = document.querySelector(".weather-week__forecast")

// // button.addEventListener('click', onClick)
// // closeBtn.addEventListener('click', onClose)

// const date = new Date()
// let currentdate = date.toLocaleDateString('en-gb', { day: "numeric", month: "short", year: "numeric" })
// const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// let day = weekday[date.getDay()];

// const weather = {
// 	temperature: {
// 		value: "",
// 		unit: "celsius"
// 	},
// 	description: "",
// 	iconId: "",
// 	city: "",
// 	country: "",
// 	day: `${date}`,
// 	data: `${day}`
// };

// dayElement.insertAdjacentHTML('beforeend', `${day}`); 
// dateElement.insertAdjacentHTML('beforeend', `${currentdate}`); 

// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     console.log(error);
// }

// function setPosition(position) {
// 	if (position && position.coords) {
// 		let latitude = position.coords.latitude;
// 		let longitude = position.coords.longitude;

// 		getWeather(latitude, longitude);
// 		// forecast(latitude, longitude);
// 	} else {
// 		console.log("Position data not available.");
// 	}

// }

// function showError(error) {
// 	console.log(`nothing`);
//    //  notificationElement.style.display = "block";
//    //  notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

// function getWeather(latitude, longitude) {
//    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
//     fetch(api)
//         .then(function(response){
//             let data = response.json();
// 			  return data;
//         })
// 		 .then(function (data) {
// 			// console.log(data);
// 			weather.temperature.value = Math.floor(data.main.temp - KELVIN);
// 			weather.description = data.weather[0].description;
// 			weather.iconId = data.weather[0].icon;
// 			weather.city = data.name;
// 			weather.country = data.sys.country;
//         })
//         .then(function(){
//             displayWeather();
//         });
// }

// function displayWeather() {
//    iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@4x.png" height= "155"
// 	width= "165"/>`;
//    tempElement.insertAdjacentHTML('beforeend', `${weather.temperature.value}°`);
//    descElement.innerHTML = `${weather.description}`;
// 	locationElement.innerHTML = `${weather.city}`;
// }



// function forecast(latitude, longitude) {
// 	const newKey = 'ba7fddf449339701f9df702aeb87be1d'
// 	const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${newKey}`;
    
// 	fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
// 	  const dataArray = data.list;
// 	  const groupedData = {};
// 	  for (let i = 0; i < dataArray.length; i++) {
//       const date = dataArray[i].dt_txt.slice(0, 10);
//       if (!groupedData[date]) {
// 			groupedData[date] = {
// 			date: date,
//           minTemp: dataArray[i].main.temp,
//           maxTemp: dataArray[i].main.temp,
//           weather: dataArray[i].weather[0].description
//         };
//       } else {
//         if (dataArray[i].main.temp < groupedData[date].minTemp) {
//           groupedData[date].minTemp = dataArray[i].main.temp;
//         }
//         if (dataArray[i].main.temp > groupedData[date].maxTemp) {
//           groupedData[date].maxTemp = dataArray[i].main.temp;
//         }
//       }
//     }
// 	  console.log(groupedData);

// 	  const groupedDataPerDay = {
//   "2022-03-05": {
//     date: "2022-03-05",
//     minTemp: 5,
//     maxTemp: 10,
//     weather: "Cloudy"
	 
//   },
//   "2022-03-06": {
//     date: "2022-03-06",
//     minTemp: 8,
//     maxTemp: 12,
//     weather: "Rainy"
//   }
// };
// weatherWeekDayForecast.innerHTML = '';
// // перебираємо ключі в об'єкті
// 	  Object.keys(groupedData).forEach(date => {
// 		  const data = groupedData[date];
// 		  const dateValue = data.date;
		  
// 			const datePotoch = new Date(dateValue);
// 			const formattedDate = datePotoch.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

//   			const minTempValue = Math.floor(data.minTemp - KELVIN);
//   			const maxTempValue = Math.floor(data.maxTemp - KELVIN);
// 		  	const weatherValue = data.weather;
  
		  
// 		//   console.log(`Дата: ${formattedDate}, Мінімальна температура: ${minTempValue}, Максимальна температура: ${maxTempValue}, Опис погоди: ${weatherValue}`);
		  
// 		  const listItem = document.createElement('li');
// 		  listItem.classList.add('weather-week__item')
//         listItem.innerHTML = `<span class="weather-week__value">${formattedDate}</span>:<br> Min. temp: <span class="weather-week__value">${minTempValue}</span>, Max. temp: <span class="weather-week__value">${maxTempValue}</span><br> Descr.: <span class="weather-week__value">${weatherValue}</span>`;
//         weatherWeekDayForecast.appendChild(listItem);

// });

	  
	  
	  
//   })  
//   .catch(error => console.log(error));
// 	}

// 	weatherWeek.classList.add('is-hidden');

// function onClick(e) {
// 	e.preventDefault();
// 	weatherCurrent.classList.add('is-hidden');
// 	if (weatherWeek.classList.contains('is-hidden')) {
// 		weatherWeek.classList.remove('is-hidden')
// 	}
// }

// function onClose(e) {
// 	e.preventDefault();
// 	weatherWeek.classList.add('is-hidden');
// 	if (weatherCurrent.classList.contains('is-hidden')) {
// 		weatherCurrent.classList.remove('is-hidden')
// 	}
// }