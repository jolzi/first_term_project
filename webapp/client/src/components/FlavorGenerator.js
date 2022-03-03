class FlavorGenerator {
    correctFlavorTexts = [];
    incorrectFlavorTexts = [];

    positiveCorrectFlavorTexts = [];
    positiveIncorrectFlavorTexts = [];

    constructor() {
        this.correctFlavorTexts = [
            "Correct. ",
            "Good choice. ",
            "You are right on this one. ",
            "I agree. ",
            "This time, you are right. ",
            "You're right. ",
            "Correct decision.  ",
            "You made the right decision. ",
            "Yes, you should avoid this person. ",
            "Absolutely. "
        ]

        this.incorrectFlavorTexts = [
            "Incorrect. ",
            "That's a bad choice. ",
            "Wrong decision. ",
            "I'm warning you. You should not befriend this person. ",
            "You are wrong. ",
            "I have to disagree. ",
            "You're making the wrong choice. ",
            "Not a good idea. ",
            "A worrying choice. "
        ]

        this.positiveCorrectFlavorTexts = [
            "That's better. ",
            "I agree. ",
            "Seems like you could be fine with this decision. ",
            "Tolerable. ",
            "I can understand your decision. "
        ]

        this.positiveIncorrectFlavorTexts = [
            "Better safe than sorry, though.",
            "But I can understand your hesitation. ",
            "Your doubt is still understandable.",
            "No harm in keeping this person a stranger, though."
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


        return `This is, ${processedCertainty} ${preposition}, ${classification} person. `
    };

    setUpFlavorMessage = (certainty, classification, tone, wantsToBeFriend) => {
        let flavorArray;
        let flavorMessage;
        if (tone === 'negative') {
            if (wantsToBeFriend) {
                flavorArray = this.incorrectFlavorTexts;
            }
            else {
                flavorArray = this.correctFlavorTexts;
            }
            flavorMessage = flavorArray[Math.floor(Math.random() * flavorArray.length)] + this.setUpClassificationMessage(certainty, classification);
        }
        else {
            if(wantsToBeFriend) {
                flavorArray = this.positiveCorrectFlavorTexts;
                flavorMessage = flavorArray[Math.floor(Math.random() * flavorArray.length)] + this.setUpClassificationMessage(certainty, classification);
            }
            else
            {
                flavorArray = this.positiveIncorrectFlavorTexts;
                flavorMessage = this.setUpClassificationMessage(certainty, classification) + flavorArray[Math.floor(Math.random() * flavorArray.length)];
            }
        }

        return flavorMessage;
    }
}

export default FlavorGenerator;