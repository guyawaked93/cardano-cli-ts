/** Node operation commands */
import { commandFunction } from './command';
/** Node operation commands */
export const node = {
    /** Create a key pair for a node operator's offline key and a new certificate issue counter */
    'key-gen': commandFunction('node key-gen'),
    /** Create a key pair for a node KES operational key */
    'key-gen-KES': commandFunction('node key-gen-KES'),
    /** Create a key pair for a node VRF operational key */
    'key-gen-VRF': commandFunction('node key-gen-VRF'),
    /** Print hash of a node's operational VRF key. */
    'key-hash-VRF': commandFunction('node key-hash-VRF'),
    /** Create a new certificate issue counter */
    'new-counter': commandFunction('node new-counter'),
    /** Issue a node operational certificate */
    'issue-op-cert': commandFunction('node issue-op-cert'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRTNDLDhCQUE4QjtBQUM5QixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUc7SUFDbkIsOEZBQThGO0lBQzlGLFNBQVMsRUFBRSxlQUFlLENBT3ZCLGNBQWMsQ0FBQztJQUNsQix1REFBdUQ7SUFDdkQsYUFBYSxFQUFFLGVBQWUsQ0FLM0Isa0JBQWtCLENBQUM7SUFDdEIsdURBQXVEO0lBQ3ZELGFBQWEsRUFBRSxlQUFlLENBSzNCLGtCQUFrQixDQUFDO0lBQ3RCLGtEQUFrRDtJQUNsRCxjQUFjLEVBQUUsZUFBZSxDQU81QixtQkFBbUIsQ0FBQztJQUN2Qiw2Q0FBNkM7SUFDN0MsYUFBYSxFQUFFLGVBQWUsQ0FXM0Isa0JBQWtCLENBQUM7SUFDdEIsMkNBQTJDO0lBQzNDLGVBQWUsRUFBRSxlQUFlLENBYTdCLG9CQUFvQixDQUFDO0NBQ3hCLENBQUEifQ==