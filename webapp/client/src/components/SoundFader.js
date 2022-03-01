const SoundFader = (soundOne, soundTwo) => {
   soundOne.fade(0.05, 0.0, 1000);
   soundTwo.fade(0.0, 0.05, 1000);
};

export default SoundFader;