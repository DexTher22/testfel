const form = document.querySelector('#form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')
const bmiIndex = document.querySelector('#bmiIndex')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Szamit..')
    bmiIndex.value = calculate()
    result = bmiIndex.value
    tableGrey()
    tableGreenRow(result)
})

function calculate() {
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value / 100)
    const result = weight / (Math.pow(height,2))
    return result
}

function tableGrey() {
    document.querySelectorAll('tbody tr').forEach(row => {
        row.classList.remove('table-success')
        
    });
}

function tableGreenRow(bmi){
    document.querySelectorAll('tbody tr').forEach(row => {
        const min = parseFloat(row.dataset.min)
        const max = parseFloat(row.dataset.max)
        if (bmi >= min && bmi <= max) {
        row.classList.add('table-success')
        }
    })
}