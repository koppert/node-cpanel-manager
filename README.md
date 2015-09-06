# CPanelManagement - CPanel management system through nodejs

Node.JS module that implements some functions of the cPanel API 2

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

[Documentation](docs/index.html)
