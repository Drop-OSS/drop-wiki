# Roadmap

While we're moving towards a major release, here's a few features that you can look forward to over the 
next few minor ones:

## Short-term
### Better authentication
Support for more authentication methods, such as discord, google, oauth, etc.

Accounts shouldn't be locked down to just Drop. We'd like to not only support username / password login,
but OAuth, 2FA, U2F, magic links, and as many other authentication methods as we can.

Along with that, setting up user / group permissions are also planned, to give admins a more fine-grained
control over who has access to what.

### Connecting to multiple servers (client-side only)
Let users connect to and manage games from more than one server

This one is especially something that we've had requested from indie devs, but being able to access
multiple Drop servers could lead to a much larger ecosystem where it's realistic for an indie dev
to self-host their own games without Steam's 30%

## Mid-term
### Launch tooling
Open support for customising the toolchain with which your games are run with

While [UMU](https://github.com/Open-Wine-Components/umu-launcher) is great, people often have specific
configurations that we can't really account for out of the box. To remedy this, we'd like to open Drop
up to essentially fully customised launch sequences for any game, such as setting launch args from the
client, configuring, deleting, and backing up prefixes, or setting ENV values.

We also recognise the value in being able to completely customise the way that your games are run,
whether it be by passing them through a remote-play app, an emulator, or anything else of the sort.

### Cloud save management
Support for cloud saves, making it easier to manage saves across different devices and operating systems.

We're looking at using the [ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest) to figure
out relevant folders and files to be backed up to ideally any remote location.

## Long-term
### Social features
Support for social features, such as friends, groups, and other social interactions like current game status.

People don't always play games with themselves, and so we'd like to add a variety of chat features, friends
updates, and other various features that can also be found in Steam's "Friends" and "Community" tabs.

### Multiplayer support
Support for multiplayer server management, such as discovering servers, joining servers, and leaving servers.

Intended as a drop-in replacement for the SteamWorks API, we'd like to provide support for multiplayer support
through the drop server, referencing the [Goldberg Emulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator),
as it has the most complete collection of headers that we can find.