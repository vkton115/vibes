"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var PrismaClient = require('@prisma/client').PrismaClient;
var prisma = new PrismaClient();
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", function (req, res, next) {
    try {
        res.send("index.html");
    }
    catch (error) {
    }
});
var PORT = 5000;
app.listen(PORT, function () {
    console.log("App listening on port http://localhost:".concat(PORT));
});
