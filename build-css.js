import * as fs from 'fs';

const origin = './styles.css';
const target = './dist/styles.css';

fs.copyFile(origin, target, (err) => {
  if (err) {
    console.log('An error occured while copying the folder.');
    return console.error(err);
  }
  console.log('Copy completed!');

  return true;
});
