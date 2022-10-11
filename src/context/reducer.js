
function reducer(value,{type,paylod}) {
   switch (type) {
    case "GET_MONEY":
        return{
            ...value,
            money:paylod
        }
    case "GET_CON":
        return{
            ...value,
            components:paylod
        }
    case "get_tag":
        return{
            ...value,
            contentTags:paylod
        }
       
   
    default:
       return value
   }
}

export default reducer;