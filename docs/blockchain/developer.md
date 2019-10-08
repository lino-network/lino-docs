# App Developer

## App Developer Account

App Developer Account is a special type of account on Lino blockchain. An App Developer Account can create a Lino App, issue [IDA](about), and receive [Developer Rewards](about).

- **Registration**: By maintaining a minimum required amount(for developer) of LINO Stake, any Lino account can become a developer account by sending a developer registration transaction.

- **Maintenance**: A developer account's LINO Stake cannot be less than the minimum required amount. For example, the minimum required LS amount is 10,000, and `@dlivetv` has 11,000 LS. `@dlivetv` can stake out at most 1,000 LS.

- **Unregistration**: In order to stake out all LS, an App Developer Account needs to convert all issued IDA back to LINO, and then send an Unregistration Transaction to the Lino blockchain. There is a 15-day **Pending Period** starting from the unregistration transaction, during which the developer account's LS cannot be staked out and can be slashed if any developer disputes proposal is approved. When the pending period is over, the developer account becomes a normal Lino account. After unregistration, the Lino account cannot register as a developer account again.

## Affiliated Account

When dealing with IDA related operations, a single App Developer Account may be far from enough to handle a high volume of user requests. For example, 100 users purchased `LEMON`, the IDA issued by `@dlivetv`, at the same time. `@dlivetv` wants to send 100 [IDA transfer messages](about) at the same time, which cannot be done without multiple accounts.

This is where Affiliated Account comes into play. An Affiliated Account is authorized by An App Developer Account and has the same access to its IDA. In other words, An Affiliated Account can transfer or donate IDA that issued by the App Developer Account on behalf of any user. For instance, `@dlivetv` can authorize 100 Affiliated Accounts, from `@dlivehandler1` to `@dlivehandler100`, to handle the IDA transfer requests simultaneously. An App Developer Account can authorize at most 500 Affiliated Accounts.

## Create Posts

A user needs to create a **Post** on Lino blockchain to receive donations.

Any user can create posts([message fees](about) will be applied), or alternatively, an Developer Account or an Affiliated Account can create posts on behalf of any user.
