require('dotenv').config();
const express = require('express');
const next = require('next');
const { default: startInstagramTokenRenewScheduler } = require('./hooks/instagram/renewAccessToken');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

startInstagramTokenRenewScheduler();

app.prepare().then(() => {
    const server = express();

    server.all("/api/*", (req, res) => {
        return handle(req, res);
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, '0.0.0.0', () => {
        console.log(`🚀 Server running at http://localhost:${port}`);
    });
});