/*global alert , console , document ,window ,pageYOffset*/
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */

var myButton = document.getElementById("click");

window.onscroll = function () {
    
    'use strict';
    
    if (pageYOffset >= 600) {
       
        myButton.style.display = 'block';
        
       
    } else {
        
        myButton.style.display = 'none';
        
    }
    
    
};

myButton.onclick = function () {
    
    'use strict';
    
    window.scrollTo(0, 0);
    
};
    
