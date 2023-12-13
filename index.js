//DOM Functions
function renderOneCar(car){
    //Build Car
    let card = document.createElement("li")
    card.className  ='card'
    card.innerHTML = `
        <img src = "${car.ImageURL}"
        <div class="content">
            <h3>${car.Name}</h3>
            <p>Year: ${car['Year']}</p>
            <p>Power: ${car['Power(hp)']}hp</p>
            <p>Torque: ${car['Torque(Nm)']}Nm"</p>
            <p>Price: ${car['Price']}"</p>
            <p>Engine: ${car['Engine']}</p>

        </div>
        <div>
            <button class="button"> Delete </button>
        </div>

        `

// Add Car card to DOM
document.querySelector('#car-list').appendChild(card)
}

//Fetch Requests
// Get Fetch for all Car resources
function getAllCars(){
    fetch(' http://localhost:3000/Cars')
    .then(res => res.json())
    .then(carData => carData.forEach(car => renderOneCar(car))) 
}
//Initial Render
function initialize(){
    getAllCars()
}

initialize()