function calculate() {
    let n1 = document.getElementById('box').value
    let result = document.getElementById('result')
    let operation = ''
    if (n1 == '') {
        alert('Por favor, Digite um número na caixa!!')
    }else {
        for (let i = 1; i < 11; i++) {
            operation += `${n1} x <strong style='color:#FF6F59;'>${i}</strong> = ${n1 * i}<br> `
            result.innerHTML = operation
        }
    }
}
