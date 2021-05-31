"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockchain = void 0;
var command_1 = require("./command");
exports.blockchain = {
    cat: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'cat'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'destroy'),
    'remote-fetch': command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'remote-fetch'),
    'remote-ls': command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'remote-ls'),
    'remote-add': command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'remote-add'),
    'remote-rm': command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'remote-rm'),
    'verify-block': command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'verify-block'),
    forward: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'forward'),
    gc: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'gc'),
    help: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'help'),
    list: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'list'),
    log: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'log'),
    new: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'new'),
    pull: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'pull'),
    query: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'query'),
    status: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'status'),
    verify: command_1.makeCommandWithArgsOptsAndFlags('blockchain', 'verify'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyRDtBQTZLOUMsUUFBQSxVQUFVLEdBQWU7SUFDckMsR0FBRyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDekQsT0FBTyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7SUFDakUsY0FBYyxFQUFFLHlDQUErQixDQUM5QyxZQUFZLEVBQ1osY0FBYyxDQUNkO0lBQ0QsV0FBVyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7SUFDdkUsWUFBWSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDekUsV0FBVyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7SUFDdkUsY0FBYyxFQUFFLHlDQUErQixDQUM5QyxZQUFZLEVBQ1osY0FBYyxDQUNkO0lBQ0QsT0FBTyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7SUFDakUsRUFBRSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7SUFDdkQsSUFBSSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDM0QsSUFBSSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDM0QsR0FBRyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDekQsR0FBRyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDekQsSUFBSSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDM0QsS0FBSyxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7SUFDN0QsTUFBTSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7SUFDL0QsTUFBTSxFQUFFLHlDQUErQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7Q0FDdEQsQ0FBQSJ9