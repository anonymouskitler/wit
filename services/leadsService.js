import axios from 'axios'

export function getLeads() {
	return axios.get('http://localhost:12121/leads?_limit=10')
}