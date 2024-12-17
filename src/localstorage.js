const getStoredBookObject = () =>{
    const storedBookObject = localStorage.getItem('book-objects');
    if(storedBookObject){
        return JSON.parse(storedBookObject);
    }

    return [];
}
const saveBookObject = id =>{
    const storedBookObject = getStoredBookObject();

    const exists = storedBookObject.find(bookID => bookID === id);
    if (!exists){
        storedBookObject.push(id);
        localStorage.setItem('book-objects' , JSON.stringify(storedBookObject))
    }




}

const clearUp = () =>{
    localStorage.clear();
    window.location.reload();
}

export {getStoredBookObject , saveBookObject , clearUp}