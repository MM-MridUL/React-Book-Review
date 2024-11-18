const getStoredWishlist=()=>{
    const storedWishlist=localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}


const saveStoredWishlist=(id)=>{
    const storedWishlists=getStoredWishlist();
    const exist=storedWishlists.find(wishlistId=>wishlistId===id)
    if(!exist){
        storedWishlists.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlists));
    }


}

export {getStoredWishlist,saveStoredWishlist}