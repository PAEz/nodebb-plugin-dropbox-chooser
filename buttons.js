$('document').ready(function() {
    require(['composer', 'composer/controls'], function(composer, controls) {

        function addButton(data, err) {
            
            var apikey = data.apikey;
            if (!apikey) return;
            var template=data.template;
            
            function t(s,d){
             for(var p in d)
               s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
             return s;
            }

            window.Dropbox.appKey = apikey;//"9ipjn0rk9vqyfum";
            
            composer.addButton('fa fa-dropbox', function(textarea, selectionStart, selectionEnd) {

                var options = {
                    // Required. Called when a user selects an item in the Chooser.
                    success: function(files) {
                        var file = files[0];
                        var insert = file.link;
                        if(template){
                            insert=t(template,file);
                        }
                        controls.insertIntoTextarea(textarea, insert);
                        // console.log("Here's the file link: " + files[0].link)
                    },

                    // Optional. Called when the user closes the dialog without selecting a file
                    // and does not include any parameters.
                    cancel: function() {

                    },

                    // Optional. "preview" (default) is a preview link to the document for sharing,
                    // "direct" is an expiring link to download the contents of the file. For more
                    // information about link types, see Link types below.
                    linkType: "preview", // or "direct"

                    // Optional. A value of false (default) limits selection to a single file, while
                    // true enables multiple file selection.
                    multiselect: false, // or true

                    // Optional. This is a list of file extensions. If specified, the user will
                    // only be able to select files with these extensions. You may also specify
                    // file types, such as "video" or "images" in the list. For more information,
                    // see File types below. By default, all extensions are allowed.
                    // extensions: ['.pdf', '.doc', '.docx'],
                };

                window.Dropbox.choose(options);

                // 			if(selectionStart === selectionEnd){
                // 				controls.insertIntoTextarea(textarea, '```\nInsert Code Here\n```');
                // 				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 21);
                // 			} else {
                // 				controls.wrapSelectionInTextareaWith(textarea, '```\n','\n```\n');
                // 				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
                // 			}
            });
        }

        /*global socket*/
        // do the async call to the socket.
        socket.emit('plugins.DropboxChooser.getConfig', addButton);

    });
});