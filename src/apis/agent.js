
const Counter = {
  getCounter: () => {
    return new Promise((resolve, reject) => {
      console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 1000);
    });
  }
};

export default {
  Counter
};