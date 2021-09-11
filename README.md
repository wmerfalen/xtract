# xtract
Using a simple syntax, it's possible to fetch a value that is deep within a known structure hierarchy.

# Install
```
npm install xtract
```

# Usage
```
const { xt } = require('xtract')
let grocery_list = {
	products: [
		{
			id: 1,
			name: 'apples'
		},
		{
			id: 2,
			name: 'juice'
		},
		{
			id: 3,
			name: 'pears'
		}
	],
	budget: 150.00
}

// To grab the first product's name:
let apples = xt(grocery_list,'products.0.name')

// To grab the entire products array:
let products = xt(grocery_list,'products')

// Grab the budget
let budger = xt(grocery_list,'budget')
```

# What happens if the key is missing?
We simply return null if you attempt to grab something that isn't there.

# Version
1.0.0
