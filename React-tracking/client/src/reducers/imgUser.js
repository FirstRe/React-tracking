const imgUser = (state = "" , actionimg) => {
    switch(actionimg.type){
        case 'UPDATEIMG':
            return state = actionimg.payload;
        
        default:
            return state ;

    }
};



export default imgUser;

