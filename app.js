document.addEventListener('keypress', function(){
    
    document.getElementById('keyDash').innerHTML = event.key.toUpperCase();
})

document.getElementById('btn').addEventListener('click', function(){
    location.reload();
})