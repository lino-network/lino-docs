# Join as Developer

Before register as developer, please make sure you have gone through our introduction about [developer](/blockchain/developer.html#app-developer).

Developer is a special account so before registration you should have a Lino Blockchain [account](/blockchain/account.html#account). [Lino Stake](/overview/ls.html#lino-stake-ls) is required so please stake in enough Lino before developer registration. Stake requirement can be found in our [genesis file](https://github.com/lino-network/lino/blob/master/genesis/upgrade4/genesis.json#L74).

>*NOTE*: parameters in genesis file are Lino Coin. 1 Lino = 100000 Coin. 

Once you have enough Lino Stake, you can register as developer through our command line tool or SDK.

For [linocli](https://github.com/lino-network/lino/tree/master/docs/cli), command is
```
linocli tx developer register <username> --website=<your website> --description=<description> --appmeta=<app meta> --priv-key=<your wallet private key> --chain-id=lino-testnet-upgrade4 --sequence=1 --fees=10000linocoin
```

In above command, username is the Lino Stake holder. This account would be the main App account which is used to receive reward, grant permission and issue IDA. Click [here](/blockchain/developer.html#app-developer) for more information.

Website and description is used as public information. App Meta is used by [Lino Account](https://account.lino.network) for login redirect purpose. You can get your wallet private key on [Lino Account](https://account.lino.network/privkey).

You can also register through our [Golang SDK](https://github.com/lino-network/lino-go/tree/master/doc#broadcast-developer) or [Javascript SDK](https://github.com/lino-network/lino-js/tree/master/doc#broadcast-developer). For more information please check [Lino SDK](/tutorial/sdk.html#lino-sdk)