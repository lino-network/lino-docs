# Introduction

**Validators** and **Standby Validators**, selected from **Validator Candidates**, are the block producers of the Lino blockchain.

## Validator Candidate

### Become A Validator Candidate

You can follow the [tutorial](about) to register a Validator Account.

1. Stake in at least a minimum amount of 100,000 [LS](about)
2. Send a [validator candidate registration message](about) to the Lino blockchain

After becoming a validator candidate, one can receive votes from LS holders and potentially be selected to the [Validator Set](validator.html#validator-set-validators-standby-validators).

### Vote For Validator Candidates

Only LS holders are eligible for voting for validator candidates, and they are required to vote for up to 3 validator candidates. The amount of votes is equal to the amount of LS of an LS holder. If an LS holder has 10,000 LS and vote for 3 validator candidates, each of the 3 validator candidates will receive 3,333.33 votes.

### Unregistration

Similar to developer accounts, a validator candidate needs to send an Unregistration Transaction to the Lino blockchain. There is a 14-day **Pending Period** starting from the unregistration transaction, during which the validator candidate account's LS cannot be staked out and  can be slashed if any validator candidate disputes proposal is approved. When the pending period is over, the validator candidate account becomes a normal Lino account. Unlike developer accounts, a Lino account can register as a validator candidate again after unregistration.

## Validator Set: Validators & Standby Validators

The **Total Votes** of a validator candidate is a sum of its own LS amount and the votes received from LS holders. The top 21 validator candidates with the most votes will be selected to the **Validator Set.** The first 16 are **Validators**, and the rest 5 are **Standby Validators**.

### Validator Rewards

86.4% of the Validation Rewards will be equally allocated to all validators, and the rest 13.6% will be equally allocated to all standby validators.

### Committing Power

The consensus algorithm requires each block must be signed and approved by over 2/3 **Committing Power**. A validator's Committing Power equals to its total votes received from LS holders. A standby validator's Committing Power is a constant 1. The probability of producing a block of anyone in the validator set is proportional to its Committing Power. That is to say, a standby validator has a very low chance to produce blocks.

## LS Slash

When a validator or a standby validator misbehaves, its LS may be slashed in the following circumstances:

- **Fail to sign/produce a certain amount of consecutive blocks**

    Every validator has a counter to record how many blocks it has missed. when this number reaches 600, the validator's LS will be slashed by 200 and the counter will be
    reset to 0. The counter will also be decreased one for each block this validator produced.

- **Fail to update LINO price**

    Every validator need to update LINO price every 60 minutes, it will be slashed 10000 LINO
    for each failed update.

- **Byzantine validator**

    If a validator try to double singing a block, it will be considered as Byzantine validator
    and be slashed 1000 LINO.


### In Jail

Whenever a validator or a standby validator's LS has been slashed to the amount that less than the minimun LS requirement, or been considered as Byzantine validator or been kicked out by a proposal, it will be automatically put in **Jail**. In Jail is a special status. When a validator or a standby validator is in jail, it can no longer produce block. There are two options available when in jail:

1. **Unregistration**: As described above, the pending period will be applied.
2. **Get Out of The Jail**:
    1. In-jail account can simply get out of the jail by sending a message to the Lino blockchain.
    2. If the account's LS got slashed below the minimum requirement, it has to stake in to meet the requirement before getting out.
