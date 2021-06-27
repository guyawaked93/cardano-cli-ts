"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardanoCli = exports.cardanoCliCommand = void 0;
var command_1 = require("./command");
var cardanoCliCommand = function (command, subCommands) { return command_1.commandFunction(command, subCommands); };
exports.cardanoCliCommand = cardanoCliCommand;
var cardanoCli = function (cliPath) { return ({
    address: exports.cardanoCliCommand('address', {
        build: command_1.commandFunction('build'),
        info: command_1.commandFunction('info'),
        keyGen: command_1.commandFunction('keyGen'),
        keyHash: command_1.commandFunction('keyHash'),
    })(cliPath),
    genesis: exports.cardanoCliCommand('genesis', {
        keyGenGenesis: command_1.commandFunction('keyGenGenesis'),
        keyGenDelegate: command_1.commandFunction('keyGenDelegate'),
        keyGenUtxo: command_1.commandFunction('keyGenUtxo'),
        keyHash: command_1.commandFunction('keyHash'),
        getVerKey: command_1.commandFunction('getVerKey'),
        initialAddr: command_1.commandFunction('initialAddr'),
        initialTxin: command_1.commandFunction('initialTxin'),
        create: command_1.commandFunction('create'),
        createStaked: command_1.commandFunction('createStaked'),
        hash: command_1.commandFunction('hash'),
    })(cliPath),
    governance: exports.cardanoCliCommand('governance', {
        createMirCertificate: command_1.commandFunction('createMirCertificate'),
        createGenesisKeyDelegationCertificate: command_1.commandFunction('createGenesisKeyDelegationCertificate'),
        createUpdateProposal: command_1.commandFunction('createUpdateProposal'),
    })(cliPath),
    key: exports.cardanoCliCommand('key', {
        verificationKey: command_1.commandFunction('verificationKey'),
        nonExtendedKey: command_1.commandFunction('nonExtendedKey'),
        convertByronKey: command_1.commandFunction('convertByronKey'),
        convertByronGenesisVkey: command_1.commandFunction('convertByronGenesisVkey'),
        convertItnKey: command_1.commandFunction('convertItnKey'),
        convertItnExtendedKey: command_1.commandFunction('convertItnExtendedKey'),
        convertItnBip32Key: command_1.commandFunction('convertItnBip32Key'),
        convertCardanoAddressKey: command_1.commandFunction('convertCardanoAddressKey'),
    })(cliPath),
    node: exports.cardanoCliCommand('node', {
        keyGen: command_1.commandFunction('keyGen'),
        keyGenKes: command_1.commandFunction('keyGenKes'),
        keyGenVrf: command_1.commandFunction('keyGenVrf'),
        keyHashVrf: command_1.commandFunction('keyHashVrf'),
        newCounter: command_1.commandFunction('newCounter'),
        issueOpCert: command_1.commandFunction('issueOpCert'),
    })(cliPath),
    query: exports.cardanoCliCommand('query', {
        protocolParameters: command_1.commandFunction('protocolParameters'),
        tip: command_1.commandFunction('tip'),
        stakeDistribution: command_1.commandFunction('stakeDistribution'),
        stakeAddressInfo: command_1.commandFunction('stakeAddressInfo'),
        utxo: command_1.commandFunction('utxo'),
        ledgerState: command_1.commandFunction('ledgerState'),
        protocolState: command_1.commandFunction('protocolState'),
        stakeSnapshot: command_1.commandFunction('stakeSnapshot'),
        poolParams: command_1.commandFunction('poolParams'),
    })(cliPath),
    stakeAddress: exports.cardanoCliCommand('stakeAddress', {
        keyGen: command_1.commandFunction('keyGen'),
        build: command_1.commandFunction('build'),
        keyHash: command_1.commandFunction('keyHash'),
        registrationCertificate: command_1.commandFunction('registrationCertificate'),
        deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
        delegationCertificate: command_1.commandFunction('delegationCertificate'),
    })(cliPath),
    stakePool: exports.cardanoCliCommand('stakePool', {
        registrationCertificate: command_1.commandFunction('registrationCertificate'),
        deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
        id: command_1.commandFunction('id'),
        metadataHash: command_1.commandFunction('metadataHash'),
    })(cliPath),
    textView: exports.cardanoCliCommand('textView', {
        decodeCbor: command_1.commandFunction('decodeCbor'),
    })(cliPath),
    transaction: exports.cardanoCliCommand('transaction', {
        buildRaw: command_1.commandFunction('buildRaw'),
        sign: command_1.commandFunction('sign'),
        witness: command_1.commandFunction('witness'),
        assemble: command_1.commandFunction('assemble'),
        submit: command_1.commandFunction('submit'),
        policyid: command_1.commandFunction('policyid'),
        calculateMinFee: command_1.commandFunction('calculateMinFee'),
        calculateMinValue: command_1.commandFunction('calculateMinValue'),
        txid: command_1.commandFunction('txid'),
        view: command_1.commandFunction('view'),
    })(cliPath),
}); };
exports.cardanoCli = cardanoCli;
exports.default = exports.cardanoCli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQStEO0FBOEN4RCxJQUFNLGlCQUFpQixHQUFHLFVBY2hDLE9BQVUsRUFDVixXQUFnQixJQUNaLE9BQUEseUJBQWUsQ0FBYyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQWxELENBQWtELENBQUE7QUFoQjFDLFFBQUEsaUJBQWlCLHFCQWdCeUI7QUFFaEQsSUFBTSxVQUFVLEdBQUcsVUFBQyxPQUFlLElBQUssT0FBQSxDQUFDO0lBQy9DLE9BQU8sRUFBRSx5QkFBaUIsQ0FBQyxTQUFTLEVBQUU7UUFDckMsS0FBSyxFQUFFLHlCQUFlLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEVBQUUseUJBQWUsQ0FBQyxRQUFRLENBQUM7UUFDakMsT0FBTyxFQUFFLHlCQUFlLENBQUMsU0FBUyxDQUFDO0tBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDWCxPQUFPLEVBQUUseUJBQWlCLENBQUMsU0FBUyxFQUFFO1FBQ3JDLGFBQWEsRUFBRSx5QkFBZSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxjQUFjLEVBQUUseUJBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxVQUFVLEVBQUUseUJBQWUsQ0FBQyxZQUFZLENBQUM7UUFDekMsT0FBTyxFQUFFLHlCQUFlLENBQUMsU0FBUyxDQUFDO1FBQ25DLFNBQVMsRUFBRSx5QkFBZSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxXQUFXLEVBQUUseUJBQWUsQ0FBQyxhQUFhLENBQUM7UUFDM0MsV0FBVyxFQUFFLHlCQUFlLENBQUMsYUFBYSxDQUFDO1FBQzNDLE1BQU0sRUFBRSx5QkFBZSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxZQUFZLEVBQUUseUJBQWUsQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxFQUFFLHlCQUFlLENB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