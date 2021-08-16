import { cardanoCliCommand, commandFunction } from './command';
export const cardanoCli = (cliPath = 'cardano-cli') => ({
    /** Payment address commands */
    address: cardanoCliCommand('address', {
        build: commandFunction('build'),
        info: commandFunction('info'),
        keyGen: commandFunction('keyGen'),
        keyHash: commandFunction('keyHash'),
    })(cliPath),
    /** Stake address commands */
    stakeAddress: cardanoCliCommand('stakeAddress', {
        keyGen: commandFunction('keyGen'),
        build: commandFunction('build'),
        keyHash: commandFunction('keyHash'),
        registrationCertificate: commandFunction('registrationCertificate'),
        deregistrationCertificate: commandFunction('deregistrationCertificate'),
        delegationCertificate: commandFunction('delegationCertificate'),
    })(cliPath),
    /** Key utility commands */
    key: cardanoCliCommand('key', {
        verificationKey: commandFunction('verificationKey'),
        nonExtendedKey: commandFunction('nonExtendedKey'),
        convertByronKey: commandFunction('convertByronKey'),
        convertByronGenesisVkey: commandFunction('convertByronGenesisVkey'),
        convertItnKey: commandFunction('convertItnKey'),
        convertItnExtendedKey: commandFunction('convertItnExtendedKey'),
        convertItnBip32Key: commandFunction('convertItnBip32Key'),
        convertCardanoAddressKey: commandFunction('convertCardanoAddressKey'),
    })(cliPath),
    /** Transaction commands */
    transaction: cardanoCliCommand('transaction', {
        buildRaw: commandFunction('buildRaw'),
        sign: commandFunction('sign'),
        witness: commandFunction('witness'),
        assemble: commandFunction('assemble'),
        submit: commandFunction('submit'),
        policyid: commandFunction('policyid'),
        calculateMinFee: commandFunction('calculateMinFee'),
        calculateMinValue: commandFunction('calculateMinValue'),
        txid: commandFunction('txid'),
        view: commandFunction('view'),
    })(cliPath),
    /** Node operation commands */
    node: cardanoCliCommand('node', {
        keyGen: commandFunction('keyGen'),
        keyGenKes: commandFunction('keyGenKes'),
        keyGenVrf: commandFunction('keyGenVrf'),
        keyHashVrf: commandFunction('keyHashVrf'),
        newCounter: commandFunction('newCounter'),
        issueOpCert: commandFunction('issueOpCert'),
    })(cliPath),
    /** Stake pool commands */
    stakePool: cardanoCliCommand('stakePool', {
        registrationCertificate: commandFunction('registrationCertificate'),
        deregistrationCertificate: commandFunction('deregistrationCertificate'),
        id: commandFunction('id'),
        metadataHash: commandFunction('metadataHash'),
    })(cliPath),
    /** Node query commands. Will query the local node whose
     * Unix domain socket is obtained from the
     * CARDANO_NODE_SOCKET_PATH enviromnent variable.
     */
    query: cardanoCliCommand('query', {
        protocolParameters: commandFunction('protocolParameters'),
        tip: commandFunction('tip'),
        stakeDistribution: commandFunction('stakeDistribution'),
        stakeAddressInfo: commandFunction('stakeAddressInfo'),
        utxo: commandFunction('utxo'),
        ledgerState: commandFunction('ledgerState'),
        protocolState: commandFunction('protocolState'),
        stakeSnapshot: commandFunction('stakeSnapshot'),
        poolParams: commandFunction('poolParams'),
    })(cliPath),
    /** Commands for dealing with Shelley TextView files.
     * Transactions, addresses etc are stored on disk as
     * TextView files.
     */
    textView: cardanoCliCommand('textView', {
        decodeCbor: commandFunction('decodeCbor'),
    })(cliPath),
    /** Genesis block commands */
    genesis: cardanoCliCommand('genesis', {
        keyGenGenesis: commandFunction('keyGenGenesis'),
        keyGenDelegate: commandFunction('keyGenDelegate'),
        keyGenUtxo: commandFunction('keyGenUtxo'),
        keyHash: commandFunction('keyHash'),
        getVerKey: commandFunction('getVerKey'),
        initialAddr: commandFunction('initialAddr'),
        initialTxin: commandFunction('initialTxin'),
        create: commandFunction('create'),
        createStaked: commandFunction('createStaked'),
        hash: commandFunction('hash'),
    })(cliPath),
    /** Governance commands */
    governance: cardanoCliCommand('governance', {
        createMirCertificate: commandFunction('createMirCertificate'),
        createGenesisKeyDelegationCertificate: commandFunction('createGenesisKeyDelegationCertificate'),
        createUpdateProposal: commandFunction('createUpdateProposal'),
    })(cliPath),
});
export default cardanoCli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUU5RCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxVQUFrQixhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0QsK0JBQStCO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7UUFDckMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDakMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUM7S0FDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNYLDZCQUE2QjtJQUM3QixZQUFZLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxFQUFFO1FBQy9DLE1BQU0sRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEtBQUssRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO1FBQy9CLE9BQU8sRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQ25DLHVCQUF1QixFQUFFLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQztRQUNuRSx5QkFBeUIsRUFBRSxlQUFlLENBQUMsMkJBQTJCLENBQUM7UUFDdkUscUJBQXFCLEVBQUUsZUFBZSxDQUFDLHVCQUF1QixDQUFDO0tBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDWCwyQkFBMkI7SUFDM0IsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEtBQUssRUFBRTtRQUM3QixlQUFlLEVBQUUsZUFBZSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELGNBQWMsRUFBRSxlQUFlLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsZUFBZSxFQUFFLGVBQWUsQ0FBQyxpQkFB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