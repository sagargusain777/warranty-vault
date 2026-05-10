namespace warranty;


entity Customers {
    key ID       : UUID;
        name     : String(60);
        email    : String(100);
        phone    : String(10);
        products : Association to many Products
                       on products.customer = $self;


}

//Defining the data model for our warranty
entity Products {
    key ID              : UUID;
        productName     : String(100);
        brand           : String(50);
        purchaseDate    : Date;
        warrantyPeriod  : String(10);
        warrantyEndDate : Date;
        price           : Decimal(10, 2);
        customer        : Association to Customers;
}
