const { module } = require("@sap/cds/lib/compile/resolve");

module.exports = (WarrantyService) =>{

    WarrantyService.before("CREATE","Product",(req)=>{
        const data = req.body;

        if(0< data.price){
            req.error('Price cannot be negative');
        }
        
    })

}