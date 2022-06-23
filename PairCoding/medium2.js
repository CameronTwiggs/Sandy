function anagram(str1,str2) {
   let a = str1.split("").toLowerCase(); // ["a","r","m","s"]
   let b = str2.split("").toLowerCase(); // ["m","a","r","s"]
   a.sort();  // ["a","r","m","s"]
   b.sort();  // ["a","r","m","s"]
   a = a.join(); // arms
   b = b.join(); // arms
   console.log(a == b)
}

anagram("arms","mars")

// by Cameron with help from Somesh