"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardanoCli = void 0;
var command_1 = require("./command");
var cardanoCli = function (cliPath) { return ({
    address: command_1.cardanoCliCommand('address', {
        build: command_1.commandFunction('build'),
        info: command_1.commandFunction('info'),
        keyGen: command_1.commandFunction('keyGen'),
        keyHash: command_1.commandFunction('keyHash'),
    })(cliPath),
    genesis: command_1.cardanoCliCommand('genesis', {
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
    governance: command_1.cardanoCliCommand('governance', {
        createMirCertificate: command_1.commandFunction('createMirCertificate'),
        createGenesisKeyDelegationCertificate: command_1.commandFunction('createGenesisKeyDelegationCertificate'),
        createUpdateProposal: command_1.commandFunction('createUpdateProposal'),
    })(cliPath),
    key: command_1.cardanoCliCommand('key', {
        verificationKey: command_1.commandFunction('verificationKey'),
        nonExtendedKey: command_1.commandFunction('nonExtendedKey'),
        convertByronKey: command_1.commandFunction('convertByronKey'),
        convertByronGenesisVkey: command_1.commandFunction('convertByronGenesisVkey'),
        convertItnKey: command_1.commandFunction('convertItnKey'),
        convertItnExtendedKey: command_1.commandFunction('convertItnExtendedKey'),
        convertItnBip32Key: command_1.commandFunction('convertItnBip32Key'),
        convertCardanoAddressKey: command_1.commandFunction('convertCardanoAddressKey'),
    })(cliPath),
    node: command_1.cardanoCliCommand('node', {
        keyGen: command_1.commandFunction('keyGen'),
        keyGenKes: command_1.commandFunction('keyGenKes'),
        keyGenVrf: command_1.commandFunction('keyGenVrf'),
        keyHashVrf: command_1.commandFunction('keyHashVrf'),
        newCounter: command_1.commandFunction('newCounter'),
        issueOpCert: command_1.commandFunction('issueOpCert'),
    })(cliPath),
    query: command_1.cardanoCliCommand('query', {
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
    stakeAddress: command_1.cardanoCliCommand('stakeAddress', {
        keyGen: command_1.commandFunction('keyGen'),
        build: command_1.commandFunction('build'),
        keyHash: command_1.commandFunction('keyHash'),
        registrationCertificate: command_1.commandFunction('registrationCertificate'),
        deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
        delegationCertificate: command_1.commandFunction('delegationCertificate'),
    })(cliPath),
    stakePool: command_1.cardanoCliCommand('stakePool', {
        registrationCertificate: command_1.commandFunction('registrationCertificate'),
        deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
        id: command_1.commandFunction('id'),
        metadataHash: command_1.commandFunction('metadataHash'),
    })(cliPath),
    textView: command_1.cardanoCliCommand('textView', {
        decodeCbor: command_1.commandFunction('decodeCbor'),
    })(cliPath),
    transaction: command_1.cardanoCliCommand('transaction', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWtGO0FBRTNFLElBQU0sVUFBVSxHQUFHLFVBQUMsT0FBZSxJQUFLLE9BQUEsQ0FBQztJQUMvQyxPQUFPLEVBQUUsMkJBQWlCLENBQUMsU0FBUyxFQUFFO1FBQ3JDLEtBQUssRUFBRSx5QkFBZSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLEVBQUUseUJBQWUsQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxFQUFFLHlCQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSx5QkFBZSxDQUFDLFNBQVMsQ0FBQztLQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ1gsT0FBTyxFQUFFLDJCQUFpQixDQUFDLFNBQVMsRUFBRTtRQUNyQyxhQUFhLEVBQUUseUJBQWUsQ0FBQyxlQUFlLENBQUM7UUFDL0MsY0FBYyxFQUFFLHlCQUFlLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsVUFBVSxFQUFFLHlCQUFlLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sRUFBRSx5QkFBZSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxTQUFTLEVBQUUseUJBQWUsQ0FBQyxXQUFXLENBQUM7UUFDdkMsV0FBVyxFQUFFLHlCQUFlLENBQUMsYUFBYSxDQUFDO1FBQzNDLFdBQVcsRUFBRSx5QkFBZSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxNQUFNLEVBQUUseUJBQWUsQ0FBQyxRQUFRLENBQUM7UUFDakMsWUFBWSxFQUFFLHlCQUFlLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQztLQUM3QixDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ1gsVUFBVSxFQUFFLDJCQUFpQixDQUFDLFlBQVksRUFBRTtRQUMzQyxvQkFBb0IsRUFBRSx5QkFBZSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELHFDQUFxQyxF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