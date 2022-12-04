# Introduction
The aim of this project is to create a virtual factory in Roblox. In the first step we have implemented a scenario where objects (like transporters) of our virtual factory can be controlled from an external application. We have implemented this scenario by going through the following steps:
1. Datastore: We are using Datastore a feature in Roblox to store objects' locations in it. More information about Roblox's Data Stores can be found on the following link: https://create.roblox.com/docs/scripting/data/data-stores  
2. Open Cloud DataStore API: Now once we have objects' locations data inside datastore, we can access and modify it using Open Cloud DataStore API. More information about Open Cloud DataStore API can be found on the following link: https://create.roblox.com/docs/open-cloud/access-data-stores-from-external-tools  
3. App Connectivity: We have then connected an external application by using the endpoint provided by the Open Cloud DataStore API.
