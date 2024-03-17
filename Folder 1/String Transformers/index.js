
const input = document.querySelector('input');
const lowerCase = document.querySelector('#lowercase span');
const upperCase = document.querySelector('#uppercase span');
const camalCase = document.querySelector('#camelcase span');
const pascalCase = document.querySelector('#pascalcase span');
const snakeCaseoutput = document.querySelector('#snakecase span');
const kebabCaseoutput = document.querySelector('#kebabcase span');
const trimoutput = document.querySelector('#trim span')




input.addEventListener('input', updatescreen);

function CamelCase(string){
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');
    const finalArray =  wordsArray.map((word , i)=>{
        if(i === 0) return word
        return capitalizeString(word);
    });
    return finalArray.join('');
}

CamelCase();

function capitalizeString(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1,str.length);
}
capitalizeString();

function updatescreen(){
    lowerCase.innerHTML = input.value.toLowerCase();
    upperCase.innerHTML = input.value.toUpperCase();
    camalCase.innerHTML = CamelCase(input.value);
    pascalCase.innerHTML = pascalCaseStr(input.value);
    snakeCaseoutput.innerHTML = snakeCase(input.value);
    kebabCaseoutput.innerHTML = kebabCase(input.value);
    trimoutput.innerHTML = trimCase(input.value);
}

updatescreen();

function pascalCaseStr(str){
    const lowerCaseString = str.toLowerCase();
    const firstLetter = lowerCaseString.split(' ');
    //console.log(firstLetter);
    const finalArrays = firstLetter.map((words) => {
        return capitalizeString(words);
    })
    return finalArrays.join('');
}

pascalCaseStr();

function snakeCase(str){
    //const wordsArrays = str.split(' ');
    //console.log(wordsArrays)
    return str.replaceAll(' ', '_')
  }

snakeCase(); 

function kebabCase(str){
    return str.replaceAll(' ', '-')
}

kebabCase();

function trimCase(str){
    return str.replaceAll(' ', '');
}

trimCase();
