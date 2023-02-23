scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        simplified.gravity_jump(mySprite, -200)
        animation.runImageAnimation(
        mySprite,
        assets.animation`walk right`,
        100,
        true
        )
    } else {
        mySprite.setImage(assets.image`stand`)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 50, 50)
    projectile.setFlag(SpriteFlag.ShowPhysics, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    150,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite, location) {
    game.over(true, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    mySprite.say("Level 2", 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.vy = 0
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
