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
  const open = closures()[0]
  const close = closures()[1]

  const getMatch = (match: string) => {
    const newMatch = new RegExp(`\\${match}`, 'g')
    return lispCode.match(newMatch) || []
  }

  const openingParens = getMatch(open)
  const closingParens = getMatch(close)
  // make sure there is an equal number of opening and closing parens
  const equalOpenAndClose = openingParens.length === closingParens.length

  // keep count of opening and closing parens during reduce
  let currentOpenedCount = 0
  let currentClosedCount = 0
  // opening paren count should always be greater than or equal to closing paren count
  const parensCountTest = Array.from(lispCode).reduce((acc, char) => {
    // if prev loop returned false, it will remain false throughout
    if (!acc) return false
    if (char === open) currentOpenedCount += 1
    if (char === close) currentClosedCount += 1
    return currentOpenedCount >= currentClosedCount
  }, true)

  return parensCountTest && equalOpenAndClose
}
