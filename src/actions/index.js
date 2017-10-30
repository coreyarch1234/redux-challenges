export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const INCREMENT_BY = 'INCREMENT_BY';

export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

export const resetCounter = () => {
    return {
        type: RESET_COUNTER
    }
}

export const incrementBy = ( n = 1 ) => {
    return {
        type: INCREMENT_BY,
        payload: n
    }
}
