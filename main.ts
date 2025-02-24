basic.forever(function () {
	
})
basic.forever(function () {
    if (input.temperature() < 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        control.waitMicros(4447)
        basic.clearScreen()
    }
    if (input.temperature() > 5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        control.waitMicros(4447)
        basic.clearScreen()
    }
    if (input.temperature() == 5) {
        basic.showIcon(IconNames.Yes)
    }
})
