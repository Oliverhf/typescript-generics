function shortenArray(data, amountToShorten) {
    return data.splice(amountToShorten, data.length);
}
var stringArray = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];
var fewerLanguages = shortenArray(stringArray, 2);
console.log(fewerLanguages);
