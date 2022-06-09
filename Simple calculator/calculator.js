// calculate all the things
function calculate(btnInput){
    document.getElementById('input').value += btnInput;
}

// equal
document.getElementById('total').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    document.getElementById('input').value = eval(input);
});

// clear input
document.getElementById('allClear').addEventListener('click', () => {
    document.getElementById('input').value = '';
});