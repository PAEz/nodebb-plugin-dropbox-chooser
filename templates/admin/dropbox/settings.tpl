<h1><i class="fa fa-dropbox"></i> Dropbox Chooser</h1>

<div class="row">
	<div class="col-lg-12">
		<blockquote>
			This plugin lets users choose a file from their dropbox account and add the link to the post.
		</blockquote>
	</div>
</div>

<hr />

<form role="form" class="dropbox-chooser-settings">
	<fieldset>
		<div class="row">
			<div class="col-sm-12">
				<div class="form-group">
					<label for="apikey">API Key</label>
					<input type="text" class="form-control apikey" id="apikey" name="apikey" placeholder="Retreving settings..."/>
				</div>
				<div class="form-group">
					<label for="template">Template for Insert</label>
					<input type="text" class="form-control template" id="template" name="template" placeholder="({name})[{link}]"/>
				</div>
			</div>
		</div>

		<button class="btn btn-lg btn-primary" id="save">Save</button>
	</fieldset>
</form>

<script type="text/javascript">
	require(['settings'], function(Settings) {
		Settings.load('dropboxchooser', $('.dropbox-chooser-settings'),function (data){
			$(".apikey").attr("placeholder", "Enter Dropbox api key");
		});
		$('#save').on('click', function() {
			Settings.save('dropboxchooser', $('.dropbox-chooser-settings'), function() {
				app.alert({
					alert_id: 'dropboxchooser',
					type: 'info',
					title: 'Settings Changed',
					message: 'Please reload your NodeBB to apply these changes',
					timeout: 5000,
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	});
</script>
