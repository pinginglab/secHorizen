

// let url_product = 'https://sg.cmic.site/backend/'
import {environment} from '../environments/environment';

const url_product = '/backend/';
const url_dev = 'http://localhost:4200/';
let API_BASE_URL = '';
if (environment.production) {
  API_BASE_URL = url_product;
} else {
  API_BASE_URL = url_dev;
}

export { API_BASE_URL };
// export const API_BASE_URL = 'http://localhost:4200/'


