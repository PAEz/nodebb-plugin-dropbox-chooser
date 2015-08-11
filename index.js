var fs = require('fs'),
    path = require('path'),
    meta = module.parent.require('./meta'),

    Chooser = {};

var PluginSocket = require.main.require('./src/socket.io/plugins');


Chooser.init = function(data, callback) {

    var self = this;
    PluginSocket.DropboxChooser = {};
    PluginSocket.DropboxChooser.getConfig = function(socket, callback) {
        meta.settings.get('dropboxchooser', function(err, data) {
            if (err) {
                console.error('Getting apiKey', err);
            }
            callback(data);
        });
    };

    function renderAdminPage(req, res, next) {
        res.render('admin/dropbox/settings', {});
    }

    data.router.get('/admin/dropbox/settings', data.middleware.admin.buildHeader, renderAdminPage);
    data.router.get('/api/admin/dropbox/settings', renderAdminPage);

    callback();
};


Chooser.admin = {
    menu: function(custom_header, callback) {
        custom_header.plugins.push({
            "route": '/dropbox/settings',
            "icon": 'fa-dropbox',
            "name": 'Dropbox Chooser'
        });

        callback(null, custom_header);
    }
};

module.exports = Chooser;
