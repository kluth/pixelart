
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
  makeRows(height)
  makeCols(width)
}

let button = document.getElementById('submit-btn')
button.addEventListener('click', makeGrid)


const makeRows = (rows) => {
  for(let r = 0; r < rows; r++) {
    let row = document.createElement('div')
    row.id = `row-${r}`
    row.classList.add('row')
    document.getElementById('grid').appendChild(row)
  }
}

const makeCols = (cols) => {
  for(let r = 0; r < height; r++) {
    for(let c = 0; c < width; c++) {
      let col = document.createElement('div')
      col.id = `col-${c}`
      col.classList.add('col')
      col.addEventListener('click', () => {
        if(!col.hasAttribute('style')){
          col.style.backgroundColor = document.getElementById('pixelColor').value
        } else {
          col.removeAttribute('style')
        }
      })
      document.getElementById(`row-${r}`).appendChild(col)
    }
  }
}