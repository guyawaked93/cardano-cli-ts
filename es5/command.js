"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCommandWithArgsOptsAndFlags = void 0;
var child_process_1 = require("child_process");
/** Todo, run the commands */
var makeCommandWithArgsOptsAndFlags = function (cmd, sub) { return function (args, opts, flags) {
    var command = "cardano-cli " + cmd + " " + sub;
    // prettier-ignore
    command += args.length > 0 ? ' ' + args.filter(function (arg) { return arg !== undefined; }).map(function (arg) {
        if (typeof arg === 'string' && arg.match(/\s/)) {
            return "\"" + arg + "\"";
        }
        else {
            return arg;
        }
    }).join(' ') : '';
    // prettier-ignore
    command += opts ? Object.entries(opts).reduce(function (acc, _a) {
        var opt = _a[0], val = _a[1];
        if (val) {
            if (typeof val === 'string' && val.match(/\s/)) {
                val = "\"" + val + "\"";
            }
            acc += " --" + opt + " " + val;
        }
        return acc;
    }, '') : '';
    // prettier-ignore
    command += flags ? Object.entries(flags).reduce(function (acc, _a) {
        var flag = _a[0], on = _a[1];
        if (flag && on) {
            acc += " --" + flag;
        }
        return acc;
    }, '') : '';
    console.log("[RUN]: " + command);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFvQztBQUtwQyw2QkFBNkI7QUFDdEIsSUFBTSwrQkFBK0IsR0FBRyxVQUM5QyxHQUFNLEVBQ04sR0FBc0IsSUFDbEIsT0FBQSxVQUNKLElBQXdDLEVBQ3hDLElBQXNDLEVBQ3RDLEtBQStCO0lBRS9CLElBQUksT0FBTyxHQUFHLGlCQUFlLEdBQUcsU0FBSSxHQUFLLENBQUE7SUFFekMsa0JBQWtCO0lBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssU0FBUyxFQUFqQixDQUFpQixDQUFFLENBQUMsR0FBRyxDQUFFLFVBQUUsR0FBRztRQUNwRixJQUFLLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFHO1lBQ2pELE9BQU8sT0FBSSxHQUFHLE9BQUcsQ0FBQTtTQUNqQjthQUFNO1lBQ04sT0FBTyxHQUFHLENBQUE7U0FDVjtJQUNGLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBRWxCLGtCQUFrQjtJQUNsQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBUyxVQUFDLEdBQUcsRUFBRSxFQUFVO1lBQVQsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUFBO1FBQ3BFLElBQUssR0FBRyxFQUFHO1lBQ1YsSUFBSyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsRUFBRztnQkFDbkQsR0FBRyxHQUFHLE9BQUksR0FBRyxPQUFHLENBQUE7YUFDaEI7WUFDRCxHQUFHLElBQUksUUFBTSxHQUFHLFNBQUksR0FBSyxDQUFBO1NBQ3pCO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUVYLGtCQUFrQjtJQUNsQixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBUyxVQUFDLEdBQUcsRUFBRSxFQUFVO1lBQVQsSUFBSSxRQUFBLEVBQUUsRUFBRSxRQUFBO1FBQ3RFLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNmLEdBQUcsSUFBSSxRQUFNLElBQU0sQ0FBQTtTQUNuQjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsT0FBUyxDQUFDLENBQUE7SUFFaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2xDLG9CQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNO1lBQ25DLElBQUksS0FBSyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNiO2lCQUFNLElBQUksTUFBTSxFQUFFO2dCQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDZDtpQkFBTTtnQkFDTixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDZjtRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLEVBaERJLENBZ0RKLENBQUE7QUFuRFksUUFBQSwrQkFBK0IsbUNBbUQzQyJ9