//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.data.name)
        let objData = data.data;
        
        document.querySelector('h2').innerText = objData.name
        document.querySelector('img').src = objData.image
        document.querySelector('#explanation').innerText = objData.category
        document.querySelector('#locations').innerText = objData.common_locations
        document.querySelector('#drops').innerText = objData.drops
        document.querySelector('#description').innerText = objData.description
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

fetch(`https://botw-compendium.herokuapp.com/api/v2/all`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  console.log(data.data.creatures)
  console.log(data.data.equipment)
  console.log(data.data.materials)
  console.log(data.data.monsters)
  console.log(data.data.treasure)

})
.catch(err => {
    console.log(`error ${err}`)
});