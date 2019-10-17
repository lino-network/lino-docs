# Set up Fullnode And Connect to Testnet

This document explains how to set up a fullnode and connect to the Testnet of the Lino Blockchain.

NOTE: We are aware that this documentation is sub-par and we are actively working on improving both the tooling and the documentation to make this setup process as smooth as possible. In the meantime, join us on [Discord](https://discord.gg/TUxp3ww) for technical support.

## Software Setup (Manual Installation)

These instructions are for setting up a brand new full node from scratch. Follow the steps below to install [Lino Core](https://github.com/lino-network/lino) and connect to Testnet. This instruction works for both a local machine and a VM on a cloud server. Lino Core is based on [Cosmos SDK](https://github.com/cosmos/cosmos-sdk), and the setup process is similar.

If you want to run a non-validator full node, installing the Lino Core on a Cloud server should be a good option. However, if you want to run a validator, you should first learn more about [Sentry Node Architecture](https://github.com/cosmos/cosmos/blob/master/VALIDATORS_FAQ.md#how-can-validators-protect-themselves-from-denial-of-service-attacks) to protect your validator from DDoS attacks and ensure a high availability (see the [technical requirements](https://github.com/cosmos/cosmos/blob/master/VALIDATORS_FAQ.md#technical-requirements)).

### Install [GNU Wget](https://www.gnu.org/software/wget/)

**MacOS**

```bash
brew install wget
```

**Linux**

```bash
sudo apt-get install wget make
```

Note: You can check other available options for downloading `wget` [here](https://www.gnu.org/software/wget/faq.html#download).


### Install [Go](https://golang.org/)

To install `go`, follow the [instructions](https://golang.org/doc/install) in the official `golang` website. You will need **Go 1.12+** for this tutorial.

```bash
$ wget https://dl.google.com/go/go1.12.9.linux-amd64.tar.gz
$ sudo tar -xvf go1.12.9.linux-amd64.tar.gz
$ sudo mv go /usr/local
```

#### Set GOPATH

First, you need to set up your `GOPATH`. Make sure that the location `$HOME` is something like `/Users/<username>`, you can corroborate it by typing `echo $HOME` in your terminal.

Go to `$HOME` with the command `cd $HOME`, open the hidden file `.bashrc` with a code editor, and paste the following code \(or `.bash_profile` if your're using OS X\).

```bash
$ export GOROOT=/usr/local/go
$ export GOPATH=$HOME/go
$ export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

### Install Lino Core

Now we can fetch the correct versions of each dependency by running:

```bash
$ mkdir -p $GOPATH/src/github.com/lino-network/
$ cd $GOPATH/src/github.com/lino-network/
$ git clone https://github.com/lino-network/lino
$ cd lino
$ git checkout v0.5.1
$ make get_tools && make install
```


## Full Node Setup

If you go through above process, you should be able to start a node with single validator. The genesis account's private key will show up at last step of above process. Now you can start you own node by running:

```bash
$ lino init
$ lino start
```

If you want to connect to Lino Testnet, you should copy config and genesis file.

```bash
$ lino init
$ cp -a genesis/upgrade4/genesis.json $HOME/.lino/config/genesis.json
$ cp -a genesis/upgrade4/config.toml $HOME/.lino/config/config.toml
$ lino unsafe-reset-all
```

If you wanna sync the blocks from the first block, please download all previous blockchain data from S3:

```bash
$ wget https://lino-blockchain-opendata.s3.amazonaws.com/prd/prevstates.tar.gz
$ tar -xzvf prevstates.tar.gz -C ~/.lino/
```

Lastly change the `moniker` string in the `$HOME/.lino/config/config.toml`to identify your node.

```toml
# A custom human readable name for this node
moniker = "<your_custom_name>"
```

Optional: to increase number of connections

```bash
$ ulimit -n 4096
```

## Run a Full Node

Start the full node:

```bash
$ lino start
```
Your node should start syncing to our Lino Testnet.
