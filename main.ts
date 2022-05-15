namespace SpriteKind {
    export const Pet = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`House_Door`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Inside_House`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.showLongText("Hi My Name Is Princess Marry And You Look Awesome Today!", DialogLayout.Bottom)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Simon = sprites.create(assets.image`Simon`, SpriteKind.Player)
    controller.player2.moveSprite(Simon)
    scene.cameraFollowSprite(Simon)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TV_With_Console`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Kalan_TOWN`)
})
let Simon: Sprite = null
game.setDialogFrame(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `)
game.setDialogCursor(assets.image`Kalan_text_cursor`)
let Princess_Marry = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f a 5 2 5 a a f . . . . 
    . . . f a a a a a a a a f . . . 
    . . . f a a f f f f a a f . . . 
    . . . f a f f d d f f a f . . . 
    . . f a f d f d d f d f a f . . 
    . . f a f d 3 d d 3 d f a f . . 
    . . f a a f d d d d f a a f . . 
    . f a a f 3 f f f f 3 f a a f . 
    . . f f d 3 3 3 3 3 3 d f f . . 
    . . f d d f 3 3 3 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 3 3 3 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.NPC)
Princess_Marry.setPosition(106, 65)
let Dog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Pet)
let Dog2 = sprites.create(assets.image`Dog2`, SpriteKind.Pet)
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`Kalan_TOWN`)
let Kalan = sprites.create(assets.image`Kalan`, SpriteKind.Player)
controller.moveSprite(Kalan)
forever(function () {
    scene.cameraFollowSprite(Kalan)
    Dog.follow(Kalan, 75)
    Dog2.follow(Simon, 75)
    characterAnimations.loopFrames(
    Dog,
    assets.animation`Dog_Walk`,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    Dog2,
    assets.animation`Dog_Walk2`,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    Kalan,
    assets.animation`Kalan_Walk0`,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    Simon,
    assets.animation`Simon_Walk`,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
})
