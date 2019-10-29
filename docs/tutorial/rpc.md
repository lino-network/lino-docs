# JSON RPC API

## JavaScript API
To talk to a Lino node from inside a JavaScript application use the [lino-js](https://github.com/lino-network/lino-js) library, which gives a convenient interface for the RPC methods. See the  [lino-js](https://github.com/lino-network/lino-js) library for more.

## JSON-RPC Endpoint
Default JSON-RPC endpoints: https://fullnode.lino.network/

## JSON-RPC API Reference
### Blockchain Status
Returns current blockchain status. Including fullnode information and sync info.

#### Parameters
none

#### Returns
String - Current blockchain status.

#### Example
```json
// Request
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"status"}' "https://fullnode.lino.network"

// Result
{
  "jsonrpc": "2.0",
  "id": null,
  "result": {
    "node_info": {
      "protocol_version": {
        "p2p": "7",
        "block": "10",
        "app": "0"
      },
      "id": "5d580e2cdb0915b3101c7eb6f762f1830f1a5458",
      "listen_addr": "tcp://0.0.0.0:26656",
      "network": "lino-testnet-upgrade5",
      "version": "0.32.6",
      "channels": "40202122233038",
      "moniker": "2iatgO4l0ayo",
      "other": {
        "tx_index": "on",
        "rpc_address": "tcp://0.0.0.0:26657"
      }
    },
    "sync_info": {
      "latest_block_hash": "16C03C0A655F9F8B86D489BA9D93861EA5389759ED765B44D503E981F4F9F74B",
      "latest_app_hash": "0E91A114358CC04EC32D8BDD2E4398832786C4ACAEDB7ACE3666BAF364F7C599",
      "latest_block_height": "85667",
      "latest_block_time": "2019-10-29T21:39:08.921826059Z",
      "catching_up": false
    },
    "validator_info": {
      "address": "CCB38ECE760850B9A968A9F04E95A0B61F143607",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "+4hHcO1YB0cNoHWl/R7RI2b85dObEi3xEY6hZLH6+XI="
      },
      "voting_power": "0"
    }
  }
}
```

### Block Info
Returns block information for a specific block. Including block meta and all transactions in the block.

#### Parameters
1. height - the height of the block.

#### Returns
String - Block information.

#### Example
```json
// Request
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"block", "params":{"height":"1"}}' "https://fullnode.lino.network"

// Result
{
  "jsonrpc": "2.0",
  "id": null,
  "result": {
    "block_meta": {
      "block_id": {
        "hash": "FD8DF25E112146F282D85377A83F1BE9F8B2E02EFE0E58FEAE33087C126C9BF0",
        "parts": {
          "total": "1",
          "hash": "77F0F022ECFA49E8BE32BB171C3A7B84709EE52460206DFC88464F7F68BEE9A8"
        }
      },
      "header": {
        "version": {
          "block": "10",
          "app": "0"
        },
        "chain_id": "lino-testnet-upgrade5",
        "height": "1",
        "time": "2019-10-25T21:12:37.698383683Z",
        "num_txs": "0",
        "total_txs": "0",
        "last_block_id": {
          "hash": "",
          "parts": {
            "total": "0",
            "hash": ""
          }
        },
        "last_commit_hash": "",
        "data_hash": "",
        "validators_hash": "28708447D3A3E25CD73393075E1DE993C28D18AF6BF20AC54CABDD512B27F9EB",
        "next_validators_hash": "28708447D3A3E25CD73393075E1DE993C28D18AF6BF20AC54CABDD512B27F9EB",
        "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
        "app_hash": "",
        "last_results_hash": "",
        "evidence_hash": "",
        "proposer_address": "DA6381BDA9B8654420A1F489823E5C1798657ABF"
      }
    },
    "block": {
      "header": {
        "version": {
          "block": "10",
          "app": "0"
        },
        "chain_id": "lino-testnet-upgrade5",
        "height": "1",
        "time": "2019-10-25T21:12:37.698383683Z",
        "num_txs": "0",
        "total_txs": "0",
        "last_block_id": {
          "hash": "",
          "parts": {
            "total": "0",
            "hash": ""
          }
        },
        "last_commit_hash": "",
        "data_hash": "",
        "validators_hash": "28708447D3A3E25CD73393075E1DE993C28D18AF6BF20AC54CABDD512B27F9EB",
        "next_validators_hash": "28708447D3A3E25CD73393075E1DE993C28D18AF6BF20AC54CABDD512B27F9EB",
        "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
        "app_hash": "",
        "last_results_hash": "",
        "evidence_hash": "",
        "proposer_address": "DA6381BDA9B8654420A1F489823E5C1798657ABF"
      },
      "data": {
        "txs": null
      },
      "evidence": {
        "evidence": null
      },
      "last_commit": {
        "block_id": {
          "hash": "",
          "parts": {
            "total": "0",
            "hash": ""
          }
        },
        "precommits": null
      }
    }
  }
}
```
To parse a transaction in the block:
```json
// Request
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"block", "params":{"height":"86011"}}' "https://fullnode.lino.network" | jq -r .result.block.data.txs[1] | base64 -d | jq .

// Result
{
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "lino/IDATransfer",
        "value": {
          "app": "dlivetv",
          "amount": "4.87",
          "from": "dlivetv",
          "to": "mazdawolfi",
          "singer": "dliveezalor-70",
          "memo": "watch/chat reward"
        }
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "linocoin",
          "amount": "100000"
        }
      ],
      "gas": "0"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "A+8zCe6jMDiCfJFExcMz6x3ZmORE1OSIwtqFQ8SDBnXu"
        },
        "signature": "gWI5fGR0kEG4JliUDByZoF8YQ9M49MIEDHBQ0AvT6UEnvzXZgdgIpE7rexpSphKLfKzlvkaX6BARD1Syg+3kBA=="
      }
    ],
    "memo": ""
  }
}
```

### Tx Info
Returns a specific transaction status and execution result.

#### Parameters
1. hash - the hash of a transaction.

#### Returns
String - Tx information.

#### Example
```json
// Request
$  curl -X POST --data-binary '{"jsonrpc":"2.0","method":"tx", "params":{"hash":"VFXJNUArnKrmmS7wBMUzy8L61NIRs0c7gsFvhll6WdY="}}' "https://fullnode.lino.network"

// Result
{
  "jsonrpc": "2.0",
  "id": null,
  "result": {
    "hash": "5455C935402B9CAAE6992EF004C533CBC2FAD4D211B3473B82C16F86597A59D6",
    "height": "86011",
    "index": 0,
    "tx_result": {
      "code": 0,
      "data": null,
      "log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\"}]",
      "info": "",
      "gasWanted": "0",
      "gasUsed": "377733",
      "events": [
        {
          "type": "message",
          "attributes": [
            {
              "key": "YWN0aW9u",
              "value": "UmVnaXN0ZXJWMk1zZw=="
            }
          ]
        }
      ],
      "codespace": ""
    },
    "tx": "eyJ0eXBlIjoiYXV0aC9TdGRUeCIsInZhbHVlIjp7Im1zZyI6W3sidHlwZSI6Imxpbm8vcmVnaXN0ZXJ2MiIsInZhbHVlIjp7InJlZmVycmVyIjp7ImFjY291bnRfa2V5IjoibGlub3dhbGxldC0yNyJ9LCJyZWdpc3Rlcl9mZWUiOiIwLjE1IiwibmV3X3VzZXJuYW1lIjoiaG9yYXNiYWhoIiwibmV3X3RyYW5zYWN0aW9uX3B1YmxpY19rZXkiOnsidHlwZSI6InRlbmRlcm1pbnQvUHViS2V5U2VjcDI1NmsxIiwidmFsdWUiOiJBNXNPSW5va2R3ZGNrd29JVitxNVlPbFNVNCsvL1lkeEVobWk1STNXa04xWiJ9LCJuZXdfc2lnbmluZ19wdWJsaWNfa2V5Ijp7InR5cGUiOiJ0ZW5kZXJtaW50L1B1YktleVNlY3AyNTZrMSIsInZhbHVlIjoiQXYvOENBdGJtMmR3Q1lhNFlaRVhlYWFEKzVwVFdBaEtvZnMyZnlIWHZIZlAifX19XSwiZmVlIjp7ImFtb3VudCI6W3siZGVub20iOiJsaW5vY29pbiIsImFtb3VudCI6IjEwMDAwMCJ9XSwiZ2FzIjoiMCJ9LCJzaWduYXR1cmVzIjpbeyJwdWJfa2V5Ijp7InR5cGUiOiJ0ZW5kZXJtaW50L1B1YktleVNlY3AyNTZrMSIsInZhbHVlIjoiQXlOYm84QTBQTVBSVmNYRllhU2IxMzlORmNEME9hL2dVaDJGMFpES2ZKYVIifSwic2lnbmF0dXJlIjoiNTZlc2l4am0ycE5Lb0hJMk9OUUdFM0hQQjdvQjYwWWppMTFBdWJ3cHFXaEY2bko0WVUvblpXSkQ2VFp0R2REZElNTjdrZkJyNjM0eVNXeUJJUGZmakE9PSJ9LHsicHViX2tleSI6eyJ0eXBlIjoidGVuZGVybWludC9QdWJLZXlTZWNwMjU2azEiLCJ2YWx1ZSI6IkE1c09Jbm9rZHdkY2t3b0lWK3E1WU9sU1U0Ky8vWWR4RWhtaTVJM1drTjFaIn0sInNpZ25hdHVyZSI6IkYwdWVqRXE0U1VXZWZ5NkVZWDU5ZnQzU2VFVXAxMHcvTnpPbHdaWm94NzFMMlhaclRIS2todnd0ekpxSzJ4c1AvUEVaY0RsN2w5Q2NlL1VmWUFwNGRBPT0ifV0sIm1lbW8iOiIifX0="
  }
}
```

Transaction hash can be parsed by following steps
```json
// Request
$ curl -X POST --data-binary '{"jsonrpc":"2.0","id":"jsonrpc-client","method":"block", "params":{"height":"86011"}}' "https://fullnode.lino.network" | jq -r .result.block.data.txs[0] | base64 -d | sha256sum | xxd -r -p | base64

// Result
VFXJNUArnKrmmS7wBMUzy8L61NIRs0c7gsFvhll6WdY=
```


### Account Info
Returns a specific user's account information.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - Account information, which includes username, create time in unix, public keys and address. Address can be derived from transaction public key.

#### Example
```json
// Request, username is `ytu`
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/account/info/ytu","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "username": "ytu",
  "created_at": "1537817595",
  "signing_key": {
    "type": "tendermint/PubKeySecp256k1",
    "value": "AoxfvcigEx+LtU2t0aAanloux5CA5kjORVvBgKVt/Hip"
  },
  "transaction_key": {
    "type": "tendermint/PubKeySecp256k1",
    "value": "Awa7WFs9Oeyl5skmqmlV+eaN95ajWkQNbL8wzRdkx9+j"
  },
  "address": "lino1722lj3a89nnmt8teadp98h5rkvrcsc4e2ulm9s"
}
```

### Account Bank
Returns a specific user's bank information.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - Bank information, which includes bank balance (in Lino Coin, 1 LINO = 100000 Lino Coin), frozen money list (pending Lino), public key (same as transaction public key above), sequence number and username.

#### Example
```json
// Request, username is `ytu`
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/account/bank/ytu","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "saving": {
    "amount": "117057339"
  },
  "frozen_money_list": [
    {
      "amount": {
        "amount": "1000000"
      },
      "start_at": "1539034248",
      "times": "12",
      "interval": "604800"
    },

  ],
  "public_key": {
    "type": "tendermint/PubKeySecp256k1",
    "value": "Awa7WFs9Oeyl5skmqmlV+eaN95ajWkQNbL8wzRdkx9+j"
  },
  "sequence": "1865",
  "username": "ytu"
}
```

### Post Info
Returns a specific post's information.

#### Parameters
1. permlink - the permlink of the post. Permlink = username + "#" + postID.

#### Returns
String - Post information, which includes author, post id, title, content, create time, etc.

#### Example
```json
// Request, permlink is `pika35#VxWqSm2Wg`
$  curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/post/info/pika35#VxWqSm2Wg","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "post_id": "VxWqSm2Wg",
  "title": "💛 ⚡UYKUSUZ VE DENGESİZ",
  "content": "",
  "author": "pika35",
  "created_by": "dlivetv",
  "created_at": "1569793433",
  "updated_at": "1569793433",
  "is_deleted": false
}
```


### Stake Info
Returns a user's stake information.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - Stake information, which includes total Lino stake (in Lino Coin, 1 LINO = 100000 Lino Coin), delegation info (ytu 09/29/2019: deprecated in next update), duty and frozen amount (ytu 09/29/2019: enable in next update).

#### Example
```json
// Request, username is `dlivetv`
$  curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/vote/voter/dlivetv","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "username": "dlivetv",
  "lino_stake": {
    "amount": "100000000000"
  },
  "last_power_change_at": "1568322539",
  "interest": {
    "amount": "0"
  },
  "duty": "0",
  "frozen_amount": {
    "amount": "0"
  }
}
```

### Voting Info
Returns a user's voting validator list.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - User voting information, including validator name and voting power.

#### Example
```json
// Request, username is `dlivetv`
$  curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/validator/electionVoteList/ltzonda","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 --decode | jq .

// Result
{
  "election_votes": [
    {
      "validator_name": "cryptocloaker",
      "votes": {
        "amount": "16700000000"
      }
    },
    {
      "validator_name": "dlive-09156526",
      "votes": {
        "amount": "16700000000"
      }
    },
    {
      "validator_name": "hooli",
      "votes": {
        "amount": "16700000000"
      }
    }
  ]
}
```

### Validator Info
Returns a validator's information.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - Validator information, which number of poduced blocks, deposit (ytu 09/29/2019: deprecated in next update), public key, commit power, etc.

#### Example
```json
// Request, username is `validator1`
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/validator/validator/validator1","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "abci_validator": {
    "address": "Hhtg8SyDe7NSGOHzcLk1/rwXuKA=",
    "power": "1427753"
  },
  "pubkey": {
    "type": "tendermint/PubKeyEd25519",
    "value": "4rgh/IbevTzo/2s3YJip1F/ih0gm153mLrIkKZTrNhI="
  },
  "username": "validator1",
  "received_votes": {
    "amount": "2020426939"
  },
  "has_revoked": true,
  "absent_commit": "0",
  "produced_blocks": "335614",
  "link": "{\"website\":\"https://lino.network\", \"identity\":\"CFADC7490E87BCB4\"}",
  "num_slash": "0"
}
```

### IDA Bank
Returns a specific user's app ida bank information.

#### Parameters
1. username - the username of a Lino Blockchain user.

#### Returns
String - IDA information, which includes number of IDA and authorization info.

#### Example
```json
// Request, username is `ytu`
$ curl -X POST --data-binary '{"jsonrpc":"2.0","method":"abci_query","params":{"height":"0","trusted":false,"path":"/custom/developer/devIDABalance/dlivetv/ytu","data":""}}' "https://fullnode.lino.network" | jq -r .result.response.value | base64 -d | jq .

// Result
{
  "appida_amount": "63.159140000000000000",
  "unauthed": false
}
```