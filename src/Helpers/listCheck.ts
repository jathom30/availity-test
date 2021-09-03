export const lispCheck = (lispCode: string) => {
  // filter white space
  const lispArr = Array.from(lispCode.replaceAll(/\n/g,'').replaceAll(' ',''))

  const openingParens = lispCode.match(/\(/g) || []
  const closingParens = lispCode.match(/\)/g) || []
  // make sure there is an equal number of opening and closing parens
  const equalOpenAndClose = openingParens.length === closingParens.length

  // keep count of opening and closing parens during reduce
  let currentOpenedCount = 0
  let currentClosedCount = 0
  // opening paren count should always be greater than or equal to closing paren count
  const parensCountTest = lispArr.reduce((acc, char) => {
    // if prev loop returned false, it will remain false throughout
    if (!acc) return false
    if (char === '(') currentOpenedCount += 1
    if (char === ')') currentClosedCount += 1
    return currentOpenedCount >= currentClosedCount
  }, true)

  return parensCountTest && equalOpenAndClose
}
