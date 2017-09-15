let sampleState = {
    leads: [],
    text: 'hello'
}
const data = (state = sampleState , action) =>{
	switch (action.type) {
		case 'TEST_NOW':
			return Object.assign({}, state, {text: action.data})
		case 'FETCH_LEADS_SUCCESS':
			return Object.assign({}, state, {leads: action.leads})	
		default:
			return state
	}
}

export default data