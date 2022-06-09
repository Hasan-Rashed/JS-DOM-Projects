document.getElementById('decreaseBtn').addEventListener('click', () => {
    const value = document.getElementById('output').innerHTML;
    const intValue = parseInt(value);
    document.getElementById('output').innerHTML = intValue - 1;
});

document.getElementById('increaseBtn').addEventListener('click', () => {
    const value = document.getElementById('output').innerHTML;
    const intValue = parseInt(value);
    document.getElementById('output').innerHTML = intValue + 1;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('output').innerHTML = 0;
});