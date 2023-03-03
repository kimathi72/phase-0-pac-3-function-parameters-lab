//takes in an argument of a name and returns a phrase with that name using string interpolation

function introduction(name){
        return `Hi, my name is ${name}.`;
    
}
//takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//takes in two arguments, a name and a language, and the default value can be overridden with an argument
function introductionWithLanguageOptional(name, language = "Javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}