"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockchain = void 0;
var command_1 = require("./command");
exports.blockchain = {
    cat: command_1.makeCommandWithArgsOptsAndFlags('cat'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('destroy'),
    'remote-fetch': command_1.makeCommandWithArgsOptsAndFlags('remote-fetch'),
    'remote-ls': command_1.makeCommandWithArgsOptsAndFlags('remote-ls'),
    'remote-add': command_1.makeCommandWithArgsOptsAndFlags('remote-add'),
    'remote-rm': command_1.makeCommandWithArgsOptsAndFlags('remote-rm'),
    'verify-block': command_1.makeCommandWithArgsOptsAndFlags('verify-block'),
    forward: command_1.makeCommandWithArgsOptsAndFlags('forward'),
    gc: command_1.makeCommandWithArgsOptsAndFlags('gc'),
    help: command_1.makeCommandWithArgsOptsAndFlags('help'),
    list: command_1.makeCommandWithArgsOptsAndFlags('list'),
    log: command_1.makeCommandWithArgsOptsAndFlags('log'),
    new: command_1.makeCommandWithArgsOptsAndFlags('new'),
    pull: command_1.makeCommandWithArgsOptsAndFlags('pull'),
    query: command_1.makeCommandWithArgsOptsAndFlags('query'),
    status: command_1.makeCommandWithArgsOptsAndFlags('status'),
    verify: command_1.makeCommandWithArgsOptsAndFlags('verify'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyRDtBQTZLOUMsUUFBQSxVQUFVLEdBQWU7SUFDckMsR0FBRyxFQUFFLHlDQUErQixDQUFDLEtBQUssQ0FBQztJQUMzQyxPQUFPLEVBQUUseUNBQStCLENBQUMsU0FBUyxDQUFDO0lBQ25ELGNBQWMsRUFBRSx5Q0FBK0IsQ0FBQyxjQUFjLENBQUM7SUFDL0QsV0FBVyxFQUFFLHlDQUErQixDQUFDLFdBQVcsQ0FBQztJQUN6RCxZQUFZLEVBQUUseUNBQStCLENBQUMsWUFBWSxDQUFDO0lBQzNELFdBQVcsRUFBRSx5Q0FBK0IsQ0FBQyxXQUFXLENBQUM7SUFDekQsY0FBYyxFQUFFLHlDQUErQixDQUFDLGNBQWMsQ0FBQztJQUMvRCxPQUFPLEVBQUUseUNBQStCLENBQUMsU0FBUyxDQUFDO0lBQ25ELEVBQUUsRUFBRSx5Q0FBK0IsQ0FBQyxJQUFJLENBQUM7SUFDekMsSUFBSSxFQUFFLHlDQUErQixDQUFDLE1BQU0sQ0FBQztJQUM3QyxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0lBQzdDLEdBQUcsRUFBRSx5Q0FBK0IsQ0FBQyxLQUFLLENBQUM7SUFDM0MsR0FBRyxFQUFFLHlDQUErQixDQUFDLEtBQUssQ0FBQztJQUMzQyxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0lBQzdDLEtBQUssRUFBRSx5Q0FBK0IsQ0FBQyxPQUFPLENBQUM7SUFDL0MsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxNQUFNLEVBQUUseUNBQStCLENBQUMsUUFBUSxDQUFDO0NBQ2pELENBQUEifQ==