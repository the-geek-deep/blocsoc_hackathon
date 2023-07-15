##Music Marketplace Read Me
#Project Summary
The Music Marketplace project aims to provide a platform for artists to showcase their work and sell their music directly to consumers. By eliminating intermediaries, the project seeks to ensure that artists receive proper credit and monetary compensation for their creations. The marketplace includes features such as an online music player, the ability to purchase rights to music, and access to the original music files.

#Detailed Project Description
The Music Marketplace is a web#-based platform that enables artists to exhibit their music to a wide audience and offer it for sale. It addresses the problem of intermediaries taking a significant portion of an artist's earnings and recognition. By removing these intermediaries, the project empowers artists to directly connect with their audience and retain control over their creative work.

The platform provides an online music player that allows users to listen to the available tracks. If a user decides to purchase a particular music piece, they can pay the amount set by the artist directly to the owner. Upon completing the purchase, the buyer will receive both the music file link and one time verification code, granting them the rights to use the music as specified by the artist.

#How It Works
The Music Marketplace utilizes a web#-based interface that facilitates the discovery, purchase, and distribution of music. Here's an overview of how the project works:

Artist Registration: Artists can connect throught their web3 wallet.

Music Upload: Artists can upload their music file link, Song Name, Artist Name.

Setting Prices and Rights: Artists have the freedom to set the price for each music piece and specify the rights associated with its purchase.

Browsing and Listening: Users can explore the Music Marketplace, browse through the available music catalog, and listen to previews of the tracks using the web-based music player.

Purchasing Music: When a user finds a piece they wish to purchase, they can select it and proceed to the payment process. The amount specified by the artist will be paid directly to the artist, ensuring that they receive their fair share.

Receiving File Link: After completing the purchase, the buyer will receive the original music file, allowing them to enjoy the music in its highest quality. Additionally, He will recive a one-time verification key that will be send as a copyright file and then if the company/platform has to verify they can come to /verifyOwnership to enter the verification key which will display the music details, hence verify the purchase this can be done once as the name one-time verification key.

Challenges Faced
Connecting a decentralised storgae was very hard, after trying a lot with filecoin, moralis, web3 storge, ipfs we were not able to setup so we end up using a centralised way
Using React for first time was also pretty challanging 
Making a coustom key every time was hard (Solution: We end up using keccsh function with block.timestamp, msg.sender, musicId : to generate new key every time and then map it to buyer)

By addressing these challenges, the Music Marketplace aims to provide a trustworthy platform for artists to showcase their work, connect with their audience, and receive fair compensation for their creative efforts.
