const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(){
   const inputBtn = document.querySelector('#input-btn').value;
   inputBtn.value= '';
   
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=4dc4751cca80d791a3955aaa589e997d')

   .then(response => response.json())
   .then(data => {
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const description = data.weather[0].description;

    document.querySelector('#city').innerText = cityName;
    document.querySelector('#temp').innerText = temp.toFixed(); 
    document.querySelector('#des').innerText = description; 
   })

   .catch(res => alert('please enter right city name'))

   
})