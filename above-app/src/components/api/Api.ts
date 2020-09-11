import axios, { AxiosResponse } from 'axios';
import { IItem } from '../../common/Interfaces';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'https://localhost:44379/api/' : 'hostedWeb';

const response = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => axios.get(url).then(response),
	post: (url: string, body: {}) => axios.post(url, body).then(response),
	patch: (url: string, body: {}) => axios.patch(url, body).then(response),
	del: (url: string) => axios.delete(url).then(response)
};

const Items = {
	list: () => requests.get('/items'),
	details: (id: string) => requests.get(`/items/${id}`),
	create: (item: IItem) => requests.post('items', item),
	update: (item: IItem) => requests.patch(`items/${item.id}`, item),
	delete: (id: string) => requests.del(`/items/${id}`)
};

export default { Items };
