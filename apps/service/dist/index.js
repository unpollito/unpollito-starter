"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_client_1 = require("@unpollito/db-client");
const app = (0, express_1.default)();
app.get("/", async function (req, res) {
    console.log(req);
    await db_client_1.db.user.getUserById("foo");
    res.send("Hello World");
});
app.listen(process.env.PORT);
//# sourceMappingURL=index.js.map