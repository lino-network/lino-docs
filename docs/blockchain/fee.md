# Network Fee

A **Message** is a standard format of information on the Lino blockchain similar to a Bitcoin transaction. A **Transaction** can contain multiple Messages. In order to prevent spam and on-chain attack, Lino blockchain applies 2 types of network fees to different types of messages, **Developer Signed Messages**(DSM) and **General Messages**(GM).

**Maximum Messages Per Second** (<img src="https://tex.s2cms.ru/svg/MPS_%7Bmax%7D" alt="\inline p={MPS_{max}}" />) is an on-chain parameter that describes the maximum number of messages can be processed per second. It's initially set in the **Genesis File** and automatically updated whenever the actual MPS surpasses <img src="https://tex.s2cms.ru/svg/MPS_%7Bmax%7D" alt="\inline p={MPS_{max}}" />.

MPS Quotas are set for DSM and GM: <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" /> and <img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D" alt="\inline p={Q_{gm}}" />. If the **EMA of DSM**(see below) surpasses <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" />, the cost of each DSM will be significantly higher. Similarly, if the **EMA of GM**(see below) surpasses <img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D" alt="\inline p={Q_{gm}}" />, the cost of each GM will be significantly higher.

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%3DMPS_%7Bmax%7D*0.8" alt="Q_{dsm}=MPS_{max}*0.8" /></p>

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D%3DMPS_%7Bmax%7D*0.2" alt="Q_{gm}=MPS_{max}*0.2" /></p>

## Developer Signed Messages(DSM)

It's counter-intuitive to charge a network fee for micro-donation or creating posts. Network fee also discourages users to donate or create content. In order to provide a user-friendly experience, we use the **Dynamic Bandwidth Model** for all the developer signed messages, i.e., messages signed by [App Developer Account](about) or [Affiliated Account](about). In other words, all developer signed messages are free, costing no network fees.

### Dynamic Bandwidth Model

All App Developer Accounts share the MPS Quota for DSM <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" />.

$$MPS_{DSM}^{EMA}$$

the exponential moving average number of developer signed messages per second of all past blocks

bandwidth_app1:=bandwidth quota allocated to app1

u:=vacancy coefficient

p:=punishment for over-usage coefficient

`$$Quota_{DSM} = max(MPS_{max}, MPS_{total}^{current}) * 80\%$$`

$$bandwidth_{app1}=\frac{LS_{app1}}{LS_{all apps}}*Quota_{DSM}$$

$$\mu=exp(\frac{MPS_{DSM}^{EMA}-Quota_{DSM}}{Quota_{DSM}} * 0.69)$$

$$p=exp(\frac{max(MPS_{app1}^{current}-bandwidth_{app1},0)}{bandwidth_{app1}}*\frac{14}{5})$$

$$bandwith\ consumption = \mu*p$$

[Example: Quota_DSM=266](./Example-Quota_DSM-266-8da5a80c-261c-4341-a88f-730bc6b676b3.csv)

### Example

## General Messages(GM)

Any message that is not signed by an [App Developer Account](about) or [Affiliated Account](about) is a General Message. Lino blockchain charges a **Message Fee** for sending General Messages. [Validators](about) collect messages fees as compensation for validating and processing General Messages. The busier the Lino blockchain, the higher the message fee is.

**Current MPS of GM** (<img src="https://tex.s2cms.ru/svg/MPS_%7Bgm%7D" alt="\inline p={MPS_{gm}}" />) is the current number of GM per second. It can be simply calculated based on the number of GM in the current block and the block time. For example, if the current block contains 30 GM, the Current MPS of GM should be 10(based on a 3-second block time).

**EMA of GM** (<img src="https://tex.s2cms.ru/svg/EMA_%7Bgm%7D" alt="\inline p={EMA_{gm}}" />) is the **exponential moving average** number of GM per second.

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/EMA_%7Bgm%7D%20%3D%20EMA_%7Bgm%7D*(1-k)%2BMPS_%7Bgm%7D*k%2C%5C%20k%3D%5Cfrac%7B1%7D%7Bn%7D" alt="EMA_{gm} = EMA_{gm}*(1-k)+MPS_{gm}*k,\ k=\frac{1}{n}" /></p>

The message fee(<img src="https://tex.s2cms.ru/svg/Fee_%7Bgm%7D" alt="\inline p={Fee_{gm}}" />) is calculated as below:

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Fee_%7Bgm%7D%20%3D%20exp(%5Cfrac%7BEMA_%7Bgm%7D-Q_%7Bgm%7D%7D%7BQ_%7Bgm%7D%7D*6)*10" alt="Fee_{gm} = exp(\frac{EMA_{gm}-Q_{gm}}{Q_{gm}}*6)*10" /></p>



### Example

<p><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D%3D66" alt="\inline p={Q_{gm}=66}" /></p>

| <img src="https://tex.s2cms.ru/svg/EMA_%7Bgm%7D" alt="\inline p={EMA_{gm}}" /> | <img src="https://tex.s2cms.ru/svg/Fee_%7Bgm%7D" alt="\inline p={Fee_{gm}}" /> |
| --- | --- |
| 0 | 0.025 LINO |
| 15 (23%) | 0.1 LINO |
| 33 (50%) | 0.5 LINO |
| 41 (62%) | 1 LINO |
| 66 (100%) | 10 LINO |
| 100 (150%) | 200 LINO |
