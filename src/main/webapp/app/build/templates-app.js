angular.module('templates-app', ['account/login.tpl.html', 'account/register.tpl.html', 'account/search.tpl.html', 'blog/manage-blogs.tpl.html', 'home/home.tpl.html']);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Login\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"login()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Username:</label>\n" +
    "          <input type=\"text\" ng-model=\"account.name\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Login</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/register.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Register\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"register()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Username:</label>\n" +
    "          <input type=\"text\" ng-model=\"account.name\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Register</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/search.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"q\" placeholder=\"account name\"/>\n" +
    "    </div>\n" +
    "\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <th>Account Name</th>\n" +
    "        <th>Actions</th>\n" +
    "        <tr ng-repeat=\"account in accounts | filter:q\">\n" +
    "            <td>{{account.name}}</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"manageBlogs({accountId:account.rid})\" class=\"btn btn-large btn-default\">\n" +
    "                    Manage\n" +
    "                </a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("blog/manage-blogs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/manage-blogs.tpl.html",
    "<div class=\"row no-gutters\">\n" +
    "    <h1>Blog Management For {{name}}</h1>\n" +
    "</div>\n" +
    "<div class=\"row no-gutters\">\n" +
    "    <div class=\"input-group component-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"newBlogName\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button class=\"btn btn-default\" type=\"button\" ng-click=\"createBlog(newBlogName)\">Create New Blog!</button>\n" +
    "      </span>\n" +
    "    </div><!-- /input-group -->\n" +
    "</div>\n" +
    "<div class=\"row no-gutters\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <th>Blog Name</th>\n" +
    "        <th>Action</th>\n" +
    "        <tr ng-repeat=\"blog in blogs\">\n" +
    "            <td>{{blog.title}}</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"manageBlogs({accountId:account.rid})\" class=\"btn btn-large btn-default\">\n" +
    "                    Delete\n" +
    "                </a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Rosedeeps Blogs</h1>\n" +
    "  \n" +
    "  <div class=\"btn-group\" ng-hide=\"isLoggedIn()\">\n" +
    "    <a ui-sref=\"login\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Sign In\n" +
    "    </a>\n" +
    "    <a ui-sref=\"register\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Sign Up\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "    <div class=\"btn-group\" ng-show=\"isLoggedIn()\">\n" +
    "        <a ng-click=\"logout()\" class=\"btn btn-large btn-default\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            Logout\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
