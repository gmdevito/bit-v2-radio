radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.showNumber(receivedNumber)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    counter += 1
    radio.sendNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
    radio.sendNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    radio.sendNumber(counter)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(compassDirection)
})
let compassDirection = 0
let counter = 0
radio.setGroup(1)
basic.clearScreen()
basic.forever(function () {
    compassDirection = input.compassHeading()
})
