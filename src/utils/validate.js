
const checkExpression = /(^[^0\D][0-9]*$)|(^[^0\D][0-9]*(([\/][1-9][0-9]*$)|([\-][АБВГДЕЖИКЛМНПРСТУФХЦЧШЮЯ]$)))?/mg
export function validation(string) {
  return string.match(checkExpression)[0] == string && string.length != 0;
}
export function validateNumber(checkingHouseNumber) {
  validation(checkingHouseNumber)
    ? alert(`Number: ${checkingHouseNumber} is valid!`)
    : alert(`Number: ${checkingHouseNumber} is invalid!`);
}