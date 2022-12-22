# Introduction
The aim of this project is to create a virtual factory in Roblox. So far we have implemented our first scenario where objects (like transporters) of our virtual factory can be controlled from an external application.
### Technical Steps
-------------------
 Below are the steps we have performed for our first scenario:
1. Virtual Factory: We have created an experience (Factory) in Roblox. We have created our scene on Roblox Studio. In our scene we have created 4 transporters, 4 workstations, 3 warehouse shelves, 8 carts and 1 conveyer belt. For our first sceanario we are only updating the location of transporters from an external application. We have also created a screen gui that shows the location of each transporters. More information on how to get started with Roblox Studio can be found in the following link: https://create.roblox.com/docs/getting-started/introduction-to-roblox-studio  
![Test](/Users/hassan/Documents/Hamza/Pictures/Casual.jpg "Optional title") 
3. Datastore: We are using Datastore a feature in Roblox to store objects' (transporters) locations in it. More information about Roblox's Data Stores can be found on the following link: https://create.roblox.com/docs/scripting/data/data-stores
4. Open Cloud DataStore API: Now once we have objects' locations data inside datastore, we can access and modify it using Open Cloud DataStore API. More information about Open Cloud DataStore API can be found on the following link: https://create.roblox.com/docs/open-cloud/access-data-stores-from-external-tools  
5. App Connectivity: We have then connected an external application by using the endpoint provided by the Open Cloud DataStore API.
