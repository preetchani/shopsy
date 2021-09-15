export const addItemToCart = (cartItems,cartItemToAdd)=>{
    //check for existing items
    const existingItems = cartItems.find(item=>item.id===cartItemToAdd.id);

    if(existingItems){
        //if item already exists in cartitem array then return new array with increasing quantity
        return cartItems.map(
            item=>item.id===cartItemToAdd.id?{...item,quantity:item.quantity+1}
            :item
        );
    }
    //if item don't exists in cart array return array with appendded new item and quantity property
    return [...cartItems,{...cartItemToAdd,quantity:1}];
};
