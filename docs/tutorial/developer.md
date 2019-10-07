# Developer

- **Registration**: By maintaining a minimum required amount(for developer) of LINO Stake, any Lino account can become a developer account by sending a developer registration transaction.
- **Maintenance**: A developer account's LINO Stake cannot be less than the minimum required amount. For example, the minimum required LS amount is 10,000, and @dlive has 11,000 LS. @dlive can stake out at most 1,000 LS.
- **Unregistration**: In order to stake out all LS, a developer account needs to convert all issued IDA back to LINO, and then send an Unregistration Transaction to the Lino blockchain. There is a 15-day **Pending Period** starting from the unregistration transaction, during which the developer account's LS cannot be staked out and  can be slashed if any developer disputes proposal is approved. When the pending period is over, the developer account becomes a normal Lino account. After unregistration, the Lino account cannot register as a developer account again.

## Create Posts

Any user can create posts(Tx fee will be applied), or alternatively, a developer or affiliated accounts can create posts on behalf of any user(dynamic bandwidth model applies). User can delete any posts created by developers at any time(Tx fee will be applied).
