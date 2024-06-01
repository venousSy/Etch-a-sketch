const createGrids = (gridsNumber = 16 * 16) => {
  const wraper = document.querySelector('.wraper')
  for (let i = 0; i < gridsNumber; i++) {
    const grid = document.createElement('div')
    grid.className = 'grid'
    wraper.appendChild(grid)
  }
}
createGrids(16 * 16)

// changing div cololr
const changeDivColor = (e) => {
  const div = e.target
  div.className === 'grid colored' || div.className === 'grid'
    ? div.classList.add('colored')
    : div.classList.remove('colored')
}

const wraper = document.querySelector('.wraper')
wraper.addEventListener('mouseover', changeDivColor)

const setGridsNumber = (promptText = 'choose the grid size under 100') => {
  const root = document.querySelector(':root')
  wraper.innerHTML = ''
  let grids = prompt(promptText)
  if (grids < 100) {
    root.style.setProperty('--main-width', `${960 / grids - 2}PX`)
    root.style.setProperty('--main-height', `${960 / grids - 2}PX`)
    grids *= grids
    createGrids(grids)
    console.log(button)
  } else {
    setGridsNumber('please enter a number under 100')
  }
}

const button = document.getElementById('setGrids')

button.addEventListener('click', setGridsNumber)
console.log(setGridsNumber)
