

export const update = (st) =>{
    return{
        type: 'UPDATE',
        payload: st
    };

};
export const increment = (nr) =>{
    return{
        type: 'INCREMENT',
        payload: nr
    };

};