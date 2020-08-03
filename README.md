<h1>A hammocking social network</h1>


I'm starting to get tired of watching all of my friends spamming my instagram-feed with hammocking pictures (not gonna lie norwegian nature is beautiful tho). I have decided to build an app that lets people post their favourite hammocking spots and tag them on a map, as well as letting people that visited the spots the positibility to rate them.

Posts can be sorted by highest rating, or nearest spot.

I plan on building the app in react, using firebase for user and data management.

<i>1/8/20</i>

Did basic setup, added a header, did some work with chosing the colors, as well as the basic post-layout.

<i>2/8/20</i>

Did more work on the post and feed components. Added conditional rendering, as well as pushing the dummy posts to firebase, where they get fetched on mountingm, as well as update. 

Will now work on user authentication, as well as fixing it so that the most recent posts come first, as well as implementing comments. 

<i>2/8/20</i>

Managed to fix the sorting now. Since I store the posts in an array, i used the sort-method to sort the array by the posted-property on the object we get from firebase. 

<i>3/8/20</i>

Made some work on firebase authentication, users are now able to register for the website. Think I'll add redux today/tomorrow, as I either have to prop-drill, or have my logic in the wrong places. 

Might not be able to do that much this week, as I have several interviews, and have to focus on them. 