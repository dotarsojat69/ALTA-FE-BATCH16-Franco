function makeDiamond(char: string): void {
  const diamondSize = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    let diamond = '';

    for (let i = 0; i < diamondSize; i++) {
        diamond += ' '.repeat(diamondSize - i - 1);
        diamond += String.fromCharCode('A'.charCodeAt(0) + i);
        diamond += ' '.repeat(i * 2 + 1);
        diamond += String.fromCharCode('A'.charCodeAt(0) + i);
        diamond += '\n';
    }

    for (let i = diamondSize - 2; i >= 0; i--) {
        diamond += ' '.repeat(diamondSize - i - 1);
        diamond += String.fromCharCode('A'.charCodeAt(0) + i);
        diamond += ' '.repeat(i * 2 + 1);
        diamond += String.fromCharCode('A'.charCodeAt(0) + i);
        diamond += '\n';
    }

    console.log(diamond);
}



makeDiamond("C");
makeDiamond("E");

export default makeDiamond;
