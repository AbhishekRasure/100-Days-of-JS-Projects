
const incre = document.querySelector("#increment");
const decre = document.querySelector("#decrement");

const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
let inputNum = document.querySelector("#inputNum");

let countResult = 0;
//console.log(countResult);

incre.addEventListener('click', function(){
       countResult++;
       result.innerHTML = countResult;
});


decre.addEventListener("click", function(){
    countResult--;
    result.innerHTML = countResult;
});

reset.addEventListener("click", function(){
    countResult = 0;
    result.innerHTML = countResult;
})
