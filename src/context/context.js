import { createContext, useReducer } from "react";
import reducer from "./reducer";


export const MoneyContext = createContext();

let data = {
    money:[],
    components:[],
    contentTags:[]
}


export function BloombergContext({children}){

    const [value,dispatch] = useReducer(reducer,data);

    value.setMoney = (data)=>{
        dispatch({type:"GET_MONEY",paylod:data})
    }
    value.setComponents = (data)=>{
        dispatch({type:"GET_CON",paylod:data})
    }
    value.setTags = (data)=>{
        dispatch({type:"get_tag",paylod:data})
    }

    return(
        <MoneyContext.Provider value={value}>
            {children}
        </MoneyContext.Provider>
    )

}