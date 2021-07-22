const justiceLeague = [
  { name: "Kara In-Ze", age: 33, alias: "Supergirl" },
  { name: "Dorian Chase", age: 47, alias: "Vigilante" },
  { name: "Diana Prince", age: 140, alias: "Wonder Woman" },
]

//step one create a new feature branch to work from

//step two add this JavaScript file to index.html

//step three add the following functionality:
// when a name is clicked on a card with the rest of their info is displayed in div .two
function heroDetails(hero){
  for (let i=0;i<justiceLeague.length;i++){
    if(hero === justiceLeague[i].alias){
      return justiceLeague[i]
    }
  }
}

function createContent(hero){
  const info = `
  <div id ="hero-card">
    <p>Name: ${hero.name}</p>
    <p>Age: ${hero.age}</p>
    <p>Alias: ${hero.alias}</p>
  </div>
  `
  return info
}

function insertHTML(info){
  let divTwo = document.querySelector('.two')
  divTwo.innerHTML = info
}

const divOne = document.querySelector(".one")
divOne.addEventListener('click', (ev)=>{
  const hero = ev.target.textContent;
  insertHTML(createContent(heroDetails(hero)))
})



// use only one event listener on div .one (event object and bubbling hint hint)
// if a second name is clicked the first card disapears and is replaced by a new card 
// only one card can be displayed at a time.
// hint .remove()
// use a template created with a template literal for your new card.
// hint including a div in your template will help with removing it.

//step four add just enough styling to make your app look a little nicer, without removing any of the existing styling.