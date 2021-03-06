import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_WORDS" actions

function* fetchForvoEnglish(action) {
  console.log(
    "fetching forvo english action payload:",
    action.payload
  );
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/${action.payload}/language/en`
    );
    console.log(
      "get forvo english:",
      response.data
    );
    yield put({
      type: "SET_FORVO_ENGLISH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoEnglish:",
      error
    );
  }
}

function* fetchForvoFrench(action) {
  console.log("fetching forvo frech");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/${action.payload}/language/fr`
    );
    console.log(
      "get forvo french:",
      response.data
    );
    yield put({
      type: "SET_FORVO_FRENCH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoFrench:",
      error
    );
  }
}

function* fetchForvoSpanish(action) {
  console.log("fetching forvo Spanish");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/${action.payload}/language/es`
    );
    console.log(
      "get forvo spanosh:",
      response.data
    );
    yield put({
      type: "SET_FORVO_SPANISH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoSPANISH:",
      error
    );
  }
}

function* fetchForvoItalian(action) {
  console.log("fetching forvo italian");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/${action.payload}/language/it`
    );
    console.log(
      "get forvo italian:",
      response.data
    );
    yield put({
      type: "SET_FORVO_ITALIAN",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoITALIAN:",
      error
    );
  }
}

function* fetchForvoPortuguese(action) {
  console.log("fetching forvo Portuguese");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/${action.payload}/language/po`
    );
    console.log(
      "get forvo portuguese:",
      response.data
    );
    yield put({
      type: "SET_FORVO_PORTUGUESE",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoPortuguese:",
      error
    );
  }
}

function* forvoSaga() {
  yield takeLatest(
    "FETCH_FORVO_ENGLISH",
    fetchForvoEnglish
  );
  yield takeLatest(
    "FETCH_FORVO_FRENCH",
    fetchForvoFrench
  );
  yield takeLatest(
    "FETCH_FORVO_SPANISH",
    fetchForvoSpanish
  );
  yield takeLatest(
    "FETCH_FORVO_ITALIAN",
    fetchForvoItalian
  );
  yield takeLatest(
    "FETCH_FORVO_PORTUGUESE",
    fetchForvoPortuguese
  );
}

export default forvoSaga;
