# CPanelManagement - Node.JS module that implements some functions of the cPanel API 2

CPanel management system through nodejs

## Usage Example

```js
var cpanel = require("node-cpanel-manager");
cpanel.setUrlAndCredentials("https://cpanel.yourdomain.com:2083", "username", "password");
cpanel.emailListPopsWithDisk().then(function(data) {
  console.log(data);
}, function(error) {
  console.log(error);
});
```
