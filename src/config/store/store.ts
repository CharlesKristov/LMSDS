import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";
import loginReducer from "./slices/loginReducer";
import stateReducer from "./slices/stateReducer";

// const sagaMiddleware = createSagaMiddleware(rootSaga)

const persistConfig = {
  key: 'Lms-Design-System', // Nama kunci untuk menyimpan data secara persisten
  version: 1, // Versi data yang disimpan secara persisten
  storage
}

const combinedReducers = combineReducers({
  login: loginReducer,
  data: stateReducer,
  // requestForm: requestFormReducer,
})

// const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = configureStore({
  reducer: { combinedReducers },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger).concat(sagaMiddleware)
  // }
});

// const persistor = persistStore(store);

export {
  store,
  // persistor
}
