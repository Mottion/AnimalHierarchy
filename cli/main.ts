var fs = require('fs');

interface AnimalHierarchy {
  [key: string]: string[] | AnimalHierarchy;
}

const checkArguments = (values: any) => {
  if(!values.deph){console.log("--deph argument is missing"); return 0;}  
  const dephNumber = Number.parseInt(values.deph);
  if(Number.isNaN(dephNumber)){console.log("--deph must be a number"); return 0;}
  if(dephNumber <= 0){console.log("--deph must be a positive number"); return 0;}
  return 1;
}

const getJsonFile = async () => {
  const file: AnimalHierarchy = await new Promise((resolve, reject) => {
    fs.readFile('dicts.json', 'utf8', function (err, data) {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });

  return file;
}

function containsWord(phrase, word) {
  // Cria uma expressão regular que ignora maiúsculas e minúsculas e procura a raiz da palavra
  const regex = new RegExp(`\\b${word.slice(0, -1)}(s)?\\b`, 'i');
  
  // Verifica se a palavra está presente na frase usando a expressão regular
  return regex.test(phrase);
}

const searchWord = async (file: AnimalHierarchy, values: any, stringEntry: string) => {
  const deph = +values.deph;
  const structurePath: string[] = [];
  const correspondencesCount = 0;

  function recurse(file: any, structurePosition: number = -1) {
    structurePosition++;

    if (Array.isArray(file)) {
      // verifica as correspondencias e retorna cada correspondencia que teve
      const correspondences: string[] = [];
      file.map((animal: string) => {
        const hasCorrespondesces = containsWord(stringEntry, animal);
        if(hasCorrespondesces) {
          const newArray = structurePath.slice(0, structurePosition);
          newArray.push(animal)
          console.log("🚀 ~ recurse ~ newArray:", newArray)
        }
      })

      return correspondences;
    } else if (typeof file === 'object') {
      let response: string[] | undefined;
      for (const key in file) {
        structurePath[structurePosition] = key;
        response = recurse(file[key], structurePosition);
      }
      return response;
    }
  }

  const data = recurse(file);
  console.log("🚀 ~ searchWord ~ data:", data)
}

const mainFunction = async (values: any, positionals: string[]) => {
  if(!checkArguments(values)) return 0;

  const stringEntry = positionals[3];
  if(!stringEntry) {
    console.log("no string was provided");
    return 0;
  }
  
  const file = await getJsonFile();
  const data = await searchWord(file, values, stringEntry);
}

module.exports = {
  mainFunction
}