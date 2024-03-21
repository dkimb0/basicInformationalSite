const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
// console.log(myUrl);
console.log(myUrl.toString())

console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

console.log(myUrl.searchParams);
myUrl.searchParams.append('name1','value1');
myUrl.searchParams.append('name2','value2');
console.log(myUrl.searchParams);

console.log(myUrl.href)

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))