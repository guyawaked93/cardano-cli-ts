"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardanoCli = void 0;
var command_1 = require("./command");
var cardanoCli = function (cliPath) {
    if (cliPath === void 0) { cliPath = 'cardano-cli'; }
    return ({
        /** Payment address commands */
        address: command_1.cardanoCliCommand('address', {
            build: command_1.commandFunction('build'),
            info: command_1.commandFunction('info'),
            keyGen: command_1.commandFunction('keyGen'),
            keyHash: command_1.commandFunction('keyHash'),
        })(cliPath),
        /** Stake address commands */
        stakeAddress: command_1.cardanoCliCommand('stakeAddress', {
            keyGen: command_1.commandFunction('keyGen'),
            build: command_1.commandFunction('build'),
            keyHash: command_1.commandFunction('keyHash'),
            registrationCertificate: command_1.commandFunction('registrationCertificate'),
            deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
            delegationCertificate: command_1.commandFunction('delegationCertificate'),
        })(cliPath),
        /** Key utility commands */
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
        /** Transaction commands */
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
        /** Node operation commands */
        node: command_1.cardanoCliCommand('node', {
            keyGen: command_1.commandFunction('keyGen'),
            keyGenKes: command_1.commandFunction('keyGenKes'),
            keyGenVrf: command_1.commandFunction('keyGenVrf'),
            keyHashVrf: command_1.commandFunction('keyHashVrf'),
            newCounter: command_1.commandFunction('newCounter'),
            issueOpCert: command_1.commandFunction('issueOpCert'),
        })(cliPath),
        /** Stake pool commands */
        stakePool: command_1.cardanoCliCommand('stakePool', {
            registrationCertificate: command_1.commandFunction('registrationCertificate'),
            deregistrationCertificate: command_1.commandFunction('deregistrationCertificate'),
            id: command_1.commandFunction('id'),
            metadataHash: command_1.commandFunction('metadataHash'),
        })(cliPath),
        /** Node query commands. Will query the local node whose
         * Unix domain socket is obtained from the
         * CARDANO_NODE_SOCKET_PATH enviromnent variable.
         */
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
        /** Commands for dealing with Shelley TextView files.
         * Transactions, addresses etc are stored on disk as
         * TextView files.
         */
        textView: command_1.cardanoCliCommand('textView', {
            decodeCbor: command_1.commandFunction('decodeCbor'),
        })(cliPath),
        /** Genesis block commands */
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
        /** Governance commands */
        governance: command_1.cardanoCliCommand('governance', {
            createMirCertificate: command_1.commandFunction('createMirCertificate'),
            createGenesisKeyDelegationCertificate: command_1.commandFunction('createGenesisKeyDelegationCertificate'),
            createUpdateProposal: command_1.commandFunction('createUpdateProposal'),
        })(cliPath),
    });
};
exports.cardanoCli = cardanoCli;
exports.default = exports.cardanoCli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQThEO0FBRXZELElBQU0sVUFBVSxHQUFHLFVBQUMsT0FBK0I7SUFBL0Isd0JBQUEsRUFBQSx1QkFBK0I7SUFBSyxPQUFBLENBQUM7UUFDL0QsK0JBQStCO1FBQy9CLE9BQU8sRUFBRSwyQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDckMsS0FBSyxFQUFFLHlCQUFlLENBQUMsT0FBTyxDQUFDO1lBQy9CLElBQUksRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQztZQUM3QixNQUFNLEVBQUUseUJBQWUsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxFQUFFLHlCQUFlLENBQUMsU0FBUyxDQUFDO1NBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDWCw2QkFBNkI7UUFDN0IsWUFBWSxFQUFFLDJCQUFpQixDQUFDLGNBQWMsRUFBRTtZQUMvQyxNQUFNLEVBQUUseUJBQWUsQ0FBQyxRQUFRLENBQUM7WUFDakMsS0FBSyxFQUFFLHlCQUFlLENBQUMsT0FBTyxDQUFDO1lBQy9CLE9BQU8sRUFBRSx5QkFBZSxDQUFDLFNBQVMsQ0FBQztZQUNuQyx1QkFBdUIsRUFBRSx5QkFBZSxDQUFDLHlCQUF5QixDQUFDO1lBQ25FLHlCQUF5QixFQUFFLHlCQUFlLENBQUMsMkJBQTJCLENBQUM7WUFDdkUscUJBQXFCLEVBQUUseUJBQWUsQ0FBQyx1QkFBdUIsQ0FBQztTQUMvRCxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ1gsMkJBQTJCO1FBQzNCLEdBQUcsRUFBRSwyQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDN0IsZUFBZSxFQUFFLHlCQUFlLENBQUMsaUJBQWlCLENBQUM7WUFDbkQsY0FBYyxFQUFFLHlCQUFlLENBQUMsZ0JBQWdCLENBQUM7WUFDakQsZUFBZSxFQUFFLHlCQUFlLENBQUMsaUJBQWlCLENBQUM7WUFDbkQsdUJBQXVC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