const parseArgs = () => {
  const arr = process.argv;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].startsWith('--')) {
      console.log(`${arr[i].slice(2)} is ${arr[i + 1]}`);
    }
  }
};

parseArgs();
