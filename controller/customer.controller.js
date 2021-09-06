const db=require("../config/db.config");
const Customer=db.customers;

exports.findAll=(req,res)=>{
    Customer.findAll().then(customers=>{
        res.json(customers);
    })
};

exports.create=(req,res)=>{
    Customer.create(req.body).then(customers=>{
        res.json(customers);
    })
}

exports.deletes=(req,res)=>{
    Customer.destroy({where:{id:req.params.id}}).then(customer=>{
        res.json(customer);
    })
}

exports.update=(req,res)=>{
    Customer.update(req.body,{where:{id:req.params.id}}).then(customer=>{
        res.json(customer);
    })
}

exports.findOne=(req,res)=>{
    Customer.findOne({where:{id:req.params.id}}).then(customer=>{
        res.json(customer);
    })
}