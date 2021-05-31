import { commandFunction } from './command';
export const key = {
    /** Get a verification key from a signing key. This supports all key types. */
    'verification-key': commandFunction('key verification-key'),
    /** Get a non-extended verification key from an extended verification key. This supports all extended key types. */
    'non-extended-key': commandFunction('key non-extended-key'),
    /** Convert a Byron payment, genesis or genesis delegate key (signing or verification) to a corresponding Shelley-format key. */
    'convert-byron-key': commandFunction('key convert-byron-key'),
    /** Convert a Base64-encoded Byron genesis verification key to a Shelley genesis verification key */
    'convert-byron-genesis-vkey': commandFunction('key convert-byron-genesis-vkey'),
    /** Convert an Incentivized Testnet (ITN) non-extended (Ed25519) signing or verification key to a corresponding Shelley stake key */
    'convert-itn-key': commandFunction('key convert-itn-key'),
    /** Convert an Incentivized Testnet (ITN) extended (Ed25519Extended) signing key to a corresponding Shelley stake signing key */
    'convert-itn-extended-key': commandFunction('key convert-itn-extended-key'),
    /** Convert an Incentivized Testnet (ITN) BIP32 (Ed25519Bip32) signing key to a corresponding Shelley stake signing key */
    'convert-itn-bip32-key': commandFunction('key convert-itn-bip32-key'),
    /** Convert a cardano-address extended signing key to a corresponding Shelley-format key. */
    'convert-cardano-address-key': commandFunction('key convert-cardano-address-key'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUNsQiw4RUFBOEU7SUFDOUUsa0JBQWtCLEVBQUUsZUFBZSxDQUtoQyxzQkFBc0IsQ0FBQztJQUMxQixtSEFBbUg7SUFDbkgsa0JBQWtCLEVBQUUsZUFBZSxDQUtoQyxzQkFBc0IsQ0FBQztJQUMxQixnSUFBZ0k7SUFDaEksbUJBQW1CLEVBQUUsZUFBZSxDQXFCakMsdUJBQXVCLENBQUM7SUFDM0Isb0dBQW9HO0lBQ3BHLDRCQUE0QixFQUFFLGVBQWUsQ0FLMUMsZ0NBQWdDLENBQUM7SUFDcEMsb0lBQW9JO0lBQ3BJLGlCQUFpQixFQUFFLGVBQWUsQ0FPL0IscUJBQXFCLENBQUM7SUFDekIsZ0lBQWdJO0lBQ2hJLDBCQUEwQixFQUFFLGVBQWUsQ0FLeEMsOEJBQThCLENBQUM7SUFDbEMsMEhBQTBIO0lBQzFILHVCQUF1QixFQUFFLGVBQWUsQ0FLckMsMkJBQTJCLENBQUM7SUFDL0IsNEZBQTRGO0lBQzVGLDZCQUE2QixFQUFFLGVBQWUsQ0FhM0MsaUNBQWlDLENBQUM7Q0FDckMsQ0FBQSJ9