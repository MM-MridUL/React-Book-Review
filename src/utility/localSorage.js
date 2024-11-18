const getStoredBook=()=>{
    const storedBook=localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const svaeStoredBook=(id)=>{

    const storedBooks=getStoredBook();
    const exist=storedBooks.find(bookId=>bookId===id)
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('book',JSON.stringify(storedBooks));
    }
}


export {getStoredBook,svaeStoredBook}