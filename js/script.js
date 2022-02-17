window.onload = function() {
    var i = 0;
    var txt = 'I am Samiksha';
    var speed = 150;

    function type() {
        if(document.getElementById("intro") != null) {    
            if (i < txt.length) {    
                document.getElementById("intro").innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }   
    }
    type()
}