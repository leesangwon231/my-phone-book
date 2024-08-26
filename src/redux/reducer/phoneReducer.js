let initialization = {
    phone : [],
    keyword : ""
}



const phoneReducer = (state = initialization,action) =>{
    const {type,payload} = action;
    if (type === "ADD-PHONE"){
        return {...state , phone : [...state.phone ,{name : payload.name , number: payload.number}]}
    }else if(type === "KEYWORD"){
        return {...state , keyword: payload.keyword}
    }

    return {...state};
}

export default phoneReducer;