"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
var path_1 = __importDefault(require("path"));
var cli = _1.default(path_1.default.resolve(path_1.default.dirname(__dirname), 'cardano-bin/cardano-cli.exe'));
var myCommand = cli
    .address({
    help: true,
})
    .run()
    .then(console.log)
    .catch(console.log);
console.log(myCommand);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQTBCO0FBQzFCLDhDQUF1QjtBQUV2QixJQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtBQUU1RixJQUFNLFNBQVMsR0FBRyxHQUFHO0tBQ25CLE9BQU8sQ0FBQztJQUNSLElBQUksRUFBRSxJQUFJO0NBQ1YsQ0FBQztLQUNELEdBQUcsRUFBRTtLQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0tBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQSJ9