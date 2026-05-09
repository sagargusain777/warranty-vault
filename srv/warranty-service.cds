using warranty from '../db/schema';


service WarrantyService {
    entity Products as projection on warranty.Products;
}