const logChar = function(sentence, index) {
  if (!index) {
    index = 0;
  }
  if (index === sentence.length) {
    process.stdout.write("\n");
    return;
  }

  setTimeout(() => {
    process.stdout.write(sentence[index]);
    index += 1;
    logChar(sentence, index);
  }, 50);
};

logChar("hello lighthouse labs");




// const sentence = "carla\n";
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000);
// }





