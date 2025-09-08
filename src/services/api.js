import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api/v1';
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
},
    { synchronous: true, runWhen: () => true }
);

// Add a response interceptor
axios.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
    }
    return Promise.reject(error);
});


export default axios;
