"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabize = void 0;
var kebabize = function (str) {
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) { return (ofs ? '-' : '') + $.toLowerCase(); });
};
exports.kebabize = kebabize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNLFFBQVEsR0FBRyxVQUFDLEdBQVc7SUFDbkMsT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQztBQUFyRixDQUFxRixDQUFBO0FBRHpFLFFBQUEsUUFBUSxZQUNpRSJ9