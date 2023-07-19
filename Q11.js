var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
]; // input array of objects

var NewLibrary = library.sort((a,b)=>{ //using sort method of array
    return a.title > b.title ? 1 : -1  //sorting on basis of title
})
console.log(NewLibrary)
