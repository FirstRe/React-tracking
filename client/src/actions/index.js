
export const statuslogin = (st) =>{
    return{
        type: 'SIGN_IN',
        payload: st
    };

};

export const update = (st) =>{
    return{
        type: 'UPDATE',
        payload: st
    };

};

export const updateimg = (st) =>{
    return{
        type: 'UPDATEIMG',
        payload: st
    };

};

export const updatedata = (st) =>{
    return{
        type: 'UPDATEDATA',
        payload: st
    };

};
export const updatedriver1= (st) =>{
    return{
        type: 'UPDATEDRIVER1',
        payload: st
    };

};
export const updatedriver2 = (st) =>{
    return{
        type: 'UPDATEDRIVER2',
        payload: st
    };

};
export const updaterequest = (st) =>{
    return{
        type: 'UPDATERE',
        payload: st
    };

};

export const increment = (nr) =>{
    return{
        type: 'INCREMENT',
        payload: nr
    };

};

export const updatedriverdata = (st) =>{
    return{
        type: 'DRIVERDATA',
        payload: st
    };

};