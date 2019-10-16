# Join as Validator

Before setting up your validator node, make sure you've already gone through the [Full Node Setup](/tutorial/full_node.html#set-up-fullnode-and-connect-to-testnet) guide.

Validator will get hourly inflation from Lino Blockchain. All validators are shown on [tracker](https://tracker.lino.network/#/). For more information about validator please visit [validator](/blockchain/validator.html#validator).

To be a validator, you should first have a Lino [account](/blockchain/account.html#account) with 100000 locked points. Then run a full node with public access IP and sync to current height. You can check current height on [tracker](https://tracker.lino.network/#/). To check your node's height you can access http://<your node's IP>:26657/status. Once your node sync with the latest height, you can run cli command on your fullnode machine:
```
linocli tx validator register <your username> --link='{\"website\":\"<your website url>\", \"identity\":\"<your keybase id>\"}' --priv-key=<your wallet private key> --chain-id=lino-testnet-upgrade4 --sequence=<your sequence number> --fees=10000linocoin
```

>*NOTE*: Above command is required to be executed on the node with full node running. 

In above command, `username` is the user who locks 100000 LINO Points. You can get your wallet private key on [Lino Account](https://account.lino.network/privkey). `website` link is one you can use to display your information in wallet voting page. The `identity` can be used as to verify identity with systems like [Keybase](https://keybase.io). When using with Keybase identity should be populated with a 16 characters string that is generated with a [keybase.io](https://keybase.io) account (update add your PGP key in keybase to get id). [Lino Account](https://account.lino.network) will retrieve avatar from keybase and display on the voting page. It's a cryptographically secure method of verifying your identity across multiple online networks. If you don't know your sequence number, you can set sequence to 1 then execute the command. Blockchain will prompt your correct sequence number if it is incorrect. Once the command execute successfully, you should be able find yourself on [tracker](https://tracker.lino.network/#/) as the validator.

If you got error:
```
ERROR: CheckTx failed: (155) {"codespace":"lino","code":155,"message":"msg: signature verification failed, chain-id:lino-testnet-upgrade3, seq:n"}
```

just correct the sequence number and chain id to the command above.

## Private Key

Validator private key is used by validator node to commit block. Validators need to make sure that their servers are always online and their private keys are not compromised. Validator private key is located at file `$HOME/.lino/config/priv_validator_key.json`. Node with same private key will be treated as the same validator. Double signing is not allowed so please make sure there is only one node running with correct private key file.

Validator private key has nothing to do with user account private key so please don't mix them up.

## Update Validator Info

To update your website url or keybase identity you can run following command:

```
linocli tx validator update <username> --link='{\"website\":\"<your website url>\", \"identity\":\"<your keybase id>\"}' --priv-key=<your wallet private key> --sequence=<your sequence number> --fees=10000linocoin
```

For example:
```
linocli tx validator update validator1 --link='{\"website\":\"https://lino.network\", \"identity\":\"CFADC7490E87BCB4\"}' --priv-key= --sequence=20 --fees=10000linocoin
```