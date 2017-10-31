export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const INCREMENT_BY = 'INCREMENT_BY';

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
