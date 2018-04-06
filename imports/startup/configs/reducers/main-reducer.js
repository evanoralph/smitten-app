const initialState = {
  isActive: false,
  component: 'blank',
};

export function modalState(state, action) {
  if (typeof state == 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        isActive: action.isActive,
        component: action.component,
        data: action.data,
      });
      break;
    default:
      return state;
  }
}
