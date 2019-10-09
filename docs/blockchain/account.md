# Account

A fully functional Lino account is comprised of 3 elements:

1. **An Unchangeable Username**: 3-20 characters(lowercase letters, numbers, "-", and "."), must start with a letter. The username has to be unique and cannot be changed after registration.
2. **Primary Key**: A cryptographic public and private key pair. The Lino **Account Address**, which has to be unique, is a deterministic hash of the public Primary Key. The Primary Key is used for signing messages. Additionally, it can be used for reseting an account's Signing Key or the current Primary Key.
3. **Signing Key(optional)**: A cryptographic public and private key pair. A Signing Key can be optionally attached in the account registration, or be set in another message after registration. The Signing Key is used for signing messages. Different Lino accounts can share the same Signing Key.

## Registration

There are 2 ways to register a Lino account:

1. **Full Registration**: Sending a message containing an unregistered username and public Primary Key signed by the corresponding private Primary Key to the Lino Blockchain. Optionally, this message can contain a public Signing Key to associate it with this account. Full registration requires paying a registration fee(to the validators), and a [message fee](../fee.html#general-messages-gm) will be applied as well.
2. **Cold Wallet**: Similar to Bitcoin, a Lino account address can be generated without paying registration fee. Users can generate a Primary Key offline, and receive and send LINO using the account address as the identifier. In order to send any other types of messages, the user needs to associate a username with this Lino account address(registration fee will be applied).

## Reset

A user can reset the Primary Key or the Signing Key of a fully registered account. The new Primary Key should be different from any existing Primary Keys associated with usernames.

- **Reset Signing Key**: The reset message should contain the new public Signing Key with one of the following two signatures:
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

### Foundation Account

The foundation account is declared in the **Genesis File**. The Foundation Account is controlled by the ACE Protocol Foundation. Only the foundation account is able to send LINO to the Reserve Pool without minting any IDA.

### App Developer Account

[App Developer Accounts](/blockchain/developer.html#app-developer-account) are eligible for receiving [Lino App Rewards](../overview/contributors.html#app-developers).

### Content Creator Account

Any Lino account becomes a Content Creator Account automatically after creating a post. Content Creator Accounts will receive [Content Rewards](../overview/contributors.html#content-creators) based on the received donation.

### Validator Account

[Validator accounts](/blockchain/validator.html#validator-candidate) are eligible for receiving [Validator Rewards](../overview/contributors.html#validators), [message fees](about), and account registration fees.

### Normal Account

Any Lino Account is in default a normal account at its creation.
