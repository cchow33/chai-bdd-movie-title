// Write a test to see if a book title will be capitalized:

// 1. import expect method from the chai library. To import, use 'require' followed by the name of the library as a string 'chai'. Now node looks for a package with the same name in 'node modules' directory
var expect = require('chai').expect;
// This is a more efficient way of writing this:
// var chai = require('chai');
// var expect = chai.expect;

// 2. Now use expect method to write some expectations. Pass in a value we want to use for comparion and chain some special chai methods to tell chai what we expect that value to be.
// Example of a test: Expect true to be true: 
// expect(true).to.be.true;

// The code we will write: 
function titleCase(title){
  var words = title.split('');
  // Make a new array 'titleCasedWords' bc you'll eventually need to join the letters back together
  var titleCasedWords = words.map(function(word){
    return word[0].toUpperCase() + word.substring(1);  
  });
  return titleCasedWords.join();
  // capitalize the first character of the title - move to map callback above:
  // return title[0].toUpperCase() + title.substring(1);
}

// The 1st Expectation: titleCase function - expect to get back a string
expect(titleCase('lord of the rings')).to.be.a('string')
// Solve the smallest piece of the problem:
expect(titleCase('a')).to.equal('A');
// Write another test with a bit more complexity - because now all letters are capitalized:
expect(titleCase('lord')).to.equal('Lord');
// The 2nd Expectation: titleCase function -
expect(titleCase('lord of the rings')).to.equal('Lord Of The Rings');
