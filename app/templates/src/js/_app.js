(function () {
	<% if (type === "routeBean") { %>
	var app = angular.module("<%= app %>", ["ngRoute", "Routes"]);
	<% } else { %>
	var app = angular.module("<%= app %>", []);
	<% } %>
})();
