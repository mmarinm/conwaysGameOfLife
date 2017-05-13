
export function generateRandomGrid() {
  return {
    type: 'GENERATE_RANDOM'
  };
}

export function toggleCell(id){
  return {
    type: "TOGGLE_CELL",
    id
  }
}