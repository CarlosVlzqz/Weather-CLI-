const axios = require('axios')


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'c7541a7f73mshe2961c23be8a72dp12109ejsn61b9bf725f66' }
    })

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {

    getLugarLatLng

}