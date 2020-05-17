import { call, put } from "redux-saga/effects";
import { getUserData } from "../actions/loginActions";

export function* setUserInfo() {
  const _userData = yield call(getUserData);
  yield put({ type: "USER_DATA", userInfo: _userData });
}
