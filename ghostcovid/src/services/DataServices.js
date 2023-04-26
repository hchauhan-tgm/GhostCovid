import axios from 'axios';
const url = 'http://localhost:8080/api/';
export default {
  login(credentials) {
    return axios
      .get(url + 'login/' + credentials.username, credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'registrieren/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};

/*class DataServices {
    //registrieren
    create(data) {
        return http.post('/registrieren', data);
    }
    //login
    get(username) {
        return http.get(`/login/${username}`);
    }
}

export default new DataServices();*/