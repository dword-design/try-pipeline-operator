import { map } from 'lodash-es'

console.log([1, 2] |> map(#, value => value + 1))
console.log(map([1, 2], value => value + 1))