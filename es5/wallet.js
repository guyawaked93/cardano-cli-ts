"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wallet = void 0;
var command_1 = require("./command");
exports.wallet = {
    address: command_1.makeCommandWithArgsOptsAndFlags('address'),
    attach: command_1.makeCommandWithArgsOptsAndFlags('attach'),
    create: command_1.makeCommandWithArgsOptsAndFlags('create'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('destroy'),
    detach: command_1.makeCommandWithArgsOptsAndFlags('detach'),
    help: command_1.makeCommandWithArgsOptsAndFlags('help'),
    list: command_1.makeCommandWithArgsOptsAndFlags('list'),
    log: command_1.makeCommandWithArgsOptsAndFlags('log'),
    recover: command_1.makeCommandWithArgsOptsAndFlags('recover'),
    statement: command_1.makeCommandWithArgsOptsAndFlags('statement'),
    status: command_1.makeCommandWithArgsOptsAndFlags('status'),
    sync: command_1.makeCommandWithArgsOptsAndFlags('sync'),
    utxos: command_1.makeCommandWithArgsOptsAndFlags('utxos'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMkQ7QUFvRzlDLFFBQUEsTUFBTSxHQUFXO0lBQzdCLE9BQU8sRUFBRSx5Q0FBK0IsQ0FBQyxTQUFTLENBQUM7SUFDbkQsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxNQUFNLEVBQUUseUNBQStCLENBQUMsUUFBUSxDQUFDO0lBQ2pELE9BQU8sRUFBRSx5Q0FBK0IsQ0FBQyxTQUFTLENBQUM7SUFDbkQsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxNQUFNLENBQUM7SUFDN0MsR0FBRyxFQUFFLHlDQUErQixDQUFDLEtBQUssQ0FBQztJQUMzQyxPQUFPLEVBQUUseUNBQStCLENBQUMsU0FBUyxDQUFDO0lBQ25ELFNBQVMsRUFBRSx5Q0FBK0IsQ0FBQyxXQUFXLENBQUM7SUFDdkQsTUFBTSxFQUFFLHlDQUErQixDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFJLEVBQUUseUNBQStCLENBQUMsTUFBTSxDQUFDO0lBQzdDLEtBQUssRUFBRSx5Q0FBK0IsQ0FBQyxPQUFPLENBQUM7Q0FDL0MsQ0FBQSJ9