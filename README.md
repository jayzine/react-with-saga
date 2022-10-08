# REACT WITH REDUX SAGA(MIDDLEWARE)
You need to follow below steps to configure redux-saga in react app

- create react app with command `npx create-react-app application-name`
- install the required packages with this command `npm i redux-saga react-redux redux @mui/material`
- Start your app `npm start` to check react app.

# Configure react saga
- open `index.js` file and add below line.
```
    import { Provider } from 'react-redux';
    import { createStore, applyMiddleware } from 'redux';
    import createSagaMiddleware from 'redux-saga';

    import rootSaga from './rootSagas';
    import reducer from './reducer';
    .
    .
    .
    .

    // redux saga configuration
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);

    .
    .
    root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
    );
```
- You need to create `rootSagas.js` to combine all sagas function to make single entry point to run `sagaMiddleware`;
- You need to create `combineReducer` to combine all reducer files.

-If you are new to `redux` please go through the documentation [REDUX TUTORIAL](https://react-redux.js.org/api/connect)
-For Redux saga [REDUX SAGA TUTORIAL](https://redux-saga.js.org/docs/introduction/BeginnerTutorial/)
