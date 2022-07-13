"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
});
const port = parseInt(`${process.env.PORT}`) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
//# sourceMappingURL=index.js.map