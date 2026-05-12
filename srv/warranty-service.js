
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
            // Storing the values in the database  
            data.warrantyEndDate = warrantyEndDate.toISOString().split('T')[0];  //Converting  Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)-> "2011-10-05T14:48:00.000Z"
        }

        // Warranty Status Logic
        if (data.warrantyEndDate) {
            const todayDate = new Date();
            const warrantyEndDate = new Date(data.warrantyEndDate)
            if (todayDate > warrantyEndDate) {
                data.warrantyStatus = 'Inactive'
            } else {
                data.warrantyStatus = 'Active'
            }
        }

    })

}