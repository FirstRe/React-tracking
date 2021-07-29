const driverdata = (state = [], action) => {
    switch(action.type){
        case 'DRIVERDATA':
            return state = action.payload;
        
        default:
            return state 

    }
};

 

export default driverdata;

