import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk';
import { products } from "./reducer";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const initialState={};
const middleWare=[thunk];
const reducers=combineReducers({products});
const store =createStore(reducers,initialState,applyMiddleware(...middleWare));
export default store;