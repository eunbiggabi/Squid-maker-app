const functions = require('./testFunctions')


describe("Search components", () => {
  it("Find index", () => {
    expect(functions.findIndex("Kyu")).toBe(0)
    expect(functions.findIndex("Chloe")).toBe(1)
    expect(functions.findIndex("Mike")).toBe(2)
  })

  it("Search input from Data", () => {
      const input1 = "kyu"
      const input2 = "chloe"
      const input3 = "mike"
      expect(functions.searchInputFromData(input1)).toBe("kyu")
      expect(functions.searchInputFromData(input2)).toBe("chloe")
      expect(functions.searchInputFromData(input3)).toBe("mike")
  })
})