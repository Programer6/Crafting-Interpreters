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
    if (fileContent[i] === '(') {
      console.log("LEFT_PAREN ( null");
    }
    else if (fileContent[i] === ')') {
      console.log("RIGHT_PAREN ) null");
    }
    else if (fileContent[i] === '{') {
      console.log("LEFT_BRACE { null");
    }
    else if (fileContent[i] === '}') {
      console.log("RIGHT_BRACE } null");
    }
    else if (fileContent[i] === ',') {
      console.log("COMMA , null");
    }
    else if (fileContent[i] === '.') {
      console.log("DOT . null");
    }
    else if (fileContent[i] === '-') {
      console.log("MINUS - null")
    }
    else if (fileContent[i] === '+') {
      console.log("PLUS + null")
    }
    else if (fileContent[i] === '*') {
      console.log("STAR * null")
    }
    else if (fileContent[i] === '/') {
      console.log("SLASH / null")
    }
    else if (fileContent[i] === ';') {
      console.log("SEMICOLON ; null")
    }
    else if (fileContent[i] === ',') {
      console.log("Error: Unexpected character: ,")
    }
    else if (fileContent[i] === '.') {
      console.log("Error: Unexpected character: .")
    }
    else if (fileContent[i] === '$') {
      console.log("Error: Unexpected character: $")
    }
    else if (fileContent[i] === '(') {
      console.log("Error: Unexpected character: (")
    }
    else if (fileContent[i] === '(') {
      console.log("Error: Unexpected character: #")
    }
  }
  console.log("EOF  null");
} else {
  console.log("EOF  null");
}