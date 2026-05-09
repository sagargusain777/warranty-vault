namespace warranty;

//Defining the data model for our warranty
entity Products {
    key id              : UUID;
        productName     : String(100);
        brand           : String(50);
        purchaseDate    : Date;
        warrantyPeriod  : String(10);
        warrantyEndDate : Date;
        price           : Decimal(10, 2);
}

