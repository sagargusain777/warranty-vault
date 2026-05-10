using warranty from '../db/schema';


service WarrantyService {
    entity Customers as projection on warranty.Customers;
    entity Products  as projection on warranty.Products;

}
