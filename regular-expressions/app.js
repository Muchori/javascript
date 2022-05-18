/**
 * Regular expression
 * Used to
 * -> describe a pattern of characters -> pattern matching, searching,
 * -> for validation etc
 */

let re1;
re1 = /hello/;
re1 = /hello/i;
// re = /hello/g;
// i -> case insensitive
// g -> global search
// console.log(re);
// console.log(re.source);

/**
 * exec() -> returns result in an array or null
 */
const result = re1.exec("hello world");
/* console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input); */

/**
 * test() -> returns tru of false if there is a match
 */
const response = re1.test("Hello");
//console.log(response);

/**
 * match() -> returns reult array or null
 */
const str2 = "Hello There";
const results = str2.match(re1);
//console.log(results);

/**
 * search() -> returns the index of the first match & if not found return -1
 */
const strs3 = "Hello There";
const result1 = strs3.search(re1);
//console.log(result1);

/**
 * replace() -> returns a new string with some or a; matches of a pattern
 */

const str1 = "Hello There";
const newStr = str1.replace(re1, "hi");
//console.log(newStr);

/**
 * Patterns and Metacharacters Symbols
 */
let re;
// literal characters
// re = /hello/;
// re = /hello/i;

// metacharacters sysmbols
re = /^h/i; // must start with
re = /d$/i; // must ends with
re = /^hello$/i; // must begin and end with
re = /^h.llo$/i; // mathces any ONE character
re = /h*llo/i; // mathces any character 0 or more times
re = /gre?a?y/i; //optional character
re = /gre?a?y\?/i; //escape character

/**
 * character sets using brackets []
 */
re = /gr[ae]y/i; // must be an a or e
re = /[GX]ray/i; // must be an X or G case sensitive
re = /[^GX]ray/i; // must be anything except X or G case sensitive
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

/**
 * Braces {} -> Quantifiers
 */

re = /Hel{2}o/i; // must occur exactly {m} number of times
re = /Hel{2,4}o/i; // must occur exactly {m} number of times
re = /Hel{2,}o/i; // must occur exactly {m} times

/**
 * Parenthesis () -> Grouping
 */

re = /([0-9]x){3}/;

/**
 * short-hand character classes
 */
re = /\w/; // word character - alphanumric or _(underscore)
re = /\w+/; // + -> one or more characters - alphanumric or _(underscore)
re = /\W/; // NON-word characters - alphanumric or _(underscore)
re = /\d/; // match any digit
re = /\d+/; // match all digits 0 or more times
re = /\D/; // match any NON-digit
re = /\s/; // match white space character
re = /\S/; // match NON-white space character
re = /Hell\b/i; // word boundary

/**
 * assertion -conditionals
 */

re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y

// string to match
const str = "gfgxsd";
const result_s = re.exec(str);
//results
console.log(result_s);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}
reTest(re, str);
