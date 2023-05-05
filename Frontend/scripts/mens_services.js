let data=[
    {
        name:"Spiky Haircut",
        image:"https://menshairstyletips.com/wp-content/uploads/2017/10/5-Quiff-with-Waves.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://www.apetogentleman.com/wp-content/uploads/2021/05/bald-fade-buzz-cut.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },

    {
        name:"Spiky Haircut",
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://www.apetogentleman.com/wp-content/uploads/2021/05/bald-fade-buzz-cut.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://menshairstyletips.com/wp-content/uploads/2017/10/5-Quiff-with-Waves.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },

    {
        name:"Spiky Haircut",
        image:"https://www.apetogentleman.com/wp-content/uploads/2021/05/bald-fade-buzz-cut.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://menshairstyletips.com/wp-content/uploads/2017/10/5-Quiff-with-Waves.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://menshairstyletips.com/wp-content/uploads/2017/10/5-Quiff-with-Waves.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://www.apetogentleman.com/wp-content/uploads/2021/05/bald-fade-buzz-cut.jpg",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    
]

async function fetching(){
    let res=await fetch("");
    res.then((res)=>{})
}

renderCard(data)

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

        button.addEventListener("click",function(){
        
        })    

        imagediv.append(img)
        content.append(name,price,description,button)
        card.append(imagediv,content)

        document.querySelector(".container").append(card)
    });
}