const pokmeonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokmon_number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.button btn-prev');
const buttonNext = document.querySelector('.button btn-next');


const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    if (APIresponse.status === 200){
        const data = await APIresponse.json();
        return data;
    }
    
}

const renderPokemon = async(pokemon) =>{

    pokmeonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''
    const data = await fetchPokemon(pokemon)
    if(data){
        
        pokemonNumber.innerHTML = data.id
        pokmeonName.innerHTML = data.name
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value='';
    }else{
        pokmeonName.innerHTML = 'Not Found :c';
        pokemonNumber.innerHTML = ''
    }
  
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value);
    
})

buttonNext.addEventListener('onclick', ()=> {
    alert('teste')
    
})

buttonPrev.addEventListener('onclick', ()=> {
    alert('teste')
    
})

renderPokemon('1')