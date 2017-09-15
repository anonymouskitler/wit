import { takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {testNow, fetchLeadsSuccess} from '../actionCreators/actionCreators.js'
import {getLeads} from '../services/leadsService'

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

const rootSaga = function* rootSaga() {
	yield [
		takeEvery('TEST_NOW', testNowSaga),
		takeEvery('FETCH_LEADS', fetchLeads)
	]
}

export default rootSaga