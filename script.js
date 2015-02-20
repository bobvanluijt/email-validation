/*
 * A simple validation script by Bob
 */
 
function validateEmail(v){
    var a = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    var b = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    var c = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    var d = '\\x5c[\\x00-\\x7f]';
    var e = '\\x5b(' + b + '|' + d + ')*\\x5d';
    var f = '\\x22(' + a + '|' + d + ')*\\x22';
    var g = c;
    var h = '(' + g + '|' + e + ')';
    var i = '(' + c + '|' + f + ')';
    var j = h + '(\\x2e' + h + ')*';
    var k = i + '(\\x2e' + i + ')*';
    var l = k + '\\x40' + j;
    var m = '^' + l + '$';
    var n = new RegExp(m);
    if (n.test(v)) {
      return true;
    }
    return false;
}

/*
 * mini
 */
function validateEmail(a){var b="[^\\x0d\\x22\\x5c\\x80-\\xff]",c="[^\\x0d\\x5b-\\x5d\\x80-\\xff]",d="[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+",e="\\x5c[\\x00-\\x7f]",f="\\x5b("+c+"|"+e+")*\\x5d",g="\\x22("+b+"|"+e+")*\\x22",h=d,i="("+h+"|"+f+")",j="("+d+"|"+g+")",k=i+"(\\x2e"+i+")*",l=j+"(\\x2e"+j+")*",m=l+"\\x40"+k,n="^"+m+"$",o=new RegExp(n);return o.test(a)?!0:!1}
