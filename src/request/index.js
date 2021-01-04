import http from './http';


const userLogin = (params) => http({
  url: '/user/login',
  data: params
});


export default {
  userLogin
}
