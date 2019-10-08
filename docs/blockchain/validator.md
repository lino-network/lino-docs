# Introduction

**Validators** and **Standby Validators** are the block producer of the Lino blockchain. Validators are selected from **Validator Candidates.**

## Validator Candidate

### Become A Validator Candidate

1. Stake in at least a minimum amount of 100,000 LS
2. Send a validator candidate registration message to the Lino blockchain

After becoming a validator candidate, one can receive votes from LS holders and potentially be selected to the Validator Set(see below).

### Vote For Validator Candidates

Only LS holders are eligible for voting for validator candidates, and they are required to vote for up to 3 validator candidates. The amount of votes is equal to the amount of LS of an LS holder. If an LS holder has 10,000 LS and vote for 3 validator candidates, each of the 3 validator candidates will receive 3,333.33 votes.

### Unregistration

Similar to developer accounts, a validator candidate needs to send an Unregistration Transaction to the Lino blockchain. There is a 14-day **Pending Period** starting from the unregistration transaction, during which the validator candidate account's LS cannot be staked out and  can be slashed if any validator candidate disputes proposal is approved. When the pending period is over, the validator candidate account becomes a normal Lino account. Unlike developer accounts, a Lino account can register as a validator candidate again after unregistration.

## Validator Set: Validators & Standby Validators

The **Total Votes** of a validator candidate is a sum of its own LS amount and the votes received from LS holders. The top 21 validator candidates with the most votes will be selected to the **Validator Set.** The first 16 are **Validators**, and the rest 5 are **Standby Validators**.

### Validation Rewards

86.4% of the Validation Rewards will be equally allocated to all validators, and the rest 13.6% will be equally allocated to all standby validators.

### Committing Power

The consensus algorithm requires each block must be signed and approved by over 2/3 **Committing Power**. A validator's Committing Power equals to its total votes(sum of its own LS amount and the votes received from LS holders). A standby validator's Committing Power is a constant 1. The probability of producing a block of anyone in the validator set is proportional to its Committing Power. That is to say, a standby validator has a very low chance to produce block.

## LS Slash

When a validator or a standby validator misbehaves, its LS may be slashed in the following circumstances:

- Fail to sign/produce a certain amount of consecutive blocks
- Fail to update LINO price

### In Jail

Whenever a validator or a standby validator's LS has been slashed or been kicked out from the validator set by a proposal, it will be automatically put in **Jail.** In Jail is a special status. When a validator or a standby validator is in jail, it can no longer produce block. There are two options available when in jail:

1. **Unregistration**: As described above, the pending period will be applied.
2. **Get Out of The Jail**:
    1. In-jail account can simply get out of the jail by sending a message to the Lino blockchain.
    2. If the account's LS got slashed below the minimum requirement, it has to stake in to meet the requirement before getting out.
