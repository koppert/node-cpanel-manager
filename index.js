var Q = require('q');
var _request = require('request');
var _ = require('underscore');

var CPanelManagement = function() {

  /**
   * set request remember cookies
   */
  var request = _request.defaults({ jar: true });

  /**
   * Arguments used in GET requests
   * @private
   * @type {Object}
   */
  var requestArguments = {};

  /**
   * Arguments used in POST requests
   * @private
   * @type {Object}
   */
  var funcArguments = {
    baseUrl: null,
    uri: null,
    strictSSL: false,
    qs: {}
  };

  /**
   * Set URL and Credentials for Authentication
   * @param  {string} url      CPanel URL
   * @param  {string} user     CPanel User
   * @param  {string} password CPanel Password
   */
  this.setUrlAndCredentials = function(url, user, password) {
    credentials = { user: user, pass: password };
    _arguments = {
      baseUrl: url,
      uri: "/login/?login_only=1",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      strictSSL: false,
      body: require('querystring').stringify(credentials)
    };
    requestArguments = _arguments;
    funcArguments.baseUrl = url;
  };

  /**
   * Domain's email addresses with quota and disk usage result
   * @typedef   {Object}  EmailPopWithDisk
   * @property  {(string|number)} txtdiskquota      The disk quota
   * @property  {(string|number)} diskquota         The disk quota (This return parameter's value is localized for the account's locale setting)
   * @property  {number}          diskusedpercent   The percentage of disk space that the email account uses
   * @property  {number}          mtime             The file modification time, in Unix time
   * @property  {number}          diskused          The disk space that the email account uses, in Megabytes (MB)
   * @property  {string}          humandiskquota    The disk quota, in human-readable format
   * @property  {number}          _diskused         The disk space that the email account uses, in bytes
   * @property  {string}          login             The email address, or the main account username
   * @property  {string}          email             The email address, or the string Main Account
   * @property  {string}          domain            The email account's domain
   * @property  {string}          user              The email account username
   * @property  {string}          humandiskused     The disk space that the email account uses, in human-readable format
   * @property  {number}          diskusedpercent20 The percentage of disk space that the email account uses
   * @property  {number}          _diskquota        The disk quota, in bytes
   */

  /**
   * Lists a domain's email addresses with quota and disk usage information. ({@link https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistpopswithdisk})
   * @param   {Object}  args                        Arguments object
   * @param   {string}  [args.domain]               The domain to search for email address information (If you do not specify a value, the function lists information for all of the account's domains)
   * @param   {boolean} [args.nearquotaonly]        Whether to limit results to accounts that use 95% or more of their allotted disk space (If you do not specify a value, the function lists information for all email addresses)
   * @param   {boolean} [args.no_validate]          Whether to only read data from the .cpanel/email_accounts.yaml file (If you specify 0 or do not specify a value, the function also checks the passwd file and quota files to ensure that the account information is identical)
   * @param   {string}  [args.regex]                A Perl Compatible Regular Expression (PCRE) that filters the results. The system matches the PCRE to both the email address's username and domain
   * @return  {Promise<EmailPopWithDisk[], Error>}  A promise that returns a {@link EmailPopWithDisk} if resolved, or an error if rejected.
   */
  this.emailListPopsWithDisk = function(args) {
    var qs = { cpanel_jsonapi_version: 2, cpanel_jsonapi_module: 'Email', cpanel_jsonapi_func: 'listpopswithdisk' }
    return cpanelRequest(_.extend(qs, args));
  };

  /**
   * Email forwarder result
   * @typedef   {Object}  EmailForward
   * @property  {string}  html_dest     The email address, in an HTML-safe format
   * @property  {string}  dest          The email address, in plaintext
   * @property  {string}  html_forward  The address to which the system forwards mail, or the method that the system uses to handle mail, in an HTML-safe format
   * @property  {string}  forward       The address to which the system forwards mail, or the method that the system uses to handle mail, in plaintext
   * @property  {string}  uri_dest      The email address, in URI-encoded format
   * @property  {string}  uri_forward   The address to which the system forwards mail, or the method that the system uses to handle mail, in URI-encoded format
   */

  /**
   * List a domain's forwarders ({@link https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Alistforwards})
   * @param   {Object} args                     Arguments object
   * @param   {string} [args.domain]            The domain to search for forwarders
   * @param   {string} [args.regex]             A Perl Compatible Regular Expression (PCRE) that filters the results. The system matches the PCRE to both the email address's username and domain.
   * @return  {Promise<EmailForward[], Error>}  A promise that returns a {@link EmailForward} if resolved, or an error if rejected.
   */
  this.emailListForwards = function(args) {
    var qs = { cpanel_jsonapi_version: 2, cpanel_jsonapi_module: 'Email', cpanel_jsonapi_func: 'listforwards' }
    return cpanelRequest(_.extend(qs, args));
  };

  /**
   * Email forwarder created
   * @typedef   {Object}  EmailForwardCreated
   * @property  {string}  domain    The domain
   * @property  {string}  email     The email address
   * @property  {string}  forward   The method that the system will use to handle the address's mail
   */

  /**
   * Creates an email forwarder ({@link https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddforward})
   * @param   {Object} args                           Arguments object
   * @param   {string} args.domain                    The domain
   * @param   {string} args.email                     The email address to forward (you can pass multiple addresses to this parameter as a comma-separated list)
   * @param   {string} args.fwdopt                    The method to use to handle the email address's mail
   * @param   {string} [args.fwdemail]                The email address to which the system forwards messages
   * @param   {string} [args.fwdsystem]               The system user to whom the system forwards messages
   * @param   {string} [args.failmsgs]                The failure message for the message's sender
   * @param   {string} [args.pipefwd]                 The application to which the system pipes messages
   * @return  {Promise<EmailForwardCreated[], Error>} A promise that returns a {@link EmailForwardCreated} if resolved, or an error if rejected.
   */
  this.emailAddForward = function(args) {
    var qs = { cpanel_jsonapi_version: 2, cpanel_jsonapi_module: 'Email', cpanel_jsonapi_func: 'addforward' }
    return cpanelRequest(_.extend(qs, args));
  };

  /**
   * cPanel result
   * @typedef   {Object}  CpanelResult
   * @property  {string}  reason    A reason for failure (this function only returns a reason value if it failed)
   * @property  {boolean} result    Whether the function succeeded (1 — The function succeeded / 0 — The function failed)
   */

  /**
   * Adds an email account ({@link https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+Email%3A%3Aaddpop})
   * @param   {Object} args                     Arguments object
   * @param   {string} args.domain              The email account's domain
   * @param   {string} args.email               The email account username
   * @param   {string} args.password            The email account password
   * @param   {number} [args.quota=250]         The maximum amount of disk space that the new email account may use (to grant unlimited disk space, specify 0)
   * @return  {Promise<CpanelResult[], Error>}  A promise that returns a {@link CpanelResult} if resolved, or an error if rejected.
   */
  this.emailAddPop = function(args) {
    var qs = { cpanel_jsonapi_version: 2, cpanel_jsonapi_module: 'Email', cpanel_jsonapi_func: 'addpop' }
    return cpanelRequest(_.extend(qs, args));
  };

  /**
   * cPanel account's mail statistics
   * @typedef   {Object}  EmailTrackStats
   * @property  {number}  TOTALSIZE       The total size of messages that the server sent, in bytes
   * @property  {number}  SUCCESSCOUNT    The number of successful deliveries
   * @property  {number}  SENDCOUNT       The number of sent messages
   * @property  {number}  DEFERCOUNT      The number of deferral events
   * @property  {number}  FAILCOUNT       The number of delivery failures
   * @property  {number}  INPROGRESSCOUNT The number of messages that are currently in progress
   * @property  {number}  DEFERFAILCOUNT  The combined number of deferral and failure eventsk
   */

  /**
   * Returns a cPanel account's mail statistics ({@link https://documentation.cpanel.net/display/SDK/cPanel+API+2+Functions+-+EmailTrack%3A%3Astats})
   * @return {Promise<EmailTrackStats[], Error>}  A promise that returns a {@link EmailTrackStats} if resolved, or an error if rejected.
   */
  this.emailTrackStats = function() {
    var qs = { cpanel_jsonapi_version: 2, cpanel_jsonapi_module: 'EmailTrack', cpanel_jsonapi_func: 'stats' }
    return cpanelRequest(qs);
  };

  /**
   * cPanel authentication and function request
   * @private
   * @param  {Object}   qs  Arguments object
   * @return {Promise}      A promise
   */
  var cpanelRequest = function(qs) {
    var deferred  = Q.defer();
    request.post(requestArguments, function(error, response, body) {
      if (error) { deferred.reject(error); console.log(error); return; }
      if (!error && response.statusCode === 200) {
        funcArguments.uri = JSON.parse(body).security_token + "/json-api/cpanel";
        funcArguments.qs = qs;
        request(funcArguments, function(err, resp, bdy) {
          if (err) { deferred.reject(err); console.log(err); return; }
          if (!err && resp.statusCode === 200) {
            deferred.resolve(JSON.parse(bdy).cpanelresult.data);
          }
        });
      }
    });
    return deferred.promise;
  };

};

module.exports = new CPanelManagement();
