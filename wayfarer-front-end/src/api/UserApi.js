// Something
import axios from 'axios';
axios.defaults.withCredentials = true;
const endpoint = "http://localhost:4000"

const login = (user) => {
    return axios.post(endpoint+'/api/v1/login',user);
}

const signup = (user) => {
    return axios.post(endpoint+'/api/v1/register',user);
}

const logout = () => {
// router.delete('/logout', ctrl.auth.logout);
    return axios.delete(endpoint+'/api/v1/logout')
}

const verify = () => {
    return axios.get(endpoint+'/api/v1/verify');
}

const show = (id) => {
    return axios.get(endpoint+'/api/v1/users/'+id);
}

const update = (user) => {
    let request = axios.put(endpoint+'/api/v1/users/'+user._id, user);
    return request;
}

// user post index
// needs backend api post route
const postIndex = () => {
    let request = axios.get(endpoint+'/api/v1/posts/')
    return request;
}

const postCreate = (post) => {
    return axios.post(endpoint+'/api/v1/posts',post);
}

const postDelete = (post) => {
  return axios.delete(endpoint+'/api/v1/posts/'+post._id)
}

const postUpdate = (_id, post) => {
  return axios.put(endpoint+'/api/v1/posts/'+_id, post)
}

const cityIndex = () => {
    return axios.get(endpoint+'/api/v1/cities')
}



export default {
    login,
    signup,
    logout,
    verify,
    show,
    update,
    postIndex,
    postCreate,
    cityIndex,
    postDelete,
    postUpdate
}