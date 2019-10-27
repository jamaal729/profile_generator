const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question(`What's your name? Nicknames are also acceptable :)\n`, (answer1) => {
  // console.log(`: ${answer}`);
  profile += answer1.substring(0, 1).toUpperCase() + answer1.substring(1, answer1.length);

  rl.question(`What's an activity you like doing?\n`, (answer2) => {
    // console.log(`: ${answer}`);
    profile += " enjoys playing " + answer2;

    rl.question(`What do you listen to while doing that?\n`, (answer3) => {
      // console.log(`: ${answer}`);
      profile += " and likes to listen to " + answer3;

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (answer4) => {
        // console.log(`: ${answer}`);
        profile += " and favourite meal is " + answer4;

        rl.question(`What's your favourite thing to eat for that meal?\n`, (answer5) => {
          // console.log(`: ${answer}`);
          profile += " and enjoys " + answer5 + " for " + answer4;

          rl.question(`Which sport is your absolute favourite?\n`, (answer6) => {
            // console.log(`: ${answer}`);
            profile += " and favourite sport is " + answer6;

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (answer7) => {
              // console.log(`: ${answer}`);
              profile += " and superpower is " + answer7 + ".";

              rl.close();
              console.log(profile);

            });
          });
        });
      });
    });
  });
});
