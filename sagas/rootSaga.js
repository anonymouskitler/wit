import { takeEvery, call, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {testNow, fetchLeadsSuccess, submitLeadFormSucceeded} from '../actionCreators/actionCreators.js'
import {getLeads, postLeads} from '../services/leadsService'

function* testNowSaga() {
	yield call(delay, 1000);
	// yield put(testNow('Hello again'))
	console.log('In saga');
}

function* fetchLeads() {
	try {
		const resp = yield call(getLeads)
		yield put(fetchLeadsSuccess(resp.data))
	} catch(e) {
		console.log(e)
	}
	console.log('Fetch leads in saga')
}

function* submitLeadForm() {
	try {
		const leadValues = yield select(state => state.form.lead.values)
		const resp = yield call(postLeads, leadValues)
		yield put(submitLeadFormSucceeded(resp.data))
	} catch(e) {
		console.error(e)
	}
}

const rootSaga = function* rootSaga() {
	yield [
		takeEvery('TEST_NOW', testNowSaga),
		takeEvery('FETCH_LEADS', fetchLeads),
		takeEvery('SUBMIT_LEAD_FORM', submitLeadForm)
	]
}

export default rootSaga
