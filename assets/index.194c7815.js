
let height = 0
let width = 0


window.onload = () => {
  // Initial generation of grid
  makeGrid()
}

const makeGrid = () => {
  document.getElementById('grid').innerHTML = ''
  height = document.getElementById('gridHeight').value
  width = document.getElementById('gridWidth').value
  makeRows(width)
}

let button = document.getElementById('submit-btn')
button.addEventListener('click', makeGrid)

// Recursion through row creation
const makeRows = (rows) => {
  if(rows <= 0) {
    return
  }
  let row = document.createElement('div')
  row.id = `row-${rows}`
  row.classList.add('row')

  // Populate rows with columns
  for(let c = 0; c < height; c++) {
    let col = document.createElement('div')
    col.id = `col-${c}`
    col.classList.add('col')
    col.addEventListener('click', () => {
      if(!col.hasAttribute('style')) {
        col.style.backgroundColor = document.getElementById('pixelColor').value
      } else {
        col.removeAttribute('style')
      }
    })
    row.appendChild(col)
  }

  document.getElementById('grid').appendChild(row)
  return makeRows(rows - 1)
}