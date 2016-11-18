function drawSoundControl() {
    let soundEnabledText = !soundEnabled ? sounds.disableSounds.enableText : sounds.disableSounds.disableText;
    context.fillStyle = "#fcfcfc";
    context.font = "25px Arial";

    context.fillText(soundEnabledText, 420, 35);
    context.restore();
}
