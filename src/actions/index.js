
import thunk from 'redux-thunk';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const INCREMENT_BY = 'INCREMENT_BY';
export const NEW_COUNTER = 'NEW_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const ADD_NAME = 'ADD_NAME';


export const ASYNC_WAIT = 'ASYNC_WAIT';
export const HANDLE_WAIT = 'HANDLE_WAIT';
export const HANDLE_WEATHER = 'HANDLE_WEATHER';

export const handleWait = (n) => {
    return {
        type: HANDLE_WAIT,
        payload: n
    }
}

export const asyncWait = () => {
    return (dispatch) => {
        setTimeout(() => {
            const n = Math.random();
            dispatch(handleWait(n))
        }, 3000)
    }
}

export const handleWeather = (json) => {
    return {
        type: HANDLE_WEATHER,
        payload: json
    }
}

export const getWeather = () => {
    return (dispatch) => {
        fetch().then((res) => {
            return res.json()
        }).then((json) => {
            dispatch(handleWeather(json))
        }).catch((err) => {console.log(err)})
    }
}


export const addName = (key, name) => {
  return {
    type: INCREMENT,
    payload: {
        key: key,
        name: name
    }
  }
}

export const incrementCounter = (key) => {
  return {
    type: INCREMENT,
    payload: key
  }
}

export const decrementCounter = (key) => {
  return {
    type: DECREMENT,
    payload: key
  }
}

export const resetCounter = (key) => {
    return {
        type: RESET_COUNTER,
        payload: key
    }
}

export const incrementBy = ( n = 1, key ) => {
    return {
        type: INCREMENT_BY,
        payload: {
            amount: n,
            keyValue: key
        }
    }
}

export const newCounter = () => {
    return {
        type: NEW_COUNTER
    }
}

export const deleteCounter = (key) => {
    return {
        type: DELETE_COUNTER,
        payload: key
    }
}
