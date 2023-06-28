// Write your tests here!
const {caesar} = require("../src/caesar")
const expect = require("chai").expect;
describe("caesar()",()=>{
    it("encode one word, shift is positive, should return the right secret code",()=>{
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.eql(expected);
    });
    it("encode one word, shift is negative, should return the right secret code",()=>{
        const expected = 'qefkhcri';
        const actual = caesar("thinkful", -3);
        expect(actual).to.eql(expected);
    });
    it("decode one word, shift is positive, should return the right text",()=>{
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    });
    it("encode a sentence, shift is positive, should return the right secret code",()=>{
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.eql(expected);
    });
    it("decode a sentence, shift is positive, should return the right text",()=>{
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.eql(expected);
    });
    it("receive a message, but without shift",()=>{
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.eql(expected);
    });
    it("receive a message, but shift is bigger than 25",()=>{
        const expected = false;
        const actual = caesar("thinkful",99);
        expect(actual).to.eql(expected);
    });
    it("receive a message, but shift is smaller than -25",()=>{
        const expected = false;
        const actual = caesar("thinkful",-26);
        expect(actual).to.eql(expected);
    });
})