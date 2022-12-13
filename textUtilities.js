// 1. import expect method form the chai library. To import, use 'require' followed by the name of the library as a string 'chai'. Now node looks for a package with the same name in 'node modules' directory
var expect = require('chai').expect;
// This is a more efficient way of writing this:
// var chai = require('chai');
// var expect = chai.expect;

// 2. Now use expect method to write some expectations. Pass in a value we want to use for comparion and chain some special chai methods to tell chai what we expect that value to be.
// Expect true to be true: 
expect(true).to.be.true;

// Fix 'titleCase undefined'. And pass in 'title'
function titleCase(title){
  return title;
}

// Expectation #1: titleCase function - expect to get back a string
expect(titleCase('lord of the rings')).to.be.a('string')

// Expectation #2: titleCase function -
expect(titleCase('lord of the rings')).to.equal('Lord of the Rings');
