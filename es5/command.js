"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandFunction = void 0;
var child_process_1 = require("child_process");
var common_1 = require("./common");
var commandFunction = function (command, subCommands) {
    return function (context) {
        return function (options) {
            command += Object.entries(options !== null && options !== void 0 ? options : {}).reduce(function (acc, _a) {
                var key = _a[0], value = _a[1];
                switch (typeof value) {
                    case 'boolean':
                        if (value)
                            acc += "\n --" + common_1.kebabize(key);
                        break;
                    case 'string':
                    case 'number':
                    case 'bigint':
                        acc += "\n --" + common_1.kebabize(key.toString()) + " " + value;
                        break;
                    default:
                        break;
                }
                return acc;
            }, context + " " + common_1.kebabize(command));
            var run = function () {
                return new Promise(function (resolve, reject) {
                    child_process_1.exec(command, function (error, stdout, stderr) {
                        if (error) {
                            reject(error);
                        }
                        else if (stderr) {
                            reject(stderr);
                        }
                        else {
                            resolve(stdout);
                        }
                    });
                });
            };
            return __assign({ command: command, run: run }, Object.entries(subCommands !== null && subCommands !== void 0 ? subCommands : {}).reduce(function (acc, _a) {
                var key = _a[0], value = _a[1];
                ;
                acc[key] = value(command);
                return acc;
            }, {}));
        };
    };
};
exports.commandFunction = commandFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQW9DO0FBQ3BDLG1DQUFtQztBQStDNUIsSUFBTSxlQUFlLEdBQzNCLFVBaUJDLE9BQWUsRUFDZixXQUFnQjtJQUVqQixPQUFBLFVBQUMsT0FBZTtRQUNoQixPQUFBLFVBQUMsT0FBNEI7WUFDNUIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFTLFVBQUMsR0FBRyxFQUFFLEVBQVk7b0JBQVgsR0FBRyxRQUFBLEVBQUUsS0FBSyxRQUFBO2dCQUN4RSxRQUFRLE9BQU8sS0FBSyxFQUFFO29CQUNyQixLQUFLLFNBQVM7d0JBQ2IsSUFBSSxLQUFLOzRCQUFFLEdBQUcsSUFBSSxVQUFRLGlCQUFRLENBQUMsR0FBRyxDQUFHLENBQUE7d0JBQ3pDLE1BQUs7b0JBQ04sS0FBSyxRQUFRLENBQUM7b0JBQ2QsS0FBSyxRQUFRLENBQUM7b0JBQ2QsS0FBSyxRQUFRO3dCQUNaLEdBQUcsSUFBSSxVQUFRLGlCQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQUksS0FBTyxDQUFBO3dCQUNsRCxNQUFLO29CQUNOO3dCQUNDLE1BQUs7aUJBQ047Z0JBQ0QsT0FBTyxHQUFHLENBQUE7WUFDWCxDQUFDLEVBQUssT0FBTyxTQUFJLGlCQUFRLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQTtZQUNyQyxJQUFNLEdBQUcsR0FBRztnQkFDWCxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQzNCLG9CQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNO3dCQUNuQyxJQUFJLEtBQUssRUFBRTs0QkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7eUJBQ2I7NkJBQU0sSUFBSSxNQUFNLEVBQUU7NEJBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDZDs2QkFBTTs0QkFDTixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7eUJBQ2Y7b0JBQ0YsQ0FBQyxDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUFDO1lBVkYsQ0FVRSxDQUFBO1lBQ0gsa0JBQ0MsT0FBTyxTQUFBLEVBQ1AsR0FBRyxLQUFBLElBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLGFBQVgsV0FBVyxjQUFYLFdBQVcsR0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQU0sVUFBQyxHQUFHLEVBQUUsRUFBWTtvQkFBWCxHQUFHLFFBQUEsRUFBRSxLQUFLLFFBQUE7Z0JBQ2pFLENBQUM7Z0JBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFJLEtBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDNUMsT0FBTyxHQUFHLENBQUE7WUFDWCxDQUFDLEVBQUUsRUFBUyxDQUFDLEVBQ2I7UUFDRixDQUFDO0lBcENELENBb0NDO0FBckNELENBcUNDLENBQUE7QUExRFcsUUFBQSxlQUFlLG1CQTBEMUIifQ==