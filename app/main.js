import fs from "fs";
import { exitCode } from "process";

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

// You can use print statements as follows for debugging, they"ll be visible when running tests.
console.error("Logs from your program will appear here!");

const filename = args[1];


const fileContent = fs.readFileSync(filename, "utf8");
const singal_dictionary = {
  "(": "LEFT_PAREN",
  ")": "RIGHT_PAREN",
  "{": "LEFT_BRACE",
  "}": "RIGHT_BRACE",
  ",": "COMMA",
  ".": "DOT",
  "-": "MINUS",
  "+": "PLUS",
  "*": "STAR",
  "/": "SLASH",
  ";": "SEMICOLON"
};

const newLine =["\n", "\r"]
let line = 1
let hasError = false;

if (fileContent.length !== 0) {
  for (let i = 0; i < fileContent.length; i++) {
    const ch = fileContent[i];
    if (ch in singal_dictionary) {
      console.log(`${singal_dictionary[ch]} ${ch} null`);
    } 
    else if  (newLine.includes(ch)) {
      line++ 
      if (ch === '\r' && fileContent[i + 1] === '\n') {
        i++; 
      }
    }
    else if (ch === "=") {
      if (fileContent[i+1] === "="){ // need to remember to use fileContent 
      console.log("EQUAL_EQUAL == null");
      i++;
      }
    
      else {
         console.log("EQUAL = null")
      }
    }
    else {
        console.error(`[line ${line}] Error: Unexpected character: ${ch}`);
        hasError = true
    }
  }
}   

console.log("EOF  null");

if (hasError) {
  process.exit(65);
}