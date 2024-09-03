var fs = require('fs');

interface AnimalHierarchyProps {
  [key: string]: string[] | AnimalHierarchyProps;
}

interface OccurrencesProps {
  occurrences: number,
  path: string[]
}

interface OutputResponseProps {
  [key: string]: number; 
}

export const checkArguments = (values: any) => {
  if(!values.deph){console.log("--deph argument is missing"); return 0;}  
  const dephNumber = Number.parseInt(values.deph);
  if(Number.isNaN(dephNumber)){console.log("--deph must be a number"); return 0;}
  if(dephNumber <= 0){console.log("--deph must be a positive number"); return 0;}
  if(values.verbose != true){values.verbose = false};
  
  return 1;
}

export const getJsonFile = async () => {
  const file: AnimalHierarchyProps = await new Promise((resolve, reject) => {
    fs.readFile('dicts.json', 'utf8', function (err, data) {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });

  return file;
}

function containsWord(phrase, word) {
  // Cria uma expressão regular que ignora maiúsculas e minúsculas e procura a raiz da palavra;
  const regex = new RegExp(`\\b${word.slice(0, -1)}(s)?\\b`, 'gi');
  
  // Usa o método match para encontrar todas as correspondências na frase;
  const matches = phrase.match(regex);
  
  // Retorna o número de correspondências encontradas (ou 0 se não houver correspondências);
  return matches ? matches.length : 0;
}

export const searchWord = async (file: AnimalHierarchyProps, stringEntry: string) => {
  const structurePath: string[] = []; // quando achar uma correspondencia, essa variavel terá o caminho para essa correspondencia;
  const correspondences: Array<OccurrencesProps> = []; // vai receber a "structurePath" no momento em que uma correspondencia foi encontrada;

  function recurse(file: any, structurePosition: number = -1) {
    structurePosition++; // essa variavel salva a profundidade que a pesquisa está na estrutura conforme percorre essa estrutura;

    if (Array.isArray(file)) {
      // verifica as correspondencias e retorna cada correspondencia que teve;
      file.map((animal: string) => {
        const occurrences = containsWord(stringEntry, animal);
        if(occurrences != 0) {
          const currentCorrespondencePath = structurePath.slice(0, structurePosition);
          currentCorrespondencePath.push(animal);
          correspondences.push({occurrences, path: currentCorrespondencePath});
        }
      })
    } else if (typeof file === 'object') {
      for (const key in file) {
        structurePath[structurePosition] = key;
        recurse(file[key], structurePosition);
      }
    }
  }

  recurse(file);
  return correspondences;
}

const mainFunction = async (values: any, positionals: string[]) => {
  if(!checkArguments(values)) return 0;

  const stringEntry = positionals[3];
  if(!stringEntry) {
    console.log("no string was provided");
    return 0;
  }
  
  const file = await getJsonFile();
  const correspondences = await searchWord(file, stringEntry);
  outputResponse(correspondences, values)
}

export const outputResponse = (correspondences: OccurrencesProps[], values: any) => {
  const deph = +values.deph -1;
  const output: OutputResponseProps = {} 

  if(correspondences.length == 0) return "Não houve correspondencias";
  for(const correspondence of correspondences){
    
    // note que abaixo está sendo usado a sintaxe de if ternário para simplificar a escrita;
    const dephTitle = 
    correspondence.path[deph] 
    ? correspondence.path[deph]
    : correspondence.path.pop() as string;

    if(output[dephTitle] == undefined){
      output[dephTitle] = correspondence.occurrences;
    }else{
      output[dephTitle] += correspondence.occurrences;
    }
  }

  let message = "";
  for (const key in output) {
    message += `, ${key} = ${output[key]}`
  }
  message = message.slice(2);
  console.log(message);
  return message;
}

module.exports = {
  mainFunction,
  checkArguments,
  getJsonFile,
  searchWord,
  outputResponse
}