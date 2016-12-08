$(document).ready(function(){
	document.title = profile.title;

	function AppViewModel() {

		var self = this;
		var baseIconClass = "me-social mdi";
		var socialIconMapping = {
			"github": "mdi-github-circle", 
			"twitter": "mdi-twitter",
			"linkedin": "mdi-linkedin",
			"keybase": "mdi-key",
			"email": "mdi-email",
			"resume":"mdi-file-document-box"
		}
		var socialnetworks = [];
		var numSocialNetworks = 0;
		for (var key in profile.social){
			socialnetworks.push({iconClass: baseIconClass + " " + socialIconMapping[key], url: profile.social[key]}); 
			numSocialNetworks++;
		}
		self.social = ko.observableArray(socialnetworks)
	}
	AppViewModel.prototype = profile;
	AppViewModel.prototype.announce = announce;

	ko.applyBindings(new AppViewModel());
	// There is a limitation here where if not divisible by 12 will be funky
	var gridWidth = 12/	Object.keys(profile.social).length;
	var className = "col-xs-" + gridWidth;
	$(".social-network").addClass(className);

var links = [
                {   /* The first object will be the main button */
                    "bgcolor":"#001f33",
                    "icon":"+"
                },
                {
                    "url":"#top",
                    "bgcolor":"#66c2ff",
                    "color":"#fffff",
                    "icon":"<i class='mdi mdi-arrow-up-bold'></i>",
					"title": "Top",
                },
                /* Following are the hidden button list */
                {
                    "url":"#publications",
                    "bgcolor":"#1aa3ff",
                    "color":"#fffff",
                    "icon":"<i class='mdi mdi-book-open-variant'></i>",
					"title": "Publications",
                },
                {
                    "url":"#industry",
                    "bgcolor":"#007acc",
                    "color":"white",
                    "icon":"<i class='mdi mdi-worker'></i>",
					"title": "Industry"
                },
                {
                    "url":"#software",
                    "bgcolor":"#004d80",
                    "color":"white",
                    "icon":"<i class='mdi mdi-code-tags'></i>",
					"title": "Software"
                }
            ]
$('.kc_fab_wrapper').kc_fab(links);

});
