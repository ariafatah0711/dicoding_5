const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const parentDestination = path.resolve(__dirname, "dist/images");
fs.mkdirSync(parentDestination);

// heros
const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "dist/images/heros");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(1200, 200)
    .jpeg({ quality: 33 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-large.jpg`));

  sharp(`${target}/${image}`)
    // .resize(800, 250)
    .resize(1200, 350)
    .jpeg({ quality: 33 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-medium.jpg`));

  sharp(`${target}/${image}`)
    // .resize(600, 300)
    // .resize(989, 494)
    .resize(850, 450)
    .jpeg({ quality: 33 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-small.jpg`));
});

// icons
const target2 = path.resolve(__dirname, "src/public/images/icons");
const destination2 = path.resolve(__dirname, "dist/images/icons");

if (!fs.existsSync(destination2)) {
  fs.mkdirSync(destination2);
}

fs.readdirSync(target2).forEach((image) => {
  sharp(`${target2}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destination2}/${image.split(".").slice(0, -1).join(".")}.png`));
});
