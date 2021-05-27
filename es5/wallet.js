"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wallet = void 0;
var command_1 = require("./command");
exports.wallet = {
    address: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'address'),
    attach: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'attach'),
    create: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'create'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'destroy'),
    detach: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'detach'),
    help: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'help'),
    list: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'list'),
    log: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'log'),
    recover: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'recover'),
    statement: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'statement'),
    status: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'status'),
    sync: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'sync'),
    utxos: command_1.makeCommandWithArgsOptsAndFlags('wallet', 'utxos'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMkQ7QUFvRzlDLFFBQUEsTUFBTSxHQUFXO0lBQzdCLE9BQU8sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQzdELE1BQU0sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzNELE1BQU0sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzNELE9BQU8sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQzdELE1BQU0sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzNELElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3ZELElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3ZELEdBQUcsRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQ3JELE9BQU8sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQzdELFNBQVMsRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO0lBQ2pFLE1BQU0sRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzNELElBQUksRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3ZELEtBQUssRUFBRSx5Q0FBK0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0NBQ3pELENBQUEifQ==