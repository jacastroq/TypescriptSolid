class Smartphone{
   private color:string;
   private brand:string;
   private _battery: number;

    constructor(
    color:string
    ,brand:string
    ){
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }

    makePhoneCall() :void{

        if (!(this._battery >=10)) {
            throw "there isnt enough _battery";
        }
        else{

            this._battery -= 10;
        }
    }
    
    get battery() :number {
        return this._battery;
    }

    rechargeTwoTimes(){
        this._battery = 200;
    }
}

let newObjectPhone = new Smartphone ('verde','Samsung');
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();
newObjectPhone.makePhoneCall();