const getStoredWishObject = () =>{
    const storedWishObject = localStorage.getItem('wish-objects');
    if(storedWishObject){
        return JSON.parse(storedWishObject);
    }

    return [];
}
const saveWishObject = id =>{
    const storedWishObjects = getStoredWishObject();

    const exists = storedWishObjects.find(bookID => bookID === id);
    if (!exists){
        storedWishObjects.push(id);
        localStorage.setItem('wish-objects' , JSON.stringify(storedWishObjects))
    }




}

const clearUp = () =>{
    localStorage.clear();
    window.location.reload();
}

export {getStoredWishObject , saveWishObject , clearUp}