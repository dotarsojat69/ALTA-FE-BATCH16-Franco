function compareString(a: string, b: string): string {
  // your code here

    // Get the shorter string length.
    const shorterStringLength = Math.min(a.length, b.length);
  
    // Compare the strings character by character until we reach the end of the shorter string.
    for (let i = 0; i < shorterStringLength; i++) {
      if (a[i] !== b[i]) {
        return a.substring(0, i);
      }
    }
  
    // If the strings are equal, return the shorter string.
    return a.substring(0, shorterStringLength);
  }  


console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA

export default compareString;
