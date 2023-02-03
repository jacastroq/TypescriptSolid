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

class Android extends Smartphone{
    protected tiendaAplicaciones:string;

    constructor(tiendaAplicaciones:string , color:string){
        super(color,'Samsung')
        this.tiendaAplicaciones = tiendaAplicaciones;
    }
}

class Iphone extends Smartphone{
    protected tiendaAplicaciones:string;

    constructor(tiendaAplicaciones:string , color:string){
        super(color,'Apple')
        this.tiendaAplicaciones = tiendaAplicaciones;
    }
}

let celularIphone =  new Iphone ('AppleStore', 'White');
let celularAndroind = new Android ('GooglePlay', 'Black');

celularIphone.battery;
celularAndroind.battery;


