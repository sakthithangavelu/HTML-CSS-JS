class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}
class EmployeeNew extends Employee{
    constructor(name,id)
    {
        super(name,id)
    }
}
EmployeeNew.prototype.bay = "Hercules";

const aspire = new EmployeeNew("Sakthi",10449);
console.log(aspire.bay);