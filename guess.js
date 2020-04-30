document.getElementById('Guess').onclick=function(){
    var randomno=Math.floor(Math.random()*6);
    if(document.getElementById('guessno').value==randomno)
    {
        alert('Well done you got it right');
    }
    else
    {
        alert('oops the no is'+ randomno);
    }

}