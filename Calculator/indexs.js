
document.querySelector(".btn1").addEventListener("click", function(){
    var firstNum = parseInt(document.querySelector(".fdigit").value)
 var secNum = parseInt(document.querySelector(".secdigit").value)
     
    var result = parseInt(firstNum + secNum)
 
    document.querySelector("#demo").textContent = result
})

alert("hello")