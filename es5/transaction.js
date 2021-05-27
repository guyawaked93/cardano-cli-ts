"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
var command_1 = require("./command");
exports.transaction = {
    'add-change': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'add-change'),
    'add-input': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'add-input'),
    'add-output': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'add-output'),
    destroy: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'destroy'),
    export: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'export'),
    finalize: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'finalize'),
    import: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'import'),
    'input-select': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'input-select'),
    list: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'list'),
    new: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'new'),
    'rm-change': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'rm-change'),
    'rm-input': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'rm-input'),
    'rm-output': command_1.makeCommandWithArgsOptsAndFlags('transaction', 'rm-output'),
    send: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'send'),
    sign: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'sign'),
    status: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'status'),
    help: command_1.makeCommandWithArgsOptsAndFlags('transaction', 'help'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJEO0FBOEk5QyxRQUFBLFdBQVcsR0FBZ0I7SUFDdkMsWUFBWSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7SUFDMUUsV0FBVyxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDeEUsWUFBWSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7SUFDMUUsT0FBTyxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7SUFDbEUsTUFBTSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFDaEUsUUFBUSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7SUFDcEUsTUFBTSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFDaEUsY0FBYyxFQUFFLHlDQUErQixDQUM5QyxhQUFhLEVBQ2IsY0FBYyxDQUNkO0lBQ0QsSUFBSSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7SUFDNUQsR0FBRyxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7SUFDMUQsV0FBVyxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDeEUsVUFBVSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7SUFDdEUsV0FBVyxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDeEUsSUFBSSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7SUFDNUQsSUFBSSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7SUFDNUQsTUFBTSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFDaEUsSUFBSSxFQUFFLHlDQUErQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7Q0FDNUQsQ0FBQSJ9