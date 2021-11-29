//  We will call this function in index.html
function changeNumber(){
    //  JS is basically java code inside a website
    //  Will return a randon number between 1 and 6
    document.getElementById("heading").innerHTML= Math.floor(Math.random()*(6-1+1)+1);

}