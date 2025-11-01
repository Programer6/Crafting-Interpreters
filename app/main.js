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
  ";": "SEMICOLON"
};

const newLine =["\n", "\r"]
let line = 1
let hasError = false;


function TwoCharOperator(i, ch, nextChar, doubleToken, doubleOp, singleToken, singleOp) {
  if (fileContent[i + 1] === nextChar) {
    console.log(`${doubleToken} ${doubleOp} null`);
    return 1;
  } else {
    console.log(`${singleToken} ${singleOp} null`);
    return 0;
  }
}

if (fileContent.length !== 0) {
  for (let i = 0; i < fileContent.length; i++) {
    const ch = fileContent[i];
    if (ch in singal_dictionary) {
      console.log(`${singal_dictionary[ch]} ${ch} null`);
    } 
    else if (newLine.includes(ch)) {
      line++;
      if (ch === '\r' && fileContent[i + 1] === '\n') {
        i++;
      }
    }
    else if (ch === "=") {
      i += TwoCharOperator(i, ch, "=", "EQUAL_EQUAL", "==", "EQUAL", "=");
    }    
    else if (ch === "<") {
      i += TwoCharOperator(i, ch, "=", "LESS_EQUAL", "<=", "LESS", "<");
    }
    else if (ch === ">") {
      i += TwoCharOperator(i, ch, "=", "GREATER_EQUAL", ">=", "GREATER", ">");
    }
    else if (ch === "!") {
      i += TwoCharOperator(i, ch, "=", "BANG_EQUAL", "!=", "BANG", "!");
    }
    else if (ch === "/") {
      if (i + 1 < fileContent.length && fileContent[i + 1] === "/") {
        while (i < fileContent.length && fileContent[i] !== "\n") {
          i++;
        }
        i--;
      } else {
        console.log("SLASH / null");
      }
    }
    else if (ch === " " || ch === "\t") {
    }
    else if (ch === '"'){
      stringContents = "";
      while (i < fileContent.length && fileContent[i] !== '"'){
        i++;
        stringContents += i
      }
      console.log(`STRING "${stringContents}" ${stringContents}`)
    }
    else {
      console.error(`[line ${line}] Error: Unexpected character: ${ch}`);
      hasError = true;
    }
  }
}

console.log("EOF  null");

if (hasError) {
  process.exit(65);
}
