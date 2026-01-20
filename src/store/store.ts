import { configureStore, type ConfigureStoreOptions } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use this for localStorage

const persistConfig = {
  key: 'root',
  storage, // Use localStorage for web
  timeout:0
}

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
    reducer: {
      todo: persistedReducer, // Wrap the reducer with persistReducer
    },
  });
  
  // Create a persistor
  export const persistor = persistStore(store);
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;
