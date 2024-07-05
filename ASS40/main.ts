// ASSIGNMENT:40
// 40.	Album: Write a function called make_album() that builds a Object describing
// a music album. The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. Use
// the function to make three dictionaries representing different albums. Print
// each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks 
// on an album. If the calling line includes a value for the number of tracks, add that value 
// to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function myAlbum1(artistName: string , albumTitle: string){
    return {artistName , albumTitle}
}

let album1 = myAlbum1("Ali" , "Rang-e-Mohabat");
let album2 = myAlbum1("Madad" , "Roshan Andhera");
let album3 = myAlbum1("Ayaz" , "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string , albumTitle: string , numberofTrack?: number) {
    return {artistName , albumTitle , numberofTrack}
}

let album4 = myAlbum2("Ali" , "dil hai" , 30);
let album5 = myAlbum2("Madad" , "ajeeeb kahani" , 55);
let album6 = myAlbum2("babar" , "typescript ki coding");

console.log(album4);
console.log(album5);
console.log(album6);