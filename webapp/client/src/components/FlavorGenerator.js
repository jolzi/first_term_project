class FlavorGenerator {
    positiveFlavorTexts = [];
    negativeFlavorTexts = [];

    constructor()
    {
        this.positiveFlavorTexts.push({text: 'test', position:'front'});

        this.negativeFlavorTexts.push({text: 'test', position:'front'});
    }

    setUpClassificationMessage = (certainty, classification) => {
        let processedCertainty;
        let lastFour = certainty.slice(-4);
        if (lastFour === '.00%') {
            processedCertainty = certainty.substr(0, certainty.indexOf('.')) + '%';
        }
        else {
            processedCertainty = certainty;
        }

        let preposition;
        let first = classification.charAt(0);

        if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u') {
            preposition = "an";
        }
        else {
            preposition = "a";
        }


        return `This is, ${processedCertainty} ${preposition}, ${classification} person`
    };
}

export default FlavorGenerator;