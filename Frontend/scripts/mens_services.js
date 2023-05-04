let data=[
    {
        name:"Spiky Haircut",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTAFFk4gakMkJIDPL4EuFhYV2_PRTzRlN2w&usqp=CAU",
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
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
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
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
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
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
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
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    },
    {
        name:"Spiky Haircut",
        image:"https://media6.ppl-media.com/mediafiles/blogs/image_6c98364846.png",
        price:125,
        description:"A popular haircut that involes using hair gel or wax to create a spiky look on top, while keeping the sides and back shorter"
    }
]

renderCard(data)

function renderCard(data){

    document.querySelector(".grid").innerHTML=""

    data.forEach(ele => {

        let item=document.createElement("div")
        item.setAttribute("class","item")

        let a=document.createElement("a")
        a.setAttribute("href","#0")
        a.setAttribute("aria-labelledby",`${ele.name}`)
       

        let image = document.createElement("img")
        image.setAttribute("src",ele.image)
        image.setAttribute("class","image")

        let item__overlay=document.createElement("div")
        item__overlay.setAttribute("class","item__overlay")

        let item__body=document.createElement("div")
        item__body.setAttribute("class","item__body")

        let name = document.createElement("h3")
        name.textContent=ele.name
        name.setAttribute("id",`${ele.name}`)
        name.setAttribute("aria-hidden","true")

        let price = document.createElement("p")
        price.textContent=`Price:₹${ele.price}`
        price.setAttribute("id",`price`)
        price.setAttribute("aria-hidden","true")

        let description = document.createElement("p")
        description.textContent=ele.description
        description.setAttribute("class","description")

        item__body.append(description)
        item__overlay.append(name,price,item__body)
        item.append(a,image,item__overlay)

        document.querySelector(".grid").append(item)
    });
}