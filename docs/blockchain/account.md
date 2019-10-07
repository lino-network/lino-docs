# Account

A fully functional Lino account is comprised of 3 elements:

1. **An Unchangeable Username**: 3-20 characters(lowercase letters, numbers, "-", and "."), must start with a letter. The username has to be unique and cannot be changed after registration.
2. **Primary Key**: A cryptographic public and private key pair. The Lino **Account Address**, which has to be unique, is a deterministic hash of the public Primary Key. The Primary Key is used for signing messages. Additionally, it can be used for reseting an account's Signing Key or the current Primary Key.
3. **Signing Key(optional)**: A cryptographic public and private key pair. A Signing Key can be optionally attached in the account registration, or be set in another message after registration. The Signing Key is used for signing messages. Different Lino accounts can share the same Signing Key.

## Registration

There are 2 ways to register a Lino account:

1. **Full Registration**: Sending a message containing an unregistered username and public Primary Key signed by the corresponding private Primary Key to the Lino Blockchain. Optionally, this message can contain a public Signing Key to associate it with this account. Full registration requires paying a registration fee(to the validators), and Tx fee is applied as well.
2. **Cold Wallet**: Similar to Bitcoin, a Lino account address can be generated without paying registration fee. Users can generate a Primary Key offline, and receive and send LINO using the account address as the identifier. In order to send any other types of messages, the user needs to associate a username with this address(registration fee will be applied).

## Reset

After full registration, a user can reset the Primary Key or the Signing Key. The new Primary Key should be different from any existing Primary Keys associated with usernames.

- **Reset Sining Key**: The reset message should contain the new public Signing Key with one of the following two signatures:
    - the private Primary Key
    - the current private Signing Key
- **Reset Primary Key**: The reset transaction should contain the new public Primary Key with two signatures(The account address will be changed):
    - the current private Primary Key
    - the new private Primary Key

## Account Address and Username

Account address is a deterministic hash of the public Primary Key.

Lino account username cannot be changed after registration, however, the account address associated with the username can be changed by the Primary Key. Any remaining LINO in the old account address will be automatically transferred to the new account address after reset.

LINO is stored under account address, not username. Username can be regarded as an alias for account address. Sending LINO to a username is actually sending to the account address associated with the username.

## Account Type

There are 4 types of accounts that are eligible for receiving newly minted LINO:

### **The Foundation Account**

The foundation account is declared in the **Genesis File**. Only the foundation account is able to send LINO to the Reserve Pool without minting any IDA. All of the Infra Rewards will go to the foundation account, and the foundation account will distribute the the Infra Rewards to developer accounts.

### **Developer Account**

Developer accounts are eligible for receiving Developer Rewards.

### **Content Creator Account**

Any Lino account becomes a Content Creator Account automatically after creating a post. Content Creator Accounts will receive Content Rewards based on the received donation.

### **Validator Account**

Validator accounts are eligible for receiving Validator Rewards, transaction fees, and registration fees.
