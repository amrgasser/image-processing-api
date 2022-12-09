"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formatUtils_1 = require("./utilities/formatUtils");
const pathUtils_1 = require("./utilities/pathUtils");
const app = (0, express_1.default)();
const port = 3000;
app.get('/hi', (req, res) => {
    res.send("hi");
});
app.get('/api/images/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const height = Number.parseInt(req.query.height);
        const width = Number.parseInt(req.query.width);
        if (!(0, pathUtils_1.isFullExists)(name)) {
            return res.status(400).send('file not found');
            ;
        }
        if (!(0, pathUtils_1.isThumbExists)(name, height, width)) {
            yield (0, formatUtils_1.format)(name, height, width);
        }
        res.sendFile(`${name}_${height}_${width}.jpg`, { root: 'assets/thumb' }, (err) => {
            if (err) {
                console.log(err);
            }
        });
        return res;
    }
    catch (e) {
        throw new Error(e);
    }
}));
app.listen(port);
exports.default = app;
