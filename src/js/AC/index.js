export function incGood(id) {
  return {
    type: INC_GOOD,
    payload: {
      id
    }
  }
}

export function decGood(id) {
  return {
    type: DEC_GOOD,
    payload: {
      id
    }
  }
}

export function deleteGood(id) {
  return {
    type: DELETE_GOOD,
    payload: {
      id
    }
  }
}
