# Network Fee

A **Message** is a standard format of information on the Lino blockchain similar to a Bitcoin transaction. A **Transaction** can contain multiple Messages. In order to prevent spam and on-chain attack, Lino blockchain applies 2 types of network fees to different types of messages, **Developer Signed Messages**(DSM) and **General Messages**(GM).

**Maximum Messages Per Second** (<img src="https://tex.s2cms.ru/svg/MPS_%7Bmax%7D" alt="\inline p={MPS_{max}}" />) is an on-chain parameter that describes the maximum number of messages can be processed per second. It's initially set in the **Genesis File** and automatically updated whenever the actual MPS surpasses <img src="https://tex.s2cms.ru/svg/MPS_%7Bmax%7D" alt="\inline p={MPS_{max}}" />.

MPS Quotas are set for DSM and GM: <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" /> and <img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D" alt="\inline p={Q_{gm}}" />. If the **EMA of DSM**(see below) surpasses <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" />, the cost of each DSM will be significantly higher. Similarly, if the **EMA of GM**(see below) surpasses <img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D" alt="\inline p={Q_{gm}}" />, the cost of each GM will be significantly higher.

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%3DMPS_%7Bmax%7D*0.8" alt="Q_{dsm}=MPS_{max}*0.8" /></p>

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bgm%7D%3DMPS_%7Bmax%7D*0.2" alt="Q_{gm}=MPS_{max}*0.2" /></p>

## Developer Signed Messages(DSM)

It's counter-intuitive to charge a network fee for micro-donation or creating posts. Network fee also discourages users to donate or create content. In order to provide a user-friendly experience, we use the **Dynamic Bandwidth Model** for all the developer signed messages, i.e., messages signed by [App Developer Account](about) or [Affiliated Account](about). In other words, all developer signed messages are free, costing no network fees.

### Bandwidth

Each DSM sent by an App Developer Account (`@app`) will consume a certain amount of bandwidth (<img src="https://tex.s2cms.ru/svg/C_%7Bdsm%7D%5E%7Bapp%7D" alt="C_{dsm}^{app}" />).

All App Developer Accounts share the MPS Quota for DSM (<img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" />). The MPS quota allocated to each App Developer Account (<img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={Q_{dsm}^{app}}" />) is proportional to the App Developer Account's LS. For example, if `@app` has 1,000,000 LS while all App Developer Accounts have 2,000,000 LS in total, `@app`'s bandwidth should be:

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%5E%7Bapp%7D%20%3D%20Q_%7Bdsm%7D*%5Cfrac%7B1%2C000%2C000%7D%7B2%2C000%2C000%7D%3D%5Cfrac%7B1%7D%7B2%7DQ_%7Bdsm%7D" alt="Q_{dsm}^{app} = Q_{dsm}*\frac{1,000,000}{2,000,000}=\frac{1}{2}Q_{dsm}" /></p>

An App Developer Account's **bandwidth** (<img src="https://tex.s2cms.ru/svg/B_%7Bapp%7D" alt="\inline p={B_{app}}" />) is replenished at the speed of its allocated MPS quota (<img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D" alt="\inline p={Q_{dsm}}" />) per second. <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={Q_{dsm}^{app}}" /> has a hard limit that cannot exceed 50 times of <img src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={Q_{dsm}^{app}}" />. An App Developer Account cannot send any message if its <img src="https://tex.s2cms.ru/svg/B_%7Bapp%7D" alt="\inline p={B_{app}}" /> is less than 0.

### Bandwidth Consumption

**EMA of DSM** (<img src="https://tex.s2cms.ru/svg/EMA_%7Bdsm%7D" alt="\inline p={EMA_{gm}}" />) is the **exponential moving average** number of DSM per second.

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/EMA_%7Bdsm%7D%20%3D%20EMA_%7Bdsm%7D*(1-k)%2BMPS_%7Bdsm%7D*k%2C%5C%20k%3D%5Cfrac%7B1%7D%7Bn%7D" alt="EMA_{gm} = EMA_{gm}*(1-k)+MPS_{gm}*k,\ k=\frac{1}{n}" /></p>



When <img src="https://tex.s2cms.ru/svg/EMA_%7Bdsm%7D" alt="\inline p={EMA_{gm}}" /> is low, each DSM should just consume a small amount of bandwidth. The **Utilization Coefficient** (<img src="https://tex.s2cms.ru/svg/%5Cmu" alt="\inline p={\mu}" />) is a parameter that describes how busy the blockchain is:

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/%5Cmu%3Dexp(%5Cfrac%7BEMA_%7Bdsm%7D-Q_%7Bdsm%7D%7D%7BQ_%7Bdsm%7D%7D%20*%200.69)" alt="\mu=exp(\frac{EMA_{dsm}-Q_{dsm}}{Q_{dsm}} * 0.69)" /></p>

**Current MPS of DSM of an App** (<img src="https://tex.s2cms.ru/svg/MPS_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={MPS_{dsm}^{app}}" />) is the current number of DSM sent by `@app` per second. It can be simply calculated based on the number of DSM sent by `@app` in the current block and the block time. For example, if the current block contains 300 DSM sent by `@app`, the Current MPS of DSM of `@app` should be 100(based on a 3-second block time).

When <img src="https://tex.s2cms.ru/svg/MPS_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={MPS_{dsm}^{app}}" /> is high, each DSM should consume a larger amount of bandwidth. The **App Utilization Coefficient** (<img src="https://tex.s2cms.ru/svg/U_%7Bapp%7D" alt="\inline p={U_{app}}" />) for each App Developer Account is a parameter that describes how much the allocated bandwidth is consumed by this App Developer Account:

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/U_%7Bapp%7D%3Dexp(%5Cfrac%7Bmax(MPS_%7Bdsm%7D%5E%7Bapp%7D-Q_%7Bdsm%7D%5E%7Bapp%7D%2C0)%7D%7BQ_%7Bdsm%7D%5E%7Bapp%7D%7D*%5Cfrac%7B14%7D%7B5%7D)" alt="U_{app}=exp(\frac{max(MPS_{dsm}^{app}-Q_{dsm}^{app},0)}{Q_{dsm}^{app}}*\frac{14}{5})" /></p>

The bandwidth consumption of each DSM sent by `@app` (<img src="https://tex.s2cms.ru/svg/C_%7Bdsm%7D%5E%7Bapp%7D" alt="C_{dsm}^{app}" />) is simply the multiple of two coefficients:

<p align="center" style="text-align: center;"><img align="center" src="https://tex.s2cms.ru/svg/C_%7Bdsm%7D%5E%7Bapp%7D%3D%5Cmu*U%7Bapp%7D" alt="C_{dsm}^{app}=\mu*U{app}" /></p>

### Example

<p><img align="center" src="https://tex.s2cms.ru/svg/Q_%7Bdsm%7D%3D266" alt="\inline p={Q_{dsm}=66}" /></p>

| <img src="https://tex.s2cms.ru/svg/%5Cmu" alt="\inline p={\mu}" /> | <img src="https://tex.s2cms.ru/svg/MPS_%7Bdsm%7D%5E%7Bapp%7D%2FQ_%7Bdsm%7D%5E%7Bapp%7D" alt="\inline p={MPS_{dsm}^{app}/Q_{dsm}^{app}}" /> | <img src="https://tex.s2cms.ru/svg/C_%7Bdsm%7D%5E%7Bapp%7D" alt="C_{dsm}^{app}" /> |
| --- | --- | --- |
| 0.5 | 125% | 1 |
| 0.5 | 100% | 0.5 |

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
