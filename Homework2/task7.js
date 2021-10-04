// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
//Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

let date = new Date;

let currentHour = date.getHours;
if (currentHour >23 || currentHour<5){
    console.log("Good night!!")
    }
    else if (currentHour >= 5 && currentHour <= 11){
    console.log ("Good Morning!")
        } else if (currentHour >= 11 && currentHour <= 17){
    console.log("Good Afternoon")
            } else if (currentHour >= 17 && currentHour <= 23){
        console.log ("Good evening")
    } else {
        console.log("Invalid data")
}




