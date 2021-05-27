"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
var command_1 = require("./command");
exports.transaction = {
    'add-change': command_1.makeCommandWithArgsOptsAndFlags('add-change'),
    'add-input': command_1.makeCommandWithArgsOptsAndFlags('add-input'),
    'add-output': command_1.makeCommandWithArgsOptsAndFlags('add-output'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('destroy'),
    export: command_1.makeCommandWithArgsOptsAndFlags('export'),
    finalize: command_1.makeCommandWithArgsOptsAndFlags('finalize'),
    import: command_1.makeCommandWithArgsOptsAndFlags('import'),
    'input-select': command_1.makeCommandWithArgsOptsAndFlags('input-select'),
    list: command_1.makeCommandWithArgsOptsAndFlags('list'),
    new: command_1.makeCommandWithArgsOptsAndFlags('new'),
    'rm-change': command_1.makeCommandWithArgsOptsAndFlags('rm-change'),
    'rm-input': command_1.makeCommandWithArgsOptsAndFlags('rm-input'),
    'rm-output': command_1.makeCommandWithArgsOptsAndFlags('rm-output'),
    send: command_1.makeCommandWithArgsOptsAndFlags('send'),
    sign: command_1.makeCommandWithArgsOptsAndFlags('sign'),
    status: command_1.makeCommandWithArgsOptsAndFlags('status'),
    help: command_1.makeCommandWithArgsOptsAndFlags('help'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJEO0FBOEk5QyxRQUFBLFdBQVcsR0FBZ0I7SUFDdkMsWUFBWSxFQUFFLHlDQUErQixDQUFDLFlBQVksQ0FBQztJQUMzRCxXQUFXLEVBQUUseUNBQStCLENBQUMsV0FBVyxDQUFDO0lBQ3pELFlBQVksRUFBRSx5Q0FBK0IsQ0FBQyxZQUFZLENBQUM7SUFDM0QsT0FBTyxFQUFFLHlDQUErQixDQUFDLFNBQVMsQ0FBQztJQUNuRCxNQUFNLEVBQUUseUNBQStCLENBQUMsUUFBUSxDQUFDO0lBQ2pELFFBQVEsRUFBRSx5Q0FBK0IsQ0FBQyxVQUFVLENBQUM7SUFDckQsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxjQUFjLEVBQUUseUNBQStCLENBQUMsY0FBYyxDQUFDO0lBQy9ELElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxNQUFNLENBQUM7SUFDN0MsR0FBRyxFQUFFLHlDQUErQixDQUFDLEtBQUssQ0FBQztJQUMzQyxXQUFXLEVBQUUseUNBQStCLENBQUMsV0FBVyxDQUFDO0lBQ3pELFVBQVUsRUFBRSx5Q0FBK0IsQ0FBQyxVQUFVLENBQUM7SUFDdkQsV0FBVyxFQUFFLHlDQUErQixDQUFDLFdBQVcsQ0FBQztJQUN6RCxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxNQUFNLENBQUM7SUFDN0MsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0NBQzdDLENBQUEifQ==