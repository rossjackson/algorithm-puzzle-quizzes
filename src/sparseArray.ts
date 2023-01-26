const matchingStrings = (stringList: string[], queries: string[]) => {
   const sortedTotal = new Map<string, number>()

   for (let idx = 0; idx < stringList.length; idx++) {
      sortedTotal.set(stringList[idx], (sortedTotal.get(stringList[idx]) ?? 0) + 1)
   }

   return queries.map((q) => sortedTotal.get(q) ?? 0)
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
