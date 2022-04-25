function validateFields() {
  let msg = ''

  const newDate = document.querySelector('#date').value
  const ticker = document.querySelector('#ticker').value
  const quantity = document.querySelector('#quantity').value
  const unitPrice = document.querySelector('#unitPrice').value
  console.log(newDate)
  console.log(ticker)
  console.log(quantity)
  console.log(unitPrice)
  if (newDate === '' || ticker === '' || quantity === '' || unitPrice === '') {
    msg = 'Preenchimento inválido'
  }
  console.log(msg)
  if (msg != '') {
    alert(msg)
    return false
  }
  return true
}

function save() {
  const isValid = validateFields()

  if (isValid) {
    const bodyTable = document.querySelector('.bodyTable')

    const newRow = bodyTable.insertRow()

    const newDate = newRow.insertCell()
    const newTicker = newRow.insertCell()
    const newQuantity = newRow.insertCell()
    const newUnitPrice = newRow.insertCell()
    const newTotal = newRow.insertCell()

    const selectedDate = document.querySelector('#date').value
    newDate.innerText = selectedDate
    newDate.classList.add('center')

    const selectedTicker = document.querySelector('#ticker').value
    newTicker.innerText = selectedTicker.trim().toUpperCase()

    const selectedQuantity = document.querySelector('#quantity').value
    newQuantity.innerText = selectedQuantity

    const selectedUnitPrice = document.querySelector('#unitPrice').value
    newUnitPrice.innerText = selectedUnitPrice
    newTotal.innerText = selectedQuantity * selectedUnitPrice
  }
}
