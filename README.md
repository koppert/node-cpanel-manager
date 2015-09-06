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

<dl>
<dt><a href="#setUrlAndCredentials">setUrlAndCredentials(url, user, password)</a></dt>
<dd><p>Set URL and Credentials for Authentication</p>
</dd>
<dt><a href="#emailListPopsWithDisk">emailListPopsWithDisk(args)</a> ⇒ <code>Promise.&lt;Array.&lt;EmailPopWithDisk&gt;, Error&gt;</code></dt>
<dd><p>Lists a domain&#39;s email addresses with quota and disk usage information. (<a href="https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistpopswithdisk">https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistpopswithdisk</a>)</p>
</dd>
<dt><a href="#emailListForwards">emailListForwards(args)</a> ⇒ <code>Promise.&lt;Array.&lt;EmailForward&gt;, Error&gt;</code></dt>
<dd><p>List a domain&#39;s forwarders (<a href="https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistforwards">https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistforwards</a>)</p>
</dd>
<dt><a href="#emailAddForward">emailAddForward(args)</a> ⇒ <code>Promise.&lt;Array.&lt;EmailForwardCreated&gt;, Error&gt;</code></dt>
<dd><p>Creates an email forwarder (<a href="https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddforward">https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddforward</a>)</p>
</dd>
<dt><a href="#emailAddPop">emailAddPop(args)</a> ⇒ <code>Promise.&lt;Array.&lt;CpanelResult&gt;, Error&gt;</code></dt>
<dd><p>Adds an email account (<a href="https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddpop">https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddpop</a>)</p>
</dd>
<dt><a href="#emailTrackStats">emailTrackStats()</a> ⇒ <code>Promise.&lt;Array.&lt;EmailTrackStats&gt;, Error&gt;</code></dt>
<dd><p>Returns a cPanel account&#39;s mail statistics (<a href="https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+EmailTrack%3A%3Astats">https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+EmailTrack%3A%3Astats</a>)</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#EmailPopWithDisk">EmailPopWithDisk</a> : <code>Object</code></dt>
<dd><p>Domain&#39;s email addresses with quota and disk usage result</p>
</dd>
<dt><a href="#EmailForward">EmailForward</a> : <code>Object</code></dt>
<dd><p>Email forwarder result</p>
</dd>
<dt><a href="#EmailForwardCreated">EmailForwardCreated</a> : <code>Object</code></dt>
<dd><p>Email forwarder created</p>
</dd>
<dt><a href="#CpanelResult">CpanelResult</a> : <code>Object</code></dt>
<dd><p>cPanel result</p>
</dd>
<dt><a href="#EmailTrackStats">EmailTrackStats</a> : <code>Object</code></dt>
<dd><p>cPanel account&#39;s mail statistics</p>
</dd>
</dl>
<a name="setUrlAndCredentials"></a>
## setUrlAndCredentials(url, user, password)
Set URL and Credentials for Authentication

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | CPanel URL |
| user | <code>string</code> | CPanel User |
| password | <code>string</code> | CPanel Password |

<a name="emailListPopsWithDisk"></a>
## emailListPopsWithDisk(args) ⇒ <code>Promise.&lt;Array.&lt;EmailPopWithDisk&gt;, Error&gt;</code>
Lists a domain's email addresses with quota and disk usage information. ([https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistpopswithdisk](https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistpopswithdisk))

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;EmailPopWithDisk&gt;, Error&gt;</code> - A promise that returns a [EmailPopWithDisk](#EmailPopWithDisk) if resolved, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Arguments object |
| [args.domain] | <code>string</code> | The domain to search for email address information (If you do not specify a value, the function lists information for all of the account's domains) |
| [args.nearquotaonly] | <code>boolean</code> | Whether to limit results to accounts that use 95% or more of their allotted disk space (If you do not specify a value, the function lists information for all email addresses) |
| [args.no_validate] | <code>boolean</code> | Whether to only read data from the .cpanel/email_accounts.yaml file (If you specify 0 or do not specify a value, the function also checks the passwd file and quota files to ensure that the account information is identical) |
| [args.regex] | <code>string</code> | A Perl Compatible Regular Expression (PCRE) that filters the results. The system matches the PCRE to both the email address's username and domain |

<a name="emailListForwards"></a>
## emailListForwards(args) ⇒ <code>Promise.&lt;Array.&lt;EmailForward&gt;, Error&gt;</code>
List a domain's forwarders ([https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistforwards](https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistforwards))

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;EmailForward&gt;, Error&gt;</code> - A promise that returns a [EmailForward](#EmailForward) if resolved, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Arguments object |
| [args.domain] | <code>string</code> | The domain to search for forwarders |
| [args.regex] | <code>string</code> | A Perl Compatible Regular Expression (PCRE) that filters the results. The system matches the PCRE to both the email address's username and domain. |

<a name="emailAddForward"></a>
## emailAddForward(args) ⇒ <code>Promise.&lt;Array.&lt;EmailForwardCreated&gt;, Error&gt;</code>
Creates an email forwarder ([https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddforward](https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddforward))

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;EmailForwardCreated&gt;, Error&gt;</code> - A promise that returns a [EmailForwardCreated](#EmailForwardCreated) if resolved, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Arguments object |
| args.domain | <code>string</code> | The domain |
| args.email | <code>string</code> | The email address to forward (you can pass multiple addresses to this parameter as a comma-separated list) |
| args.fwdopt | <code>string</code> | The method to use to handle the email address's mail |
| [args.fwdemail] | <code>string</code> | The email address to which the system forwards messages |
| [args.fwdsystem] | <code>string</code> | The system user to whom the system forwards messages |
| [args.failmsgs] | <code>string</code> | The failure message for the message's sender |
| [args.pipefwd] | <code>string</code> | The application to which the system pipes messages |

<a name="emailAddPop"></a>
## emailAddPop(args) ⇒ <code>Promise.&lt;Array.&lt;CpanelResult&gt;, Error&gt;</code>
Adds an email account ([https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddpop](https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddpop))

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;CpanelResult&gt;, Error&gt;</code> - A promise that returns a [CpanelResult](#CpanelResult) if resolved, or an error if rejected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>Object</code> |  | Arguments object |
| args.domain | <code>string</code> |  | The email account's domain |
| args.email | <code>string</code> |  | The email account username |
| args.password | <code>string</code> |  | The email account password |
| [args.quota] | <code>number</code> | <code>250</code> | The maximum amount of disk space that the new email account may use (to grant unlimited disk space, specify 0) |

<a name="emailTrackStats"></a>
## emailTrackStats() ⇒ <code>Promise.&lt;Array.&lt;EmailTrackStats&gt;, Error&gt;</code>
Returns a cPanel account's mail statistics ([https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+EmailTrack%3A%3Astats](https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+EmailTrack%3A%3Astats))

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;EmailTrackStats&gt;, Error&gt;</code> - A promise that returns a [EmailTrackStats](#EmailTrackStats) if resolved, or an error if rejected.  
<a name="EmailPopWithDisk"></a>
## EmailPopWithDisk : <code>Object</code>
Domain's email addresses with quota and disk usage result

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| txtdiskquota | <code>string</code> &#124; <code>number</code> | The disk quota |
| diskquota | <code>string</code> &#124; <code>number</code> | The disk quota (This return parameter's value is localized for the account's locale setting) |
| diskusedpercent | <code>number</code> | The percentage of disk space that the email account uses |
| mtime | <code>number</code> | The file modification time, in Unix time |
| diskused | <code>number</code> | The disk space that the email account uses, in Megabytes (MB) |
| humandiskquota | <code>string</code> | The disk quota, in human-readable format |
| _diskused | <code>number</code> | The disk space that the email account uses, in bytes |
| login | <code>string</code> | The email address, or the main account username |
| email | <code>string</code> | The email address, or the string Main Account |
| domain | <code>string</code> | The email account's domain |
| user | <code>string</code> | The email account username |
| humandiskused | <code>string</code> | The disk space that the email account uses, in human-readable format |
| diskusedpercent20 | <code>number</code> | The percentage of disk space that the email account uses |
| _diskquota | <code>number</code> | The disk quota, in bytes |

<a name="EmailForward"></a>
## EmailForward : <code>Object</code>
Email forwarder result

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| html_dest | <code>string</code> | The email address, in an HTML-safe format |
| dest | <code>string</code> | The email address, in plaintext |
| html_forward | <code>string</code> | The address to which the system forwards mail, or the method that the system uses to handle mail, in an HTML-safe format |
| forward | <code>string</code> | The address to which the system forwards mail, or the method that the system uses to handle mail, in plaintext |
| uri_dest | <code>string</code> | The email address, in URI-encoded format |
| uri_forward | <code>string</code> | The address to which the system forwards mail, or the method that the system uses to handle mail, in URI-encoded format |

<a name="EmailForwardCreated"></a>
## EmailForwardCreated : <code>Object</code>
Email forwarder created

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| domain | <code>string</code> | The domain |
| email | <code>string</code> | The email address |
| forward | <code>string</code> | The method that the system will use to handle the address's mail |

<a name="CpanelResult"></a>
## CpanelResult : <code>Object</code>
cPanel result

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | A reason for failure (this function only returns a reason value if it failed) |
| result | <code>boolean</code> | Whether the function succeeded (1 — The function succeeded / 0 — The function failed) |

<a name="EmailTrackStats"></a>
## EmailTrackStats : <code>Object</code>
cPanel account's mail statistics

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| TOTALSIZE | <code>number</code> | The total size of messages that the server sent, in bytes |
| SUCCESSCOUNT | <code>number</code> | The number of successful deliveries |
| SENDCOUNT | <code>number</code> | The number of sent messages |
| DEFERCOUNT | <code>number</code> | The number of deferral events |
| FAILCOUNT | <code>number</code> | The number of delivery failures |
| INPROGRESSCOUNT | <code>number</code> | The number of messages that are currently in progress |
| DEFERFAILCOUNT | <code>number</code> | The combined number of deferral and failure eventsk |
