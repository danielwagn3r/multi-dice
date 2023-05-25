radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= Würfel) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    Würfel = randint(1, 6)
    basic.showNumber(Würfel)
    radio.sendNumber(Würfel)
})
let Würfel = 0
radio.setGroup(1)
basic.forever(function () {
	
})
