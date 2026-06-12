import axios, { type AxiosError, type AxiosResponse } from 'axios'

const request = axios.create({
	baseURL: import.meta.env.VITE_API_BASE,
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json',
	},
})

request.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		return Promise.reject(error)
	},
)

export default request
