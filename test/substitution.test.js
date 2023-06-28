// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution()",()=>{
    it("encode the message and return a secret text",()=>{
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("encode the message with space and return a secret text with space",()=>{
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("decode the secret message to message text",()=>{
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });
    it("encode the message with special character to secret text",()=>{
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.eql(expected);
    });
    it("decode the secret message with special character to message text",()=>{
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.eql(expected);
    });
    it("return false if input alphabet too short",()=>{
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.eql(expected);
    });
    it("return false if input alphabet has duplicated characters",()=>{
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.eql(expected);
    });

})