
module.exports = (WarrantyService) => {

    WarrantyService.before("CREATE", "Products", (req) => {
        const data = req.data;


        //Price should not be negative
        if (0 > data.price) {
            req.error('Price cannot be negative');
        }

        //Product Name should be there
        if (!data.productName) {
            req.error('Please specify the Product Name')
        }

        // Warranty End Date Logic
        if (data.purchaseDate && data.warrantyPeriod) {
            const purchaseDate = new Date(data.purchaseDate);
            //converting the string value only into into integer value  '2 Years ' -> 2
            const years = parseInt(data.warrantyPeriod);
            const warrantyEndDate = new Date(purchaseDate);
            warrantyEndDate.setFullYear(
                purchaseDate.getFullYear() + years
            );
        }

    })

}