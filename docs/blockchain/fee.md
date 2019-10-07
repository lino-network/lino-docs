# Msg fee

There are 3 types of network fee models applying to different types of messages.

## Developer Signed Messages

It's counter-intuitive to charge a network fee for micro-donation or creating posts. Network fee also discourages user to donate or create content. In order to provide a user-friendly experience, we use the **Dynamic Bandwidth Model** for all the developer signed messages. In other words, all developer signed messages are free, costing no network fees.

## Dynamic Bandwidth Model

$$MPS_{DSM}^{EMA}$$

the exponential moving average number of developer signed messages per second of all past blocks

bandwidth_app1:=bandwidth quota allocated to app1

u:=vacancy coefficient

p:=punishment for over-usage coefficient

$$Quota_{DSM} = max(MPS_{max}, MPS_{total}^{current}) * 80\%$$

$$bandwidth_{app1}=\frac{LS_{app1}}{LS_{all apps}}*Quota_{DSM}$$

$$\mu=exp(\frac{MPS_{DSM}^{EMA}-Quota_{DSM}}{Quota_{DSM}} * 0.69)$$

$$p=exp(\frac{max(MPS_{app1}^{current}-bandwidth_{app1},0)}{bandwidth_{app1}}*\frac{14}{5})$$

$$bandwith\ consumption = \mu*p$$

[Example: Quota_DSM=266](./Example-Quota_DSM-266-8da5a80c-261c-4341-a88f-730bc6b676b3.csv)



## Vote Messages

Vote messages are also exempt from any Tx fee.

### Vote For Validator Candidates

An LS holder can vote for at most 3 validators, and has to wait for at least 1 week to change or revoke any vote.

### Vote For Proposals

An LS holder can vote for any proposal for free. Votes for proposals cannot be altered.

## General Messages

### Example: Quota_GM=66 (66 General Msg per second)
| EMA quota Usage | Msg fee |
| --- | --- |
| 0 | 0.025 LINO |
| 15 (23%) | 0.1 LINO |
| 33 (50%) | 0.5 LINO |
| 41 (62%) | 1 LINO |
| 66 (100%) | 10 LINO |
| 100 (150%) | 200 LINO |


$$MPS_{GM}^{EMA}$$

the exponential moving average number of general messages per second of all past blocks

$$MPS_{GM}^{current}$$

the current number of general messages per second

$$Quota_{GM} = max(MPS_{max}, MPS_{total}^{current}) * 20\%$$

$$MPS_{GM}^{EMA} = MPS_{GM}^{EMA}*(1-k)+MPS_{GM}^{current}*k,\ k=\frac{1}{n}$$

$$Fee_{GM} = exp(\frac{MPS_{GM}^{EMA}-Quota_{GM}}{Quota_{GM}} * 6) *10$$

[Example: Quota_GM=66](./Example-Quota_GM-66-7676d1d3-9d3e-40d1-8f7f-95aba173897c.csv)
