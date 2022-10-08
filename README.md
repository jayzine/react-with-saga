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

---

# ACCESS STATE VALUES & DISPATCH ACTIONS
- Create `Component.js` file.
```
import React from 'react';
import { actionName } from 'PATH_NAME_OF_ACTION_FILE';

const ComponentName = ({ actionName, counter }) => {
    const fnName = () => {
        actionName();
    }

    return (
        <>
        <button onClick={fnName}></button>
        {counter}
        </>
    )
}

const mapStateToProps = (state) => ({
    //this will return object with reducer name which you wil define in combine reducer file
    // please check containers/User/userReducer.js
    // please check reducer/index.js file and containers/User/UserReducer.js

    counter: state.userReducer
})

const mapDispatchToProps = ({
    // check containers/User/actions.js
    actionName
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)
```

# SAGA FUNCTION
- saga contains generator functions. When a promise is run and yielded, the middleware suspends the saga until the promise is resolved. Once the promise is resolved the middleware resumes the saga, until the next yield statement is found. It is suspended again until its promise resolves.

```
import { call, put, takeLatest } from 'redux-saga/effects';
function* sagaFunction() {
    yield call(actionName())
    yield put(actionName())
}

export default syncFunctionNameSagas() {
    yield takeLatest(ACTION_TYPE, sagaFunction)
}

//Please check containers/Users/UsertSagas.js & rootSagas.js to get more clarification

```

- If you are new to `redux` please go through the documentation [REDUX TUTORIAL](https://react-redux.js.org/api/connect)
- For Redux saga [REDUX SAGA TUTORIAL](https://redux-saga.js.org/docs/introduction/BeginnerTutorial/)
