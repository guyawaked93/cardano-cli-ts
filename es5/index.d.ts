import { Blockchain } from './blockchain';
import { Transaction } from './transaction';
import { Wallet } from './wallet';
export interface Cardano {
    /** blockchain operations */
    blockchain: Blockchain;
    /** Transaction operations. */
    transaction: Transaction;
    /** wallet operations */
    wallet: Wallet;
    /** Debug and advanced tooling operations. */
    /** No debugging, just write the code, nothing will ever go wrong, so no debugging */
    debug?: undefined;
    /** Prints this message or the help of the given subcommand(s) */
    /** Help, you don't need help, you got this fam, believe in yourself */
    help?: undefined;
}
/** Humm, how shall I export this module ?!?
 * cardano?
 * or maybe clidano
 * pehaps clardano
 * what about claudio?
 */
declare const cardano: Cardano;
export default cardano;
