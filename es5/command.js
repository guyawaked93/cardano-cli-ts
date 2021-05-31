"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandFunction = void 0;
var child_process_1 = require("child_process");
/** Todo, run the commands */
var commandFunction = function (command) { return function (cliPath) { return function (opts) {
    command += Object.entries(opts).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc += "\n " + key + " " + value;
        return acc;
    }, cliPath);
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
}; }; };
exports.commandFunction = commandFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFvQztBQUdwQyw2QkFBNkI7QUFDdEIsSUFBTSxlQUFlLEdBQUcsVUFHOUIsT0FBZSxJQUNYLE9BQUEsVUFBQyxPQUFlLElBQUssT0FBQSxVQUFDLElBQWE7SUFDdkMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFTLFVBQUMsR0FBRyxFQUFFLEVBQVk7WUFBWCxHQUFHLFFBQUEsRUFBRSxLQUFLLFFBQUE7UUFDL0QsR0FBRyxJQUFJLFFBQU0sR0FBRyxTQUFJLEtBQU8sQ0FBQTtRQUMzQixPQUFPLEdBQUcsQ0FBQTtJQUNYLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNYLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNsQyxvQkFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUNuQyxJQUFJLEtBQUssRUFBRTtnQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDYjtpQkFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2Q7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2Y7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxFQWhCeUIsQ0FnQnpCLEVBaEJJLENBZ0JKLENBQUE7QUFwQlksUUFBQSxlQUFlLG1CQW9CM0IifQ==