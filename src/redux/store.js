import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import toggleReducer from "./toggle/toggleSlice";
import chatReducer from "./chat/chatSlice";

import storage from "redux-persist/lib/storage";
import {
   persistReducer, 
   persistStore,
} from "redux-persist";


const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['user', 'chat'],
}

const reducers = combineReducers({
   user: userReducer,
   toggle: toggleReducer,
   chat: chatReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
      serializableCheck: false,
   }),
})

export const persistor = persistStore(store);

export default store;


