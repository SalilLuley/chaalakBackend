"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const http_status_1 = __importDefault(require("http-status"));
const export_1 = require("./routes/export");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(export_1.routes);
app.get("/ping", (req, res) => {
    res.status(http_status_1.default.OK).send("Pong!");
});
app.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
/**
 * Reference - https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/
 */
