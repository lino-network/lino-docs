# Proof of Content Value

Proof of Content Value is a built-in algorithm on Lino blockchain that quantitatively evaluate the value of [posts](../blockchain/developer.html#create-posts), i.e., contents created on the blockchain. It takes donation [messages](../blockchain/fee.html#network-fee) as input, and calculates the amount of [Content Rewards](../overview/contributors.html#content-creators) allocated to each content creator.

It's been formally proven that Proof of Content Value has the following attributes:

 - **Statistially Fair**: The value of a content, measured in Content Rewards, is positively proportional to total amount of donation to that content.

 - **Economically Sybil-proof**: The profit of any sybil attack is not profitable.

 The details and full proof can be found in the [Technical Whitepaper](https://vsce.shortcm.li/kFzXLQ).
