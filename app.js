function change_color() {
    const para = document.querySelector("#paragraph");
    if  (para.style.backgroundColor == "red"){
        para.style.backgroundColor = "white";
        para.style.color = "black";
        
    } else {
        para.style.backgroundColor = "red";
        para.style.color = "white";
        
    }
}


// function change_color() {
//     const para = document.querySelector("#paragraph");
//     if (para.style.backgroundColor == "black") {
//         para.style.backgroundColor = "white";
//         para.style.color = "black";
//     }
//     else {
//         para.style.backgroundColor = "black";
//         para.style.color = "white";
//     }
// }