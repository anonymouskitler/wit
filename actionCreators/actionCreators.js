import * as Actions from '../actions/actions'

export function testNow(data) {
	return {type: Actions.TEST_NOW, data}
}

export function fetchLeads() {
	return {type: Actions.FETCH_LEADS}
}

export function fetchLeadsSuccess(leads) {
	return {type: Actions.FETCH_LEADS_SUCCESS, leads}
}

export function submitLeadForm() {
  return {type: Actions.SUBMIT_LEAD_FORM}
}

export function submitLeadFormSucceeded(newLead) {
  return {type: Actions.SUBMIT_LEAD_FORM_SUCCEEDED, newLead}
}
