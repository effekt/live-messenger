import axios from 'axios';

const UserService = {
    getUser: () => { return axios.get(`https://randomuser.me/api`) },
}

export default UserService;