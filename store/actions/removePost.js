export const REMOVE_POST = 'REMOVE_POST';

export const removePost = (key) =>{
    return{
        type: REMOVE_POST,
        key
    }
}