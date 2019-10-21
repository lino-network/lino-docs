# Join As A Validator

Before setting up your validator node, make sure you've already gone through the [Full Node Setup](/tutorial/full_node.html#set-up-fullnode-and-connect-to-testnet) guide.

Validator will get hourly inflation from Lino Blockchain. All validators are shown on [tracker](https://tracker.lino.network/#/). For more information about validator please visit [here](/blockchain/validator.html#validator).

In order to be qualified as a validator candidate, you should first have a Lino [account](/blockchain/account.html#account) with 100,000 locked points. The next step is to run a full node with a publicly accessible IP and sync to current height. You can check the current height on [tracker](https://tracker.lino.network/#/). You can query `http://<your node's IP>:26657/status` to check your node's current height. Once your node catches up with the latest block, you can run the following CLI command on your full node machine to become a Validator Candidate:
```
linocli tx validator register <your username> --link='{"website":"<your website url>", "identity":"<your keybase id>"}' --priv-key=<your private key> --chain-id=lino-testnet-upgrade4 --sequence=<your sequence number> --fees=10000linocoin
```

>*NOTE*: The above command is required to be executed on a running full node.

`<your username>` is the username of your Lino account that has over 100,000 Locked Points. You can get your Signing Private key on [Lino Account](https://account.lino.network/privkey).

`<your website url>` is a bio link about you that will be displayed on the wallet voting page.

`identity` is a 16-character string that locates your identity info on [Keybase](https://keybase.io). You should first register an account on Keybase and update add your PGP key in to get the 16-character string. [Lino Account](https://account.lino.network) will retrieve avatar from keybase and display on the voting page. It's a cryptographically secure method of verifying your identity across multiple online networks.

If you don't know your sequence number, you can set it to 1 and execute the command. You will receive the correct sequence number from the blockchain response. If the command is executed successfully, you should be able find yourself on the wallet voting page as a Validator Candidate.

If you get the following error:
```
ERROR: CheckTx failed: (155) {"codespace":"lino","code":155,"message":"msg: signature verification failed, chain-id:lino-testnet-upgrade4, seq:n"}
```

you should correct the sequence number and chain id in the command above.

## Validator Private Key

The validator private key is used by a validator to commit block. As a validator, you need to make sure your server is always online and the private key is not compromised. Validator private key is stored in the file `$HOME/.lino/config/priv_validator_key.json`. Multiple validators with same validator private key will be treated as the same validator. Double signing is not allowed so please make sure there is only one node running with correct private key file.

Validator private key has nothing to do with Reset private key or Signing private key so please don't mix them up.

## Update Validator Info

To update your website url and Keybase identity you can run following command:

```
linocli tx validator update <username> --link='{"website":"<your website url>", "identity":"<your keybase id>"}' --priv-key=<your private key> --sequence=<your sequence number> --fees=10000linocoin
```

For example:
```
linocli tx validator update validator1 --link='{"website":"https://lino.network", "identity":"CFADC7490E87BCB4"}' --priv-key= --sequence=20 --fees=10000linocoin
```

## Revoke Validator
You can revoke your validator at any time. Once revoke msg is accepted by the blockchain there is one week of grace period that your stake is still frozen. After one week of frozen period you are able to stake out your stake. To revoke your validator you can run following command:
```
linocli tx validator revoke <username> --priv-key=<your private key> --sequence=<your sequence number> --fees=10000linocoin
```

## Jail
Validator will be slashed if they miss 600 blocks or fail to feed price. If validator is slashed over a certain amount of times (6 for testnet) or slashed less than the minimum Lino Stake requirement (100000 Lino for testnet), your validator will be put into jail. Once your node is in jail it will no longer sign the msg and receive inflation reward. You can join back to validator set or revoke your validator. To join back to validator set you need to make sure you have meet the minimum Lino Stake requirement, then send validator register msg again to blockchain. To revoke the validator you need to send validator revoke msg to blockchain.