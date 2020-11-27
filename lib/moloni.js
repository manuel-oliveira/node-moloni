var VERSION = '0.0.1',
  Request = require("./request").Request;

function merge(defaults, options) {
  defaults = defaults || {};
  if (options && typeof options === 'object') {
    var keys = Object.keys(options);
    for (var i = 0, len = keys.length; i < len; i++) {
      var k = keys[i];
      if (options[k] !== undefined) defaults[k] = options[k];
    }
  }
  return defaults;
}

function Moloni(options) {
  if (!(this instanceof Moloni)) return new Moloni(options);
  var defaults = {
    client_id: null,
    client_secret: null,
    username: null,
    password: null,
    sandbox: false,
    headers: {
      'Accept': '*/*',
      'Connection': 'Keep-Alive',
      'User-Agent': 'node-moloni/' + VERSION
    },
    rest_base_host: 'api.moloni.com',
    rest_base_url: '/v1/',
    secure: false // force use of https for login/gatekeeper
  };
  this.options = merge(defaults, options);
  if (this.options.sandbox)
    this.options.rest_base_url = '/sandbox/';
  this._request = new Request(this.options);
}

Moloni.VERSION = VERSION;
module.exports = Moloni;

Moloni.prototype.setCompanyId = function (companyId) {
  this._request.setCompanyId(companyId);
};

Moloni.prototype.users = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('users', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.companies = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('companies', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};


Moloni.prototype.countries = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('countries', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.fiscalZones = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('fiscalZones', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.languages = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('languages', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.subscription = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('subscription', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.customers = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('customers', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.productCategories = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('productCategories', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.products = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('products', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.bankAccounts = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('bankAccounts', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.paymentMethods = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('paymentMethods', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.maturityDates = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('maturityDates', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.deliveryMethods = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('deliveryMethods', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.vehicles = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('vehicles', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.deductions = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('deductions', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.taxExemptions = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('taxExemptions', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.taxes = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('taxes', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.measurementUnits = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('measurementUnits', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.identificationTemplates = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('identificationTemplates', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.documentSets = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('documentSets', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.customerAlternateAddresses = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('customerAlternateAddresses', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.suppliers = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('suppliers', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.salesmen = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('salesmen', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.documents = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('documents', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.invoices = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('invoices', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.receipts = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('receipts', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.creditNotes = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('creditNotes', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.debitNotes = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('debitNotes', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.simplifiedInvoices = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('simplifiedInvoices', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.deliveryNotes = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('deliveryNotes', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.billsOfLading = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('billsOfLading', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.ownAssetsMovementGuides = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('ownAssetsMovementGuides', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.waybills = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('waybills', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.customerReturnNotes = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('customerReturnNotes', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.estimates = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('estimates', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};

Moloni.prototype.invoiceReceipts = function (call, params) {
  return new Promise((resolve, reject) =>
    this._request.executeRequest('invoiceReceipts', call, params, (error, result) => error ? reject(error) : resolve(result))
  );
};
