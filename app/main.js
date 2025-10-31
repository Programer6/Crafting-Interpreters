import fs from "fs";

const args = process.argv.slice(2); // Skip the first two arguments (node path and script path)

if (args.length < 2) {
  console.error("Usage: ./your_program.sh tokenize <filename>");
  process.exit(1);
}

const command = args[0];

if (command !== "tokenize") {
  console.error(`Usage: Unknown command: ${command}`);
  process.exit(1);
}

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.error("Logs from your program will appear here!");

const filename = args[1];


const fileContent = fs.readFileSync(filename, "utf8");


if (fileContent.length !== 0) {
  for(let i = 0; i < fileContent.length; i++) {
    const ch = fileContent[i];
    if (ch === '(') {
      console.log("LEFT_PAREN ( null");
    } else if (ch === ')') {
      console.log("RIGHT_PAREN ) null");
    } else if (ch === '{') {
      console.log("LEFT_BRACE { null");
    } else if (ch === '}') {
      console.log("RIGHT_BRACE } null");
    } else if (ch === ',') {
      console.log("COMMA , null");
    } else if (ch === '.') {
      console.log("DOT . null");
    } else if (ch === '-') {
      console.log("MINUS - null");
    } else if (ch === '+') {
      console.log("PLUS + null");
    } else if (ch === '*') {
      console.log("STAR * null");
    } else if (ch === '/') {
      console.log("SLASH / null");
    } else if (ch === ';') {
      console.log("SEMICOLON ; null");
    } else {
      console.error(`Error: Unexpected character: ${ch}`);
      process.exit(65);
    }
  }
}