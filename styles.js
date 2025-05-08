const zooGrid = document.querySelector('.zoo-grid');
const toggleButton = document.getElementById('toggle-layout');

let isGrid = true;

toggleButton.addEventListener('click', () => {
  if (isGrid) {
    zooGrid.style.display = 'flex';
    zooGrid.style.flexDirection = 'row';
    zooGrid.style.flexWrap = 'wrap';
    zooGrid.style.justifyContent = 'center';
    zooGrid.style.gap = '20px';
    zooGrid.style.padding = '20px';
    toggleButton.textContent = 'Canvia a Grid';
  } else {
    zooGrid.style.display = 'grid';
    zooGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    zooGrid.style.gap = '20px';
    zooGrid.style.padding = '20px';
    toggleButton.textContent = 'Canvia a Flex';
  }
  isGrid = !isGrid;
});
