import React, { useContext , useReducer} from 'react';

export const userContext = React.createContext();

export const StateProvider = ({initialState, reducer, children}) => (
    <userContext.Provider value={useReducer(reducer, initialState)}> {/* Reducer : estado previo y accion (se pueden definir tipos), retorna nuevo estado*/}
        {children}
    </userContext.Provider>
);

export const useUserContext = () => useContext(userContext);