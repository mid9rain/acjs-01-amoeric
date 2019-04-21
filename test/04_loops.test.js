// �虾隞亦�讠�𧢲葫閰虫�暻潘�䔶��糓銝滚虾隞交㺿�坔撐瑼娍���𢛵��
let {numbers, eachAddOne, onlyEven} = require('../04_loop.js')

test('numbers', () => {
  expect(numbers).toEqual([5, 7, 9, 11, 13, 15])
})

test('eachAddOne', () => {
  expect(eachAddOne([1, 2, 4, 5, 8, 10])).toEqual([2, 3, 5, 6, 9, 11])
  expect(eachAddOne([2, 3, 4])).toEqual([3, 4, 5])
})

test('onlyEven', () => {
  expect(onlyEven([1, 2, 3, 4, 5, 8, 9, 10])).toEqual([2, 4, 8, 10])
  expect(onlyEven([1, 3, 5, 7, 9])).toEqual([])
})