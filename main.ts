namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 2 2 1 1 1 1 1 f . . . . 
. . . f 2 1 1 1 1 f 1 f . . . . 
. . . f 2 1 1 1 f 1 1 f . . . . 
. . . f 2 2 1 1 1 1 1 f . . . . 
. . . f 2 2 1 1 f f 1 f . . . . 
. . . f 2 2 2 1 f f 1 f . . . . 
. . . f 2 2 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    MC.setVelocity(-80, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f 1 1 f f 1 f . . . . 
. . . f 1 1 f 1 f f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 1 1 1 1 2 1 f . . . . 
. . . f 2 2 1 2 2 2 2 f . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    MC.setVelocity(0, 80)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    E3,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f 1 1 f f 1 f . . . . 
. . . f 1 1 f 1 f f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 1 1 1 1 c 1 f . . . . 
. . . f c c 1 c c c c f . . . . 
. . . f c c c c c c c f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.player2.score() == 1) {
        M1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
        info.changeLifeBy(1)
        M1.follow(MB, 75)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.player2.score() == 2) {
        M2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
        M2.follow(MB, 65)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.player2.score() == 3) {
        M3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
        M3.follow(MB, 55)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.player2.score() == 4) {
        M4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
        M4.follow(MB, 45)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.player2.score() == 5) {
        MB.say("I'm to full!", 2000)
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    info.player2.changeScoreBy(-1)
    pause(500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.score() == 1) {
        E1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        info.changeLifeBy(1)
        E1.follow(MC, 75)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.score() == 2) {
        E2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        E2.follow(MC, 65)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.score() == 3) {
        E3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        E3.follow(MC, 55)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.score() == 4) {
        E4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        E4.follow(MC, 45)
        info.changeLifeBy(1)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    }
    if (info.score() == 5) {
        MC.say("I'm to full!", 2000)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    E3,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f c c 1 1 1 1 1 f . . . . 
. . . f c 1 1 1 1 f 1 f . . . . 
. . . f c 1 1 1 f 1 1 f . . . . 
. . . f c c 1 1 1 1 1 f . . . . 
. . . f c c 1 1 f f 1 f . . . . 
. . . f c c c 1 f f 1 f . . . . 
. . . f c c 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    E3,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f c c c c c c c f . . . . 
. . . f c c c c 1 1 c f . . . . 
. . . f 1 c 1 1 1 1 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f f 1 f 1 1 f . . . . 
. . . f 1 f f 1 1 f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 1 1 1 1 1 2 2 f . . . . 
. . . f 1 f 1 1 2 2 2 f . . . . 
. . . f 1 1 f 1 1 2 2 f . . . . 
. . . f 1 1 1 1 1 2 2 f . . . . 
. . . f 1 f f 1 1 1 2 f . . . . 
. . . f 1 f f 1 1 1 2 f . . . . 
. . . f 1 1 1 1 1 2 2 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    MC.setVelocity(80, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
    pause(500)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    E3,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 1 1 1 1 1 c c f . . . . 
. . . f 1 f 1 1 c c c f . . . . 
. . . f 1 1 f 1 1 c c f . . . . 
. . . f 1 1 1 1 1 c c f . . . . 
. . . f 1 f f 1 1 1 c f . . . . 
. . . f 1 f f 1 1 1 c f . . . . 
. . . f 1 1 1 1 1 c c f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . . f 2 2 2 2 1 1 2 f . . . . 
. . . f 1 2 1 1 1 1 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f f 1 f 1 1 f . . . . 
. . . f 1 f f 1 1 f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    MC.setVelocity(0, -80)
})
let M4: Sprite = null
let M3: Sprite = null
let M2: Sprite = null
let M1: Sprite = null
let E4: Sprite = null
let E3: Sprite = null
let E2: Sprite = null
let E1: Sprite = null
let mySprite2: Sprite = null
let MB: Sprite = null
let MC: Sprite = null
game.splash("You need 2 players to play!")
info.setLife(5)
info.player2.setLife(5)
info.setScore(5)
info.player2.setScore(5)
MC = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 2 2 2 2 2 2 2 f . . . . 
. . . f 2 1 1 2 2 2 2 f . . . . 
. . . f 1 1 1 1 1 2 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f f 1 f 1 1 f . . . . 
. . . f 1 f f 1 1 f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
MB = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f c c c c c c c f . . . . 
. . . f c 1 1 c c c c f . . . . 
. . . f 1 1 1 1 1 c 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 f f 1 f 1 1 f . . . . 
. . . f 1 f f 1 1 f 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.player2)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010301040404040404010301010101010101010404040404040101010101010101010104040404040401010101010101010101040404040404030101010103020101010404040404040101010101010101010104040404040401010301010101010301040404040404010101010101010101010404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,myTiles.tile1],
            TileScale.Sixteen
        ))
MC.setPosition(71, 9)
MB.setPosition(76, 103)
MC.setFlag(SpriteFlag.StayInScreen, true)
MB.setFlag(SpriteFlag.StayInScreen, true)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f c f . . . . . . . 
. . . . . f c 2 c f . . . . . . 
. . . . . f 2 2 2 f . . . . . . 
. . . . . f c 2 c f . . . . . . 
. . . . . . f c f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
E1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
E1.follow(MC, 75)
E2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
E2.follow(MC, 65)
E3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
E3.follow(MC, 55)
E4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . f 2 2 2 2 2 2 2 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
E4.follow(MC, 45)
M1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
M1.follow(MB, 75)
M2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
M2.follow(MB, 65)
M3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
M3.follow(MB, 55)
M4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . f 6 6 6 6 6 6 6 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy2)
M4.follow(MB, 45)
game.onUpdateInterval(500, function () {
    if (info.life() == 0) {
        E1.destroy()
        game.splash("Black Win's!")
        game.reset()
    } else if (info.life() == 1) {
        E2.destroy()
    } else if (info.life() == 2) {
        E3.destroy()
    } else if (info.life() == 3) {
        E4.destroy()
    }
})
game.onUpdateInterval(500, function () {
    if (info.player2.life() == 0) {
        M1.destroy()
        game.splash("Red Win's!")
        game.reset()
    } else if (info.player2.life() == 1) {
        M2.destroy()
    } else if (info.player2.life() == 2) {
        M3.destroy()
    } else if (info.player2.life() == 3) {
        M4.destroy()
    }
})
