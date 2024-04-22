// récupérer la météo grâce à l'API de OpenWeatherMap.

// comprendre le fonctionnement de l'API .

// Pour utiliser cette API, il nous faut une clé API 
// Pour ce faire vous devez vous inscrire gratuitement.
// Une fois que vous êtes inscrit, vous pouvez aller sur cette page 
// https://home.openweathermap.org/api_keys  
// pour récupérer votre clé API

// Voici l'url à utiliser pour récupérer la météo 
// https://api.openweathermap.org/data/2.5/weather

// Vous pouvez lui passer plusieurs paramètres :
// q= pour spécifier la ville 
// appid= pour spécifier votre clé secrète (la mienne si vous n'arrivez pas à en générer une  303f9eec7635d278cf01f88380592743)
// units= pour spécifier que nous voulons la température en Celsius
const ville ={
    nom: 'Berlin'
}

const changerVille = document.querySelector('.changer');
changerVille.addEventListener('click', () =>{
    ville.nom = prompt('Quelle ville ?');
    recevoirTemperature(ville.nom);
} )


async function recevoirTemperature(ville){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=303f9eec7635d278cf01f88380592743&units=metric`;

    try{
        const response = await axios.get(url);
        const temperature = response.data.main.temp;
        const nomVille = response.data.name;
   
        document.querySelector('.temperature-label').textContent = temperature;
        document.querySelector('.ville').textContent = nomVille;
    }catch(error){
        console.log(error);
    }
}

recevoirTemperature(ville.nom);