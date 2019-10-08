# Join as Validator

Validator will get hourly inflation from Lino Blockchain. All validators are shown on [tracker](https://tracker.lino.network/#/).

To be a validator, you should first be a voter with 200000 locked LINO Points and have 200000 more Lino Points in balance. Then run a full node with public access IP and sync to current height. You can check current height on [tracker](https://tracker.lino.network/#/). To check your node's height you can access http://<your node's IP>:26657/status. Once your node sync with the latest height, you can run cli on your fullnode:
```
./linocli validator-deposit --user=<your username> --priv-key=<your wallet private key> --amount=200000 --chain-id=lino-testnet-upgrade3 --sequence=<your sequence number>
```
In above command, username is the voter who locks 200000 LINO Points and with 200000 LINO Points in balance. You can get your wallet private key on [Lino Account](https://account.lino.network/privkey). If you don't know your account's current sequence number, you can set sequence to 1 then execute the command. Blockchain will prompt your correct sequence number if it is incorrect. Once the command execute successfully, you should be able find yourself on [tracker](https://tracker.lino.network/#/) as the validator.

If you got error:
```
ERROR: CheckTx failed: (155) {"codespace":"lino","code":155,"message":"msg: signature verification failed, chain-id:lino-testnet-upgrade3, seq:n"}
```

just correct the sequence number and chain id to the command above.