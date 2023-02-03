var Smartphone = /** @class */ (function () {
    function Smartphone(color, brand) {
        this.color = color;
        this.brand = brand;
        this._battery = 100000;
    }
    Smartphone.prototype.makePhoneCall = function () {
        if (!(this._battery >= 10)) {
            throw "there isnt enough _battery";
        }
        else {
            this._battery -= 100;
        }
    };
    Object.defineProperty(Smartphone.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        enumerable: false,
        configurable: true
    });
    Smartphone.prototype.rechargeTwoTimes = function () {
        this._battery = 200;
    };
    return Smartphone;
}());

// var newObjectPhone = new Smartphone('verde', 'Samsung');
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();
// newObjectPhone.makePhoneCall();



