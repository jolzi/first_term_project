const SoundFader = (soundOne, soundTwo) => {
   soundOne.fade(0.125, 0.0, 1500);
   soundTwo.fade(0.0, 0.125, 1500);
};

export default SoundFader;