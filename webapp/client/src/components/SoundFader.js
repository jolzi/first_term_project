const SoundFader = (soundOne, soundTwo) => {
   soundOne.fade(0.05, 0.0, 2000);
   soundTwo.fade(0.0, 0.05, 2000);
};

export default SoundFader;