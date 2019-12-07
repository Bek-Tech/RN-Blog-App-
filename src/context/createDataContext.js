import React, {useReducer} from 'react';

//  reducer -  useReducer function   ,  actions - dispatch  ,  initialState - initial  data
export default (reducer, actions, initialState) => {
  const Context = React.createContext ();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer (reducer, initialState);
    // actions === {addBlogPost : (dispatch)=> {return() =>{ }}}

    //boundActions contains all  dispatch functions which received as  prop in actions
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key] (dispatch);
    }
    return (
      //  use  ...boundActions  instead  actions to get access to all dispatch functions
      (
        <Context.Provider value={{state, ...boundActions}}>
          {children}
        </Context.Provider>
      )
    );
  };
  return {Context, Provider};
};
