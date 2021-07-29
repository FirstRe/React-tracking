const data = (state = "", action) => {
    switch(action.type){
        case 'UPDATEDATA':
            return state = action.payload;
        
        default:
            return state 

    }
};

 

export default data;

