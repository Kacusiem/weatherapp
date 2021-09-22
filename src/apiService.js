export const getWeatherByCity = (city) => {
    return fetch(`https://www.metaweather.com/api/location/search/?query=${city}`
    )
    // Tutaj poniżej może to zapisać resp => {return resp.json()} albo można też i tak:
    .then(resp =>  resp.json())
    .then(cityInfo => {
        // console.log(data);
        const woeid = cityInfo[0].woeid;
        return fetch(`https://www.metaweather.com/api/location/${woeid}/`
        )
        .then(resp => resp.json())
        .then(data => data)
        // To data => data to jakby było:
        // function(data) {return data}
    });
}