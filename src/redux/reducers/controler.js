export const generationReducer = (state=0, action) => {
    if (action.type === 'UPDATE_GENERATION') {
        if(action.generation || action.generation === 0){
            return action.generation
        }
        const generation = state + 1;
        return generation
    } else {
        return state
    }
}

export const populationReducer = (state=0, action) => {
    if (action.type === 'UPDATE_POPULATION') {
        return action.population;
    } else {
        return state;
    }   
}

export const startReducer = (state=false, action) => {
    if(action.type === 'START_GAME') {
        return !state;
    } else {
        return state;
    }
}

export const timerReducer = (state=null, action) => {
    if(action.type === 'SET_TIMER_ID'){
        return action.id
    } else {
        return state
    }
}