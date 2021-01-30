"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + "$ for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mandi', 'work on testing', 250);
console.log(invOne);
var invoices = [];
invoices.push(invOne);
console.log(invoices);
invOne.client = 'jon';
console.log(invOne);
