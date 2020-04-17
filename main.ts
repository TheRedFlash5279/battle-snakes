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
    }
    if (info.score() == 2) {
        MySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . f 8 8 8 8 8 8 8 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        MySprite4.follow(mySprite, 65)
    }
    if (info.score() == 3) {
        mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . f c c c c c c c f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        mySprite3.follow(mySprite, 55)
    }
    if (info.score() == 4) {
        mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        mySprite3.follow(mySprite, 45)
    }
    if (info.score() == 5) {
        mySprite.say("I'm to full to eat!", 2000)
    }
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
let mySprite2: Sprite = null
let mySprite: Sprite = null
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
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Food)
mySprite2.setPosition(73, 57)
