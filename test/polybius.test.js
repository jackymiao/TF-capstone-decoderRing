// Write your tests here!
const {polybius} = require('../src/polybius');
const expect = require('chai').expect;


describe("polybius()",()=>{
    it("encode the single word, return a series of number",()=>{
        const actual = "4432423352125413";
        const expected = polybius("thinkful");
        expect(actual).to.eql(expected);
    });
    it("encode the double word, return a series of number with space",()=>{
        const actual = '3251131343 2543241341';
        const expected = polybius("Hello world");
        expect(actual).to.eql(expected);
    });
    it("decode the numbers with space, return a message",()=>{
        const actual = "hello world";
        const expected = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });
    it("decode the numbers, return a message",()=>{
        const actual = "th(i/j)nkful";
        const expected = polybius("4432423352125413", false);
        expect(actual).to.eql(expected);
    });
    it("decode the odd numbers, return false",()=>{
        const actual = false;
        const expected = polybius("44324233521254134", false);
        expect(actual).to.eql(expected);
    });

})
