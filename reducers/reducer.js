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
		case 'SUBMIT_LEAD_FORM_SUCCEEDED':
			return {
				...state,
				leads: [...state.leads, action.newLead]
			}
		default:
			return state
	}
}

export default data
