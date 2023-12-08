// const Selection = (index) =>{
//     selction = document.getElementsByClassName("swicth")

//     for(var i = 0)
// } 

var val

const Select = (i) =>{
    var selection = document.getElementsByClassName("change")

    for(let i = 0; i < selection.length; i++){
        selection[i].style.color = "hsl(217, 12%, 63%)"
        selection[i].style.backgroundColor = "hsl(213, 19%, 18%)"
    }

    selection[i].style.color = "hsl(0, 0%, 100%)"
    selection[i].style.backgroundColor = "hsl(217, 12%, 63%)"
    val = i + 1
} 

const Switch = () =>{
    var box1 = document.getElementById("box1")
    var box2 = document.getElementById("box2")
    var load = document.getElementById("load")

    box1.style.display = "none"
    box2.style.display = "flex"
    load.innerHTML = val
}

// const Select = (index) =>{
//     for(let i = 0; i < document.getElementsByClassName("change").length; i++){
//         document.getElementsByClassName("change")[i].style.color = "hsl(217, 12%, 63%)"
//         document.getElementsByClassName("change")[i].style.backgroundColor = "hsl(213, 19%, 18%)"
//     }

//     document.getElementsByClassName("change")[index].style.color = "hsl(0, 0%, 100%)"
//     document.getElementsByClassName("change")[index].style.backgroundColor = "hsl(217, 12%, 63%)"
//     val = index + 1
// } 

// function ChangeColor(index){

//     for(var i = 0; i < 5; i++){
//         document.getElementsByClassName("change")[i].style.color = "hsl(217, 12%, 63%)"
//         document.getElementsByClassName("change")[i].style.backgroundColor = "hsl(213, 19%, 18%)"
//     }

//     document.getElementsByClassName("change")[index].style.color = "white"
//     document.getElementsByClassName("change")[index].style.backgroundColor = "hsl(217, 12%, 63%)"

//     val = index + 1
// }

// ChangeColor()


