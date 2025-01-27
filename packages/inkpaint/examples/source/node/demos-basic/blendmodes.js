var app = new InkPaint.Application({
    //preserveDrawingBuffer: true
});
document.body.appendChild(app.view);

module.exports = app;

// create a new background sprite
var background = InkPaint.Sprite.fromImage(paths("source/assets/bg_rotate.jpg"));
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

// create an array to store a reference to the dudes
var dudeArray = [];
var totaldudes = 20;

for (var i = 0; i < totaldudes; i++) {
    // create a new Sprite that uses the image name that we just generated as its source
    var dude = InkPaint.Sprite.fromImage(paths("source/assets/flowerTop.png"));
    dude.anchor.set(0.5);

    // set a random scale for the dude
    dude.scale.set(0.8 + Math.random() * 0.3);

    // finally let's set the dude to be at a random position...
    dude.x = Math.floor(Math.random() * app.screen.width);
    dude.y = Math.floor(Math.random() * app.screen.height);

    // The important bit of this example, this is how you change the default blend mode of the sprite
    dude.blendMode = InkPaint.BLEND_MODES.ADD;

    // create some extra properties that will control movement
    dude.direction = Math.random() * Math.PI * 2;

    // this number will be used to modify the direction of the dude over time
    dude.turningSpeed = Math.random() - 0.8;

    // create a random speed for the dude between 0 - 2
    dude.speed = 2 + Math.random() * 2;

    // finally we push the dude into the dudeArray so it it can be easily accessed later
    dudeArray.push(dude);

    app.stage.addChild(dude);
}

// create a bounding box for the little dudes
var dudeBoundsPadding = 100;

var dudeBounds = new InkPaint.Rectangle(
    -dudeBoundsPadding,
    -dudeBoundsPadding,
    app.screen.width + dudeBoundsPadding * 2,
    app.screen.height + dudeBoundsPadding * 2
);

var ticker = new InkPaint.Ticker();
ticker.start();
ticker.add(function() {
    app.render();
    // iterate through the dudes and update the positions
    for (var i = 0; i < dudeArray.length; i++) {
        var dude = dudeArray[i];
        dude.direction += dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * dude.speed;
        dude.y += Math.cos(dude.direction) * dude.speed;
        dude.rotation = -dude.direction - Math.PI / 2;

        // wrap the dudes by testing their bounds...
        if (dude.x < dudeBounds.x) {
            dude.x += dudeBounds.width;
        } else if (dude.x > dudeBounds.x + dudeBounds.width) {
            dude.x -= dudeBounds.width;
        }

        if (dude.y < dudeBounds.y) {
            dude.y += dudeBounds.height;
        } else if (dude.y > dudeBounds.y + dudeBounds.height) {
            dude.y -= dudeBounds.height;
        }
    }
});
