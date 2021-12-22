namespace SpriteKind {
    export const malo = SpriteKind.create()
    export const player5 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    game.over(false, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    info.changeScoreBy(1)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    game.over(false, effects.melt)
})
function nivel_2 () {
    premio.destroy()
    premio2.destroy()
    premio3.destroy()
    premio3.destroy()
    tiles.setTilemap(tilemap`nivel2`)
    color_fondo(randint(0, 14))
    bueno.ay = 200
    malo.setPosition(1024, 8)
    nivel = 2
    info.startCountdown(10)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direccion == 0 && nivel == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, bueno, 200, 0)
    }
    if (direccion == 1 && nivel == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, bueno, -200, 0)
    }
})
info.onCountdownEnd(function () {
    info.startCountdown(10)
    color_fondo(randint(0, 14))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (bueno.overlapsWith(premio)) {
        info.changeScoreBy(1)
        premio.destroy()
    }
    if (bueno.overlapsWith(premio2)) {
        info.changeScoreBy(1)
        premio2.destroy()
    }
    if (bueno.overlapsWith(premio3)) {
        info.changeScoreBy(1)
        premio3.destroy()
    }
    if (bueno.overlapsWith(premio4)) {
        info.changeScoreBy(1)
        premio4.destroy()
    }
})
function color_fondo (codigo_color: number) {
    if (codigo_color == 0) {
        scene.setBackgroundColor(0)
    }
    if (codigo_color == 1) {
        scene.setBackgroundColor(2)
    }
    if (codigo_color == 2) {
        scene.setBackgroundColor(3)
    }
    if (codigo_color == 3) {
        scene.setBackgroundColor(4)
    }
    if (codigo_color == 4) {
        scene.setBackgroundColor(5)
    }
    if (codigo_color == 5) {
        scene.setBackgroundColor(6)
    }
    if (codigo_color == 6) {
        scene.setBackgroundColor(7)
    }
    if (codigo_color == 7) {
        scene.setBackgroundColor(8)
    }
    if (codigo_color == 8) {
        scene.setBackgroundColor(9)
    }
    if (codigo_color == 9) {
        scene.setBackgroundColor(10)
    }
    if (codigo_color == 10) {
        scene.setBackgroundColor(11)
    }
    if (codigo_color == 11) {
        scene.setBackgroundColor(12)
    }
    if (codigo_color == 12) {
        scene.setBackgroundColor(13)
    }
    if (codigo_color == 13) {
        scene.setBackgroundColor(14)
    }
    if (codigo_color == 14) {
        scene.setBackgroundColor(15)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    malo.destroy()
    malo = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f 1 f 1 f 2 2 f 1 f 1 f 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
        2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
        2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    malo.setPosition(1024, 8)
    malo.follow(bueno, 25)
})
let projectile: Sprite = null
let direccion = 0
let nivel = 0
let malo: Sprite = null
let bueno: Sprite = null
let premio4: Sprite = null
let premio3: Sprite = null
let premio2: Sprite = null
let premio: Sprite = null
game.splash("come come", "autor ramon")
game.setDialogTextColor(9)
game.setDialogFrame(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("comete los 4 tesoros y gana", DialogLayout.Center)
info.setScore(0)
tiles.setTilemap(tilemap`nivel1`)
premio = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
premio.setPosition(132, 88)
premio2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
premio2.setPosition(110, 56)
premio3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
premio3.setPosition(120, 232)
premio4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
premio4.setPosition(224, 164)
let nivel1 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
nivel1.setPosition(8, 120)
bueno = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
    8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
    8 8 5 5 f f f 8 8 f f f 5 5 8 8 
    8 8 5 5 f f f 8 8 f f f 5 5 8 8 
    8 8 5 5 f f f 8 8 f f f 5 5 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 2 2 2 8 8 8 8 8 8 8 
    8 8 8 8 8 8 2 2 2 8 8 8 8 8 8 8 
    8 8 8 8 8 8 2 2 2 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 d f d f d f d f d f 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
bueno.setPosition(8, 104)
malo = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 f 1 f 1 f 2 2 f 1 f 1 f 2 2 
    2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
    2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
    2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
    2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
    2 2 5 8 8 8 5 2 2 5 8 8 8 5 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
malo.setPosition(150, 110)
malo.follow(bueno, 25)
controller.moveSprite(bueno, 100, 100)
scene.cameraFollowSprite(bueno)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
forever(function () {
    if (info.score() == 4 && bueno.overlapsWith(nivel1)) {
        info.changeScoreBy(10)
        music.magicWand.play()
        nivel1.destroy()
        nivel_2()
    }
    if (info.score() == 26) {
        game.over(true, effects.confetti)
    }
    if (controller.right.isPressed() && nivel == 2) {
        direccion = 0
    }
    if (controller.left.isPressed() && nivel == 2) {
        direccion = 1
    }
})
