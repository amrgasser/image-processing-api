"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThumbExists = exports.isFullExists = void 0;
const fs_1 = __importDefault(require("fs"));
const isFullExists = (name) => {
    return fs_1.default.existsSync(`assets/full/${name}.jpg`);
};
exports.isFullExists = isFullExists;
const isThumbExists = (name, height, width) => {
    return fs_1.default.existsSync(`assets/thumb/${name}_${height}_${width}.jpg`);
};
exports.isThumbExists = isThumbExists;
