import axios from 'axios';

//https://api.hgbrasil.com/weather?key=b2c97d6c&lat=-23.682&lon=-46.875

export const key = '8c7f2870';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'

});

export default api;