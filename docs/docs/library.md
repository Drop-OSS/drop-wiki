# Library

## Structuring your library
Drop uses a very particular structure to organise your games library. Generally, to get started, you need to create two folders for a game:

1. `{LIBRARY}/My Game Name` - The game folder. This contains **only** folders, as described as below.
2. `{LIBRARY}/My Game Name/my-version-name` - The version folder. This folder contains all the files for the game.

Once in the UI, you'll be prompted to "import" each folder separately:

- Importing the **game folder** will link the folder to a game in the metadata database, and pulls the data (images, descriptions, that sort of thing)  from one of your configured metadata providers. **This only happens once for each game you have.** 
- Importing **version folder** will read the entirety of the game files and generate checksums and metadata that clients need to download the games with. **This happens for each new version you add.**

::: warning
Importing the version may take very long, depending on the size of the game and the speed of the drive. CPU is rarely the bottleneck.
:::

### Game vs. Version
A "game" in Drop is associated with all the metadata, and doesn't have to changed if the game updates. 

A "version" in Drop is associated with the files, and a new one will have to be created every time the game updates. 

## Importing more versions
So your game has gotten an update and you've got new files. All you need to do is create a new version folder inside the game folder, and move all the files you have into that folder. Then, import it within the Drop admin UI.

If you have files that you're supposed to **paste over the previous version**, Drop supports that! Read [Version delta & ordering](#version-deltas--ordering) to find out more.

## Version deltas & ordering

Version deltas are a way to avoid storing copies of files on the server. Delta are, very simply, pasted over the top of previous versions (but much more efficiently, to avoid excess downloading).

To create a delta version, simply select the toggle in the admin UI. Once created, you can drag around the priority of your versions in the admin view of a game. Higher priority versions will have their files used over lower priority. For example, consider three versions:

1. **v1**
   1. Game.exe
   2. Data.bin
2. **v2** (delta)
   1. Game.exe
3. **v3** (delta)
   1. Data.bin

If the user decides to download **v3**, Drop will download the 'Data.bin' from **v3**, and the 'Game.exe' from **v2**. It won't download any files from **v1**, because they have all been overwritten by higher priority versions.