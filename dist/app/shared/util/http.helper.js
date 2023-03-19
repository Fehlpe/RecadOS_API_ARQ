"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
class HttpHelper {
    static sucess(res, data, message, code) {
        return res.status(code ?? 200).send({
            ok: true,
            data,
            message,
        });
    }
    static serverError(res, message, code) {
        return res.status(code ?? 500).send({
            ok: false,
            message,
        });
    }
    static badRequest(res, message, code) {
        return res.status(code ?? 400).send({
            ok: false,
            message,
        });
    }
    static unauthorized(res, message, code) {
        return res.status(code ?? 401).send({
            ok: false,
            message,
        });
    }
}
exports.HttpHelper = HttpHelper;
