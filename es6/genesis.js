import { commandFunction } from './command';
export const genesis = {
    /** Create a Shelley genesis key pair */
    'key-gen-genesis': commandFunction('genesis key-gen-genesis'),
    /** Create a Shelley genesis delegate key pair */
    'key-gen-delegate': commandFunction('genesis key-gen-delegate'),
    /** Create a Shelley genesis UTxO key pair */
    'key-gen-utxo': commandFunction('genesis key-gen-utxo'),
    /** Print the identifier (hash) of a public key */
    'key-hash': commandFunction('genesis key-hash'),
    /** Derive the verification key from a signing key */
    'get-ver-key': commandFunction('genesis get-ver-key'),
    /** Get the address for an initial UTxO based on the verification key */
    'initial-addr': commandFunction('genesis initial-addr'),
    /** Get the TxIn for an initial UTxO based on the verification key */
    'initial-txin': commandFunction('genesis initial-txin'),
    /** Create a Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    create: commandFunction('genesis create'),
    /** Create a staked Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    'create-staked': commandFunction('genesis create-staked'),
    /** Compute the hash of a genesis file */
    hash: commandFunction('genesis hash'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFM0MsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3RCLHdDQUF3QztJQUN4QyxpQkFBaUIsRUFBRSxlQUFlLENBQUMseUJBQXlCLENBQUM7SUFDN0QsaURBQWlEO0lBQ2pELGtCQUFrQixFQUFFLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQztJQUMvRCw2Q0FBNkM7SUFDN0MsY0FBYyxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2RCxrREFBa0Q7SUFDbEQsVUFBVSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvQyxxREFBcUQ7SUFDckQsYUFBYSxFQUFFLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRCx3RUFBd0U7SUFDeEUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2RCxxRUFBcUU7SUFDckUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2RCxrR0FBa0c7SUFDbEcsTUFBTSxFQUFFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6Qyx5R0FBeUc7SUFDekcsZUFBZSxFQUFFLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztJQUN6RCx5Q0FBeUM7SUFDekMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxjQUFjLENBQUM7Q0FDckMsQ0FBQSJ9