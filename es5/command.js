"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCommandWithArgsOptsAndFlags = void 0;
var child_process_1 = require("child_process");
/** Todo, run the commands */
var makeCommandWithArgsOptsAndFlags = function (cmd) { return function (args, opts, flags) {
    var command = cmd;
    command += args.length > 0 ? ' ' + args.join(' ') : '';
    // prettier-ignore
    command += opts ? Object.entries(opts).reduce(function (acc, _a) {
        var opt = _a[0], val = _a[1];
        if (val) {
            acc += " --" + opt + " " + val;
        }
        return acc;
    }, '') : '';
    // prettier-ignore
    command += flags ? Object.entries(flags).reduce(function (acc, _a) {
        var flag = _a[0], on = _a[1];
        if (flag && on) {
            acc += ' ' + flag;
        }
        return acc;
    }, '') : '';
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
}; };
exports.makeCommandWithArgsOptsAndFlags = makeCommandWithArgsOptsAndFlags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFvQztBQUVwQyw2QkFBNkI7QUFDdEIsSUFBTSwrQkFBK0IsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLFVBQy9ELElBQXdDLEVBQ3hDLElBQXNDLEVBQ3RDLEtBQStCO0lBRS9CLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFFdEQsa0JBQWtCO0lBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFTLFVBQUMsR0FBRyxFQUFFLEVBQVU7WUFBVCxHQUFHLFFBQUEsRUFBRSxHQUFHLFFBQUE7UUFDcEUsSUFBSyxHQUFHLEVBQUc7WUFDVixHQUFHLElBQUksUUFBTSxHQUFHLFNBQUksR0FBSyxDQUFBO1NBQ3pCO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUVYLGtCQUFrQjtJQUNsQixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBUyxVQUFDLEdBQUcsRUFBRSxFQUFVO1lBQVQsSUFBSSxRQUFBLEVBQUUsRUFBRSxRQUFBO1FBQ3RFLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNmLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUVYLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNsQyxvQkFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUNuQyxJQUFJLEtBQUssRUFBRTtnQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDYjtpQkFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2Q7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2Y7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxFQW5DK0QsQ0FtQy9ELENBQUE7QUFuQ1ksUUFBQSwrQkFBK0IsbUNBbUMzQyJ9