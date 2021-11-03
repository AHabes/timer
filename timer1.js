const timer = times => {
  times
    .filter(a => a >= 0)
    .filter(Number)
    .sort((a, b) => a - b)
    .forEach(time => {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time);
    });
};

const times = process.argv.slice(2);
timer(times);