# Token-incentivized NDN

> Note: The Token-incentivized NDN is still under development and is not integrated in the current version of Lino Core.

## Named Data Networking(NDN)

[Named Data Networking](https://named-data.net/) (NDN) is a brand new network architecture proposal, that offers advantages in content delivery over today’s TCP/IP architecture. It aims to resolve the architectural mis-match between today’s Internet architecture and its usage, where 55% of total traffic is consumed by Internet video in 2017, while the conversational model of IP communications inherently prohibits caching and multi-cast. NDN is a “universal overlay”: NDN can run over anything, e.g IP, TCP, UDP, or ethernet. No additional devices are required to join a network. Automatic in-network caching is enabled by naming data, and the stateful forwarding plane of NDN. Security is built into data itself, as every data packet have a signature from its producer.

## Token-incentivized Named-Data Networking protocol

We propose a **token-incentivized named-data networking** (TNDN) protocol that extends NDN with a marketplace. In a nutshell, users, applications, and ISPs pay for downloading data from the next-hop neighbors and get paid for serving traffic to their downstream neighbors. The market price shall drive users to make decisions that fit their needs, and also drive applications to properly price the CDN service to maximum their profits. ISPs can not only benefit from the inherently supported data multicast in NDN, but can also optimize the inter-AS traffic by leveraging the market. In this forwarding-style network, privacy are inherently protected as forwarding does not indicate any ownership of the data.

## Benefits For Streamers And Viewers

Leveraging the token-incentivized NDN, viewers can utilize their idle network bandwidth and computing resources to provide infrastructure to Lino blockchain while earning LINO as rewards at the same time. In other words, viewers will be able to earn while watching on Lino Apps. Based on our beta testing, most viewers who received a small amount of rewards of LINO will donate to the streamers they are watching, resulting in the increase of streamers' revenues.
