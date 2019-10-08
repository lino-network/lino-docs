# Set Up Fullnode And Connect to Testnet

This document explains how to connect to the latest Testnet of the [Lino Blockchain](https://github.com/lino-network/lino).

NOTE: We are aware this documentation is sub-par and are actively working to improve both the tooling and the documentation to make this as painless as possible. In the meantime, join us on [Discord](https://discord.gg/TUxp3ww) for technical support. Thanks very much for your patience :)

## Software Setup (Manual Installation)

Follow these instructions to install the Lino Core and connect to the latest Testnet. This instructions work for both a local machine and a VM in a cloud server. Lino Core is based on [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) so the setup process is similar.

If you want to run a non-validator full-node, installing the Lino Core on a Cloud server is a good option. However, if you are want to become a validator for Lino you should look at more complex setups, including [Sentry Node Architecture](https://github.com/cosmos/cosmos/blob/master/VALIDATORS_FAQ.md#how-can-validators-protect-themselves-from-denial-of-service-attacks), to protect your node from DDOS and ensure high-availability (see the [technical requirements](https://github.com/cosmos/cosmos/blob/master/VALIDATORS_FAQ.md#technical-requirements)). You can find more information on validators in our [website](https://lino.network).

### Install [GNU Wget](https://www.gnu.org/software/wget/)

**MacOS**

```
brew install wget
```

**Linux**

```
sudo apt-get install wget make
```

Note: You can check other available options for downloading `wget` [here](https://www.gnu.org/software/wget/faq.html#download).


### Install [Go](https://golang.org/)

Install `go` following the [instructions](https://golang.org/doc/install) in the official golang website.
You will require **Go 1.12+** for this tutorial.

Example
```
$ wget https://dl.google.com/go/go1.12.9.linux-amd64.tar.gz

$ sudo tar -xvf go1.12.9.linux-amd64.tar.gz
$ sudo mv go /usr/local
```

#### Set GOPATH

First, you will need to set up your `GOPATH`. Make sure that the location `$HOME` is something like `/Users/<username>`, you can corroborate it by typing `echo $HOME` in your terminal.

Go to `$HOME` with the command `cd $HOME` and open the the hidden file `.bashrc` with a code editor and paste the following lines \(or `.bash_profile` if your're using OS X\).

Example
```
$ export GOROOT=/usr/local/go
$ export GOPATH=$HOME/go
$ export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

### Install Lino Core

Now we can fetch the correct versions of each dependency by running:

```
$ mkdir -p $GOPATH/src/github.com/lino-network/
$ cd $GOPATH/src/github.com/lino-network/
$ git clone https://github.com/lino-network/lino
$ cd lino
$ git checkout v0.4.2
$ make get_tools && make install
```


## Full Node Setup

If you go through above process, you should be able to start a node with single validator. The genesis account's private key will show up at last step of above process. Now you can start you own node by running:

```
$ lino init
$ lino start
```

If you want to connect to Lino Testnet, you should copy config and genesis file.

```
$ lino init
$ cp -a genesis/upgrade3/genesis.json $HOME/.lino/config/genesis.json
$ cp -a genesis/upgrade3/config.toml $HOME/.lino/config/config.toml
$ lino unsafe-reset-all
```

If you wanna sync the blocks from the first block, please download all previous blockchain data from S3:

```
$ wget https://lino-blockchain-opendata.s3.amazonaws.com/prd/prevstates.tar.gz
$ tar -xzvf prevstates.tar.gz -C ~/.lino/
```

Lastly change the `moniker` string in the `$HOME/.lino/config/config.toml`to identify your node.

```
# A custom human readable name for this node
moniker = "<your_custom_name>"
```

Optional: to increase number of connections

```
$ ulimit -n 4096
```

## Run a Full Node

Start the full node:

```
$ lino start
```
Your node should start syncing to our Lino Testnet.
