// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('gridContainer');

  // Function to create the initial 16x16 grid
  function createGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
    container.style.gridTemplateRows = `repeat(${rows}, 30px)`;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
      }
    }

    // Add the hover effect to the grid items
    addHoverEffectToGridItems();
  }

  // Function to add the hover effect to the grid items
  function addHoverEffectToGridItems() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
      item.addEventListener('mouseover', function() {
        // Generate a random color for the trail effect
        const randomColor = getRandomColor();
        this.style.backgroundColor = randomColor;
      });
    });
  }

  // Function to clear the existing grid
  function clearGrid() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  // Function to prompt the user for a new grid size and create the grid
  function promptAndCreateGrid() {
    let gridSize = prompt('Enter the number of squares per side (max 100):', '16');
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert('Invalid input. Please enter a number between 1 and 100.');
      return;
    }

    clearGrid();
    createGrid(gridSize, gridSize);
  }

  // Call the function to create the initial 16x16 grid
  createGrid(16, 16);

  // Add event listener to the reset button
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', promptAndCreateGrid);

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
