export const lispCheck = (lispCode: string, kind?: '(' | '[' | '{' | '<') => {
  const closures = (): [string, string] => {
    switch (kind) {
      case '[':
        return ['[', ']']
      case '{':
        return ['{', '}']
      case '<':
        return ['<', '>']
      default:
        return ['(', ')']
    }
  }

  const getMatch = (match: string) => {
    const newMatch = new RegExp(`\\${match}`, 'g')
    return lispCode.match(newMatch) || []
  }

  // const openingParens = lispCode.match(/\(/g) || []
  // const closingParens = lispCode.match(/\)/g) || []
  const openingParens = getMatch(closures()[0])
  const closingParens = getMatch(closures()[1])
  // make sure there is an equal number of opening and closing parens
  const equalOpenAndClose = openingParens.length === closingParens.length

  // keep count of opening and closing parens during reduce
  let currentOpenedCount = 0
  let currentClosedCount = 0
  // opening paren count should always be greater than or equal to closing paren count
  const parensCountTest = Array.from(lispCode).reduce((acc, char) => {
    // if prev loop returned false, it will remain false throughout
    if (!acc) return false
    if (char === closures()[0]) currentOpenedCount += 1
    if (char === closures()[1]) currentClosedCount += 1
    return currentOpenedCount >= currentClosedCount
  }, true)

  return parensCountTest && equalOpenAndClose
}
