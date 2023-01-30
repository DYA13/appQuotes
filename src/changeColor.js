const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

export const changeColor = (bgColor, setBgColor) => {
  let color = Math.floor(Math.random() * colors.length);
  setBgColor(color);
  document.body.style.backgroundColor = `${colors[bgColor]}`
}