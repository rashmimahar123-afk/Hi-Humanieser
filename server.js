/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = true;
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`🚀 Ready on https://${hostname}:${port}`);
  });
});
