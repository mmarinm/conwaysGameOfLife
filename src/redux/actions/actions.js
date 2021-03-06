
export function generateRandomGrid() {
  return {
    type: 'GENERATE_RANDOM'
  };
}

export function toggleCell(x,y){
  return {
    type: 'TOGGLE_CELL',
    x,
    y
  }
}

export function updateGrid(){
   return {
    type: 'UPDATE_GRID',
  }
}

export function updateGeneration(generation){
  return {
    type: 'UPDATE_GENERATION',
    generation
  }
}

export function updatePopulation(population){
  return {
    type: 'UPDATE_POPULATION',
    population
  }
}

export function startGame(){
  return {
    type: 'START_GAME',
  }
}

export function setTimerId(id){
  return {
    type: 'SET_TIMER_ID',
    id
  }
}

export function clearBoard(){
  return {
    type: 'CLEAR_BOARD',
  }
}