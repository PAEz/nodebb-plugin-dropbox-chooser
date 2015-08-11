nodebb-plugin-dropbox-chooser
=============================

NodeBB plugin that adds a button to Composer.
This button allows the user to select a file from their dropbox account and add its link to the post.

Installation
---

* Install this plugin via the "Plugins" page in the ACP
* Then enable the plugin in NodeBB's Admin Control Panel in the Plugins tab.
* Got Dropbox and create a dropin app and get the key.
* In the ACP add the api key and create a template if you want.
* Restart NodeBB

Configuration
---
* Go to Dropbox, create a dropins app and get the key
* Open NodeBB's Admin Control Panel
* Click on the Dropbox Chooser item in the Plugins section
* Enter the api key you got in step one
* Optiionally create a template
* Go to ACP - Apperance - Custom HTML & CSS
* And in the Custom Header box enter (wish I knew how to avoid this bit)....  
````<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs"></script>````  
The templating isnt the inbuilt stuff (dont know how/if I can use it yet), just something real simple.
You can add the variables returned from the dropin wrapped in "{}"....
````
file = {

    // Name of the file.
    name: "filename.txt",

    // URL to access the file, which varies depending on the linkType specified when the
    // Chooser was triggered.
    link: "https://...",

    // Size of the file in bytes.
    bytes: 464,

    // URL to a 64x64px icon for the file based on the file's extension.
    icon: "https://...",

    // A thumbnail URL generated when the user selects images and videos.
    // If the user didn't select an image or video, no thumbnail will be included.
    thumbnailLink: "https://...?bounding_box=75&mode=fit",
};
````
For makdown this works good... ````[{name}]({link})````

Credits
---
Although these people didnt directly add to this, their code was used to figure out what the hell I should be doing ;)  
[nodebb-plugin-emailer-local](https://github.com/NodeBB/nodebb-plugin-emailer-local)  
Used to figure out how to do the admin page.  
[nodebb-plugin-code-button](https://github.com/henrikekblad/nodebb-plugin-code-button)  
How to create a button.  
[Retrieve setting value from the client   side](https://community.nodebb.org/topic/5936/retrieve-setting-value-from-the-client-side)  
How get settings from the server, from the client.  
