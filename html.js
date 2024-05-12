var a = "trvy@gmail.com" ;
var b = "abcde" ;

var button = document.querySelector("#button");
var email = document.querySelector("#email");

 
function handleClick(){
    var value = email.value
    switch (value){
        case "value === a":
            console.log("Đăng nhập thành công");
            break;
        
        default:
            console.log("Đăng nhập thất bại");
            break;
        
    }   
}
 

button.addEventListener("click", handleClick)
 