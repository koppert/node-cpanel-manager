# CPanelManagement - CPanel management system through nodejs

Node.JS module that implements some cPanel API 2 functions

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

## Installation

    npm install https://github.com/koppert/node-cpanel-manager.git


## API Reference

doc folder
