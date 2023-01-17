const sentence = "hello there from lighthouse labs \n";
let delay = 1000;

for (let letter of sentence) {
  // print every letter on the same line
  // delay print??
  setTimeout(() => {
    process.stdout.write(letter);
  }, (delay += 50));
}
