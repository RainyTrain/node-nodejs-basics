const parseEnv = () => {
  Object.entries(process.env).map(([key, value]) => {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${value};`);
    }
  });
};

parseEnv();
