const assert = require('assert').strict
const path = require('path')
const xt = require(path.join(__dirname,'../src/xtract'))

function tests(){
let test = {
	products: [
		{
			id: 1,
			name: 'apple',
		},
		{
			id: 2,
			name: 'juice',
		}
	]
}

console.log('checking products.1.id...')
assert.strictEqual(xt(test,'products.1.id'), 2)

console.log('checking products...')
assert.strictEqual(Array.isArray(xt(test,'products')), true)

console.log('checking invalid fetch of "h.t.a.h"...')
assert.strictEqual(xt(test,'h.t.a.h'), null)

console.log('checking invalid fetch of (native) null...')
assert.strictEqual(xt(test,null), null)
}

tests()
