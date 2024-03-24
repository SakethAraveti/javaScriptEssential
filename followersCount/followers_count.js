let cnt=0;
function increaseCount(){
    cnt++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=cnt;
}
function checkCountValue(){
    if(cnt==10){
        alert("Your Instagram account has gained 10 followers! Congratulations!");
    }
    if(cnt==20){
        alert("Your Instagram account has reached 20 followers! Good job!");
    }
}