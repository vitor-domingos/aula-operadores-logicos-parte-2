
// E (AND)
const a = 2
const b = 2

// Verifica se 'a' é igual a 'b' e se 'a' é menor ou igual a 'b'
console.log(a === b && a <= b)  // Deve imprimir true

const c = 3
const d = 5

// Verifica se 'c' não é igual a 'd' e se 'c' é maior ou igual a 'd'
console.log(c != d && c >= d)  // Deve imprimir false

const e = 10
const f = "10"

// Verifica se 'e' é estritamente igual a 'f' (mesmo valor e mesmo tipo) e se 'e' é igual a 'f' (mesmo valor)
console.log(e === f && e == f)  // Deve imprimir false

const g = "15"
const h = "15"

// Verifica se 'g' não é estritamente igual a 'h' (mesmo valor, mas tipos diferentes) e se 'g' é maior que 'h'
console.log(g !== h && g > h)  // Deve imprimir false

// (NOT)
const i = 25
const j = 20

// Verifica se a negação de 'i' não é igual a 'j' (ou seja, 'i' é igual a 'j')
console.log(!(i != j))  // Deve imprimir false

const k = "30"
const l = 30

// Verifica se a negação de 'k' não é igual a 'l' (ou seja, 'k' é igual a 'l')
console.log(!(k != l))  // Deve imprimir true

//  OU (OR)
const m = 50
const n = "40"

// Verifica se 'm' não é igual a 'n' ou se 'm' é maior ou igual a 'n'
console.log(m != n || m >= n)  // Deve imprimir true

const p = "70"
const q = 70

// Verifica se 'p' é maior ou igual a 'q' ou se 'p' é estritamente igual a 'q' (mesmo valor, mas tipos diferentes)
console.log(p >= q || p === q)  // Deve imprimir true

const r = 75
const s = 80

// Verifica se 'r' é maior ou igual a 's' ou se 'r' não é igual a 's'
console.log(r >= s || r != s)  // Deve imprimir true

const t = 85
const u = "85"

// Verifica se 't' não é igual a 'u' ou se 't' é menor que 'u'
console.log(t != u || t < u)  // Deve imprimir false



