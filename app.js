function init() {
    let app = new PIXI.Application({ width: 1500, height: 680 });
    document.body.appendChild(app.view);

    app.renderer.backgroundColor = 0x0b1937;

    let elapsed = 0.0;

    let numbers = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
            let randText = Math.floor(Math.random() * 10);
            let text = new PIXI.Text(randText, {
                fontFamily: 'Rubik',
                fontSize: 50,
                fill: 0x74f3ff,
                align: 'center',
                fontWeight: 600,
            });

            text.anchor.set(0.5);

            text.interactive = true;

            text.mouseover = function (mouseData) {
                mouseData.currentTarget.style.fontSize = 100;
            };

            text.mouseout = function (mouseData) {
                mouseData.currentTarget.style.fontSize = 50;
            };

            text.x = 50 + i * 100;
            text.y = 50 + j * 100;

            let randCoord = Math.random();
            text.randCoord = randCoord;
            text.randMov = Math.random() * 3 + 2;
            text.randSp = Math.floor(Math.random() * 40) + 10;
            app.stage.addChild(text);
            numbers.push(text);
        }
    }

    app.ticker.add((delta) => {
        elapsed += delta;

        numbers.forEach((num, index) => {
            if (num.randCoord <= 0.5) {
                num.y =
                    num.y + (Math.cos(elapsed / num.randSp) * num.randMov) / 20;
            } else {
                num.x =
                    num.x + (Math.cos(elapsed / num.randSp) * num.randMov) / 20;
            }
        });
    });
}
