# Music Marketplace

## Project Summary
The Music Marketplace project aims to provide a platform for artists to showcase their work and sell their music directly to consumers. By eliminating intermediaries, the project seeks to ensure that artists receive proper credit and monetary compensation for their creations. The marketplace includes features such as an online music player, the ability to purchase rights to music, and access to the original music files.

## Detailed Project Description
The Music Marketplace is a web-based platform that enables artists to exhibit their music to a wide audience and offer it for sale. It addresses the problem of intermediaries taking a significant portion of an artist's earnings and recognition. By removing these intermediaries, the project empowers artists to directly connect with their audience and retain control over their creative work.

The platform provides an online music player that allows users to listen to the available tracks. If a user decides to purchase a particular music piece, they can pay the amount set by the artist directly to the owner. Upon completing the purchase, the buyer will receive both the music file link and a one-time verification code, granting them the rights to use the music as specified by the artist.

## How It Works
The Music Marketplace utilizes a web-based interface that facilitates the discovery, purchase, and distribution of music. Here's an overview of how the project works:

1. **Artist Registration**: Artists can connect through their web3 wallet.

2. **Music Upload**: Artists can upload their music file link, song name, and artist name.

3. **Setting Prices and Rights**: Artists have the freedom to set the price for each music piece and specify the rights associated with its purchase.

4. **Browsing and Listening**: Users can explore the Music Marketplace, browse through the available music catalog, and listen to previews of the tracks using the web-based music player.

5. **Purchasing Music**: When a user finds a piece they wish to purchase, they can select it and proceed to the payment process. The amount specified by the artist will be paid directly to the artist, ensuring that they receive their fair share.

6. **Receiving File Link**: After completing the purchase, the buyer will receive the original music file, allowing them to enjoy the music in its highest quality. Additionally, they will receive a one-time verification key that serves as a copyright file. To verify the ownership, the buyer can visit `/verifyOwnership` and enter the verification key, which will display the music details and confirm the purchase. This verification can be done only once per key.

## Challenges Faced
The Music Marketplace project encountered several challenges during development:

- Connecting decentralized storage: Integrating decentralized storage solutions such as Filecoin, Moralis, Web3 Storage, and IPFS proved to be challenging. As a result, a centralized storage solution was implemented.

- React implementation: Developing the project using React posed a challenge as it was the team's first experience with the framework. Extensive learning and experimentation were required to overcome the difficulties.

- Generating custom keys: Generating unique verification keys for each purchase was a complex task. The team resolved this challenge by using a keccak function with `block.timestamp`, `msg.sender`, and `musicId` to generate a new key for each transaction and mapping it to the respective buyer.

By addressing these challenges, the Music Marketplace aims to provide a trustworthy platform for artists to showcase their work, connect with their audience, and receive fair compensation for their creative efforts.
