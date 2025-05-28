const form = document.querySelector('.form-data');
const region = document.querySelector('.region');
const apiKey = document.querySelector('.api-key');

const loading = document.querySelector('.loading');
const error = document.querySelector('.error');
const results = document.querySelector('.result-info');
const myRegion = document.querySelector('.my-region');
const carbonUse = document.querySelector('.carbon-usage')
const fossilFuel = document.querySelector('.fossil-fuel');
const clear = document.querySelector('.clear-btn');

import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, regionName){
    try{
        await axios.get('https://api.co2signal.com/v1/latest', 
            {params:{countryCode: region,}, headers:{'auth-token':apiKey,},})
            .then((response)=>{let C02 = Math.floor(response.data.data.carbonIntensity);
                loading.style.display = 'none';
                form.style.display = 'none';
                myRegion.textContent = region;
                carbonUse.textContent = Math.round(response.data.data.carbonIntensity) + 'grams (grams C02 emitter per kilowatt hour)';
                fossilFuel.textContent = response.data.data.fossilFuelPercentage.toFixed(2) + '%(percent of fossil fuels used to make electricity)';
                results.style.display = 'block';
            });
    }
    catch(error){
        console.log(error);
        loading.style.display='none';
        results.style.display='none';
        error.textContent = 'Sorry, we have no data for the region you have requested.';
    }
}

function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	error.textContent = '';
	clear.style.display = 'block';
	
	displayCarbonUsage(apiKey, regionName);
}

function handleSubmit(e){
    e.preventDefault();
    setUpUser(apiKey.value, region.value);
}

function init(){
    const storedKey = localStorage.getItem('apikey');
    const storedRegion = localStorage.getItme('region');

    if(storedKey == null || storedRegion == null){
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
		clear.style.display = 'none';
		error.textContent = '';
    }
    else{
        displayCarbonUse(storedKey, storedRegion);
        results.style.display = 'none';
		form.style.display = 'none';
		clear.style.display = 'block';
    }
}

function reset(e) {
	e.preventDefault();
	localStorage.removeItem('regionName');
	init();
}

form.addEventListener('submit', (e) => handleSubmit(e));
form.addEventListener('clear', (e) => reset(e));
init();