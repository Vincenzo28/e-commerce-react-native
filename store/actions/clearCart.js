export const CLEAR_CART = 'CLEAR_CART';

export const clearCart = (key) =>{
    return{
        type: CLEAR_CART,
        key
    }
}