import axios from 'axios'

export function getLeads() {
	return axios.get('http://localhost:12121/leads?_limit=1000')
}

export function postLeads(params) {
  return axios.post('http://localhost:12121/leads',params)
}
