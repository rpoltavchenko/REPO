class Worker {
    #exp = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    //declare methods via object literals
showSalary(){
    const {fullName, dayRate, workingDays} = this;
    console.log(`${fullName}'s salary is: ${dayRate * workingDays}`);
    }
showSalaryWithExp(){
    const {fullName, dayRate, workingDays} = this;
    console.log(`${fullName}'s salary is: ${dayRate * workingDays * this.#exp}`);
    }
showWorkerSalary(){
    const {dayRate, workingDays} = this;
    return (`${dayRate * workingDays * this.#exp}`);
    }

//getter and seter to change #exp value

get showExp() {
    return this.#exp;
    }
set setExp(exp){
    this.#exp = exp;
}



sortSalaries(workersArr){
    let sortedSalary = workersArr.sort(function(x,y){
        return x.showWorkerSalary() - y.showWorkerSalary();
    })
    for (let worker of sortedSalary){
        console.log(worker.fullName + ": " + list.showWorkerSalary());
    }
} 

}

let worker1 = new Worker("Peter Parker", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();

let worker2 = new Worker("Reed Richards", 16, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();

let worker3 = new Worker("Tony Stark", 10, 40);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExp();


const workersArr = [worker1, worker2, worker3];

