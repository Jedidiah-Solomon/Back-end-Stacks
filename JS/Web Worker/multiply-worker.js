
self.onmessage = (event) => {
    const { num1, num2 } = event.data;
    const product = num1 * num2;
    self.postMessage(product);
  };
  