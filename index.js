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

 // Delete card from DOM       `
 card.querySelector('#delete').addEventListener('click',()=>{
    card.innerHTML =''
    deleteCar(car.id)
 })
//Update Car price in the card
card.querySelector("#UpdatePrice").addEventListener('submit',(e)=>{
    e.preventDefault()
    car['Price'] = `${e.target.UpdatePrice.value} AUD`;
    console.log(car['Price'])
    UpdatePrice(car)
})
// Add Car card to DOM
document.querySelector('#car-list').appendChild(card)
}

function AddCar(event){
    event.preventDefault()
    let carObj = {
        Name: event.target.carName.value,
        Year: event.target.carYear.value,
        Price: event.target.carPrice.value,
        Power: event.target.carPower.value,
        Torque: event.target.carTorque.value,
        Engine: event.target.carEngine.value,
        ImageURL: event.target.carImageURL.value
    }
    console.log(carObj)
    renderOneCar(carObj)
    UploadCarData(carObj)
    
}
//Fetch Requests
// Get Fetch for all Car resources
function getAllCars(){
    fetch(' http://localhost:3000/Cars')
    .then(res => res.json())
    .then(carData => carData.forEach(car => renderOneCar(car))) 
}

// Post Car Data
function UploadCarData(carObj){
    fetch("http://localhost:3000/Cars",{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(carObj)
    })
    .then(res => res.json())
    .then(car => console.log(car))
}


//Delete Car entry
function deleteCar(id){
    fetch(`http://localhost:3000/Cars/${id}`,{
    method:'DELETE',
    headers:{
        'Content-Type':"application/json"
    }
    })
    .then(res => res.json())
    .then(car => console.log(car))
}

//Initial Render
function initialize(){
    getAllCars()
}

initialize()
