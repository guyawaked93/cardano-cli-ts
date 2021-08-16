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
exports.cardanoCliCommand = exports.commandFunction = void 0;
var child_process_1 = require("child_process");
var common_1 = require("./common");
var commandFunction = function (start, subCommands) {
    return function (context) {
        return function (options) {
            var command = Object.entries(options !== null && options !== void 0 ? options : {}).reduce(function (acc, _a) {
                var key = _a[0], value = _a[1];
                switch (typeof value) {
                    case 'boolean':
                        if (value)
                            acc += " --" + common_1.kebabize(key);
                        break;
                    case 'string':
                    case 'number':
                    case 'bigint':
                        acc += " --" + common_1.kebabize(key.toString()) + " " + value;
                        break;
                    default:
                        break;
                }
                return acc;
            }, context + " " + common_1.kebabize(start));
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
var cardanoCliCommand = function (command, subCommands) { return exports.commandFunction(command, subCommands); };
exports.cardanoCliCommand = cardanoCliCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQW9DO0FBQ3BDLG1DQUFtQztBQTJENUIsSUFBTSxlQUFlLEdBQzNCLFVBaUJDLEtBQWEsRUFDYixXQUFnQjtJQUVqQixPQUFBLFVBQUMsT0FBZTtRQUNoQixPQUFBLFVBQUMsT0FBNEI7WUFDNUIsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQVMsVUFBQyxHQUFHLEVBQUUsRUFBWTtvQkFBWCxHQUFHLFFBQUEsRUFBRSxLQUFLLFFBQUE7Z0JBQzdFLFFBQVEsT0FBTyxLQUFLLEVBQUU7b0JBQ3JCLEtBQUssU0FBUzt3QkFDYixJQUFJLEtBQUs7NEJBQUUsR0FBRyxJQUFJLFFBQU0saUJBQVEsQ0FBQyxHQUFHLENBQUcsQ0FBQTt3QkFDdkMsTUFBSztvQkFDTixLQUFLLFFBQVEsQ0FBQztvQkFDZCxLQUFLLFFBQVEsQ0FBQztvQkFDZCxLQUFLLFFBQVE7d0JBQ1osR0FBRyxJQUFJLFFBQU0saUJBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBSSxLQUFPLENBQUE7d0JBQ2hELE1BQUs7b0JBQ047d0JBQ0MsTUFBSztpQkFDTjtnQkFDRCxPQUFPLEdBQUcsQ0FBQTtZQUNYLENBQUMsRUFBSyxPQUFPLFNBQUksaUJBQVEsQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFBO1lBQ25DLElBQU0sR0FBRyxHQUFHO2dCQUNYLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDM0Isb0JBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU07d0JBQ25DLElBQUksS0FBSyxFQUFFOzRCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTt5QkFDYjs2QkFBTSxJQUFJLE1BQU0sRUFBRTs0QkFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO3lCQUNkOzZCQUFNOzRCQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDZjtvQkFDRixDQUFDLENBQUMsQ0FBQTtnQkFDSCxDQUFDLENBQUM7WUFWRixDQVVFLENBQUE7WUFDSCxrQkFDQyxPQUFPLFNBQUEsRUFDUCxHQUFHLEtBQUEsSUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsYUFBWCxXQUFXLGNBQVgsV0FBVyxHQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBTSxVQUFDLEdBQUcsRUFBRSxFQUFZO29CQUFYLEdBQUcsUUFBQSxFQUFFLEtBQUssUUFBQTtnQkFDakUsQ0FBQztnQkFBQyxHQUFXLENBQUMsR0FBRyxDQUFDLEdBQUksS0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUM1QyxPQUFPLEdBQUcsQ0FBQTtZQUNYLENBQUMsRUFBRSxFQUFTLENBQUMsRUFDYjtRQUNGLENBQUM7SUFwQ0QsQ0FvQ0M7QUFyQ0QsQ0FxQ0MsQ0FBQTtBQTFEVyxRQUFBLGVBQWUsbUJBMEQxQjtBQStDSyxJQUFNLGlCQUFpQixHQUFHLFVBY2hDLE9BQVUsRUFDVixXQUFnQixJQUNaLE9BQUEsdUJBQWUsQ0FBYyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQWxELENBQWtELENBQUE7QUFoQjFDLFFBQUEsaUJBQWlCLHFCQWdCeUIifQ==