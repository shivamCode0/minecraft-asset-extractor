const fs = require("fs/promises");
const path = require("path");
const { objects } = require("./1.18.json");

console.log("Started 1.18.json objects");

Promise.all(
  Object.entries(objects).map(async ([k, { hash }]) => {
    const oldPath = path.join(__dirname, "objects", hash.substring(0, 2), hash);
    const newPath = path.join(__dirname, "result", "1.18", ...k.split("/"));
    await fs.mkdir(path.dirname(newPath), { recursive: true });
    await fs.copyFile(oldPath, newPath);
    console.log(`Copied ${hash.substring(0, 2) + "/" + hash} to ${"result/1.18" + "/" + k}`);
  })
);
