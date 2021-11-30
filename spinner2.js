const word = "|/-\\|/\\-|";
const animationFun = () => {
  let time = 0;
  for (let char of word) {
    time += 200;
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, time);
  }
};
animationFun();
