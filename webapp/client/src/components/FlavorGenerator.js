class FlavorGenerator {
    flavorTexts = [];

    constructor() {
        this.positiveFlavorTexts.push({ text: 'test', position: 'front' });

        this.flavorTexts = [
            [{ text: '', position: 'front' }, 1],
            [{ text: '', position: 'front' }, 2],
            [{ text: '', position: 'front' }, 3],
            [{ text: '', position: 'front' }, 4],
            [{ text: '', position: 'front' }, 5],
            [{ text: '', position: 'front' }, 6],
            [{ text: '', position: 'front' }, 7],
            [{ text: '', position: 'front' }, 8],
            [{ text: '', position: 'front' }, 9],
            [{ text: '', position: 'front' }, 10],
            [{ text: '', position: 'front' }, 11],
            [{ text: '', position: 'front' }, 12],
            [{ text: '', position: 'front' }, 13],
            [{ text: '', position: 'front' }, 14],
            [{ text: '', position: 'front' }, 15],
            [{ text: '', position: 'front' }, 16],
            [{ text: '', position: 'front' }, 17],
            [{ text: '', position: 'front' }, 18],
            [{ text: '', position: 'front' }, 19.0],
            [{ text: '', position: 'front' }, 19.1],
            [{ text: '', position: 'front' }, 19.2],
            [{ text: '', position: 'front' }, 19.3],
            [{ text: '', position: 'front' }, 19.4],
            ['negative', '3', 19.5],
            ['negative', '3', 19.6],
            ['negative', '3', 19.7],
            ['negative', '3', 19.8]
            ['negative', '2', 20]
        ]
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

    setUpFlavorMessage = (certainty, classification, index) => {
        let msgObject;
            msgObject = this.flavorTexts[index][Math.floor(Math.random() * this.flavorTexts[index].length)]

        if (msgObject.position === 'front') {
            return msgObject.text + this.setUpClassificationMessage(certainty, classification);
        }
        else {
            return this.setUpClassificationMessage(certainty, classification) + msgObject.text;
        }
    }
}

export default FlavorGenerator;