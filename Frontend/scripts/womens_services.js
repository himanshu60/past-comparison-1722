

let baseurl="http://localhost:4500"
let arr
fetchdata()

async function fetchdata(){
    try{
        let res  = await fetch(`${baseurl}/styles/female`)
        data = await res.json()
        arr=data
        renderCard(arr)
    }
        catch(err){
        console.log(err)
    }
}


function renderCard(data){

document.querySelector(".container").innerHTML=""

data.forEach(ele => {

    let card=document.createElement("div")
    card.setAttribute("class","card")

    let imagediv=document.createElement("div")
    imagediv.setAttribute("class","image")

    let img = document.createElement("img")
    img.setAttribute("src",ele.image)
    img.setAttribute("href","#")

    let content=document.createElement("div")
    content.setAttribute("class","content")

    let name = document.createElement("h3")
    name.textContent=ele.name
    name.setAttribute("id",`${ele.name}`)

    let price = document.createElement("p")
    price.textContent=`Price:₹${ele.price}`
    price.setAttribute("id",`price`)

    let description = document.createElement("p")
    description.textContent=ele.description
    description.setAttribute("class","description")

    let button = document.createElement("button")
    button.textContent="Book"
    button.setAttribute("id","Book")

    button.addEventListener("click",function(e){
        localStorage.setItem("style_id", JSON.stringify(ele._id));
        console.log(ele._id);
        window.location="./time_styler.html"
    })    

    imagediv.append(img)
    content.append(name,price,description,button)
    card.append(imagediv,content)

    document.querySelector(".container").append(card)
});
}