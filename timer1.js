process.stdout.write('\x07');

setTimeout(() => {
  process.stdout.write('\x07|   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\x07/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\x07-   ');
}, 9000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\x07\\   '); 
}, 10000);

setTimeout(() => {
  process.stdout.write('\x07-   ');
}, 15000);