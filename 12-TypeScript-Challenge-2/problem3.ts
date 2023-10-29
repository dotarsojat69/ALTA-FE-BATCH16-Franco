function makeDiamond(char: string): void {
    const charCodeA = 'A'.charCodeAt(0);
    const charCode = char.charCodeAt(0);
    const numRows = charCode - charCodeA + 1;
  
    
    for (let i = 0; i < numRows; i++) {
      const spaces = ' '.repeat(numRows - i - 1);
      const letters = String.fromCharCode(charCodeA + i).repeat(i * 2 + 1);
      console.log(spaces + letters);
    }
  
   
    for (let i = numRows - 2; i >= 0; i--) {
      const spaces = ' '.repeat(numRows - i - 1);
      const letters = String.fromCharCode(charCodeA + i).repeat(i * 2 + 1);
      console.log(spaces + letters);
    }
  }
  
  
  makeDiamond('C');
  makeDiamond('E');
  
  
  

// export default makeDiamond;
