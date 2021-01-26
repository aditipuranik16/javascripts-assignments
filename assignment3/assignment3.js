//Question1
var library = [
{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];
    
for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    var read = "'" + library[i].author + "'" + ' by ' + library[i].title + ".";
    
    if (library[i].readingStatus) {
      console.log("Already read " + read);
    } 
    else{
     console.log("You still need to read " + book);
    }
}

/*Output -:
Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' 
by Suzanne Collins.*/


//Question2

var msg = 'Enter your age:';
var driver = prompt(msg);

if(driver<18){
    alert("Not legal age to drive");
}
else if(driver >= 18){
    alert("Drive safe");
}

