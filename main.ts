namespace SpriteKind {
    export const player2 = SpriteKind.create()
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
    mySprite,
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
    mySprite.setVelocity(-80, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
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
    mySprite.setVelocity(0, 80)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite5,
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
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    info.changeScoreBy(1)
    if (info.score() == 1) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 75)
        info.changeLifeBy(1)
    }
    if (info.score() == 2) {
        MySprite4 = sprites.create(img`
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
        MySprite4.follow(mySprite, 65)
        info.changeLifeBy(1)
    }
    if (info.score() == 3) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 55)
        info.changeLifeBy(1)
    }
    if (info.score() == 4) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 45)
        info.changeLifeBy(1)
    }
    if (info.score() == 5) {
        mySprite.say("I'm to full!", 2000)
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    info.changeScoreBy(1)
    if (info.score() == 1) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 75)
        info.changeLifeBy(1)
    }
    if (info.score() == 2) {
        MySprite4 = sprites.create(img`
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
        MySprite4.follow(mySprite, 65)
        info.changeLifeBy(1)
    }
    if (info.score() == 3) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 55)
        info.changeLifeBy(1)
    }
    if (info.score() == 4) {
        mySprite3 = sprites.create(img`
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
        mySprite3.follow(mySprite, 45)
        info.changeLifeBy(1)
    }
    if (info.score() == 5) {
        mySprite.say("I'm to full!", 2000)
        info.changeLifeBy(1)
        info.changeScoreBy(-1)
        info.changeLifeBy(-1)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite5,
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
    mySprite5,
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
    mySprite,
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
    mySprite.setVelocity(80, 0)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite5,
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
    mySprite,
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
    mySprite.setVelocity(0, -80)
})
let MySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
mySprite = sprites.create(img`
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
mySprite.setPosition(79, 24)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
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
mySprite2.setPosition(73, 57)
mySprite5 = sprites.create(img`
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
