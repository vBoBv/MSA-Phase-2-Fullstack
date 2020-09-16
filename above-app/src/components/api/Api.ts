import axios, { AxiosResponse } from 'axios';
import { IItem, IUser, IUserForm } from '../../common/Interfaces';

axios.defaults.baseURL =
	process.env.NODE_ENV === 'development'
		? 'https://localhost:44379/api/'
		: 'https://aboveserver.database.windows.net/api/';

axios.interceptors.request.use(
	(config) => {
		const token = window.localStorage.getItem('jwt');
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const response = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => axios.get(url).then(response),
	post: (url: string, body: {}) => axios.post(url, body).then(response),
	patch: (url: string, body: {}) => axios.patch(url, body).then(response),
	del: (url: string) => axios.delete(url).then(response)
};

const Items = {
	list: (): Promise<IItem[]> => requests.get('/items'),
	details: (id: string) => requests.get(`/items/${id}`),
	create: (item: IItem) => requests.post('items', item),
	update: (item: IItem) => requests.patch(`items/${item.id}`, item),
	delete: (id: string) => requests.del(`/items/${id}`),
	placebid: (id: string) => requests.post(`/items/${id}/placebid`, {})
};

const User = {
	current: (): Promise<IUser> => requests.get('/user'),
	login: (user: IUserForm): Promise<IUser> => requests.post(`user/login`, user),
	register: (user: IUserForm): Promise<IUser> => requests.post(`/user/register`, user)
};

export default { Items, User };
