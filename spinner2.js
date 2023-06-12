const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   '];
let delayTime = 100;
for (let item of arr) {
  setTimeout(() => {
    process.stdout.write(item);
  }, delayTime);
  delayTime += 200;
}