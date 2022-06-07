class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F=f; 
        this.I=i;
        this.O=o;
        this.D=new Date(d);
        this.S=s;
        this.SH=sh;
    }
    setById() {
        document.getElementById("F").textContent=this.F;
        document.getElementById("I").textContent=this.I;
        document.getElementById("O").textContent=this.O;
        document.getElementById("Y").textContent=this.D.getFullYear();
        document.getElementById("S").textContent=this.S;
        document.getElementById("SH").textContent=this.SH;
    }
}
let Ivanov = new Patient('Иванов','Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
let Petrov = new Patient('Петров','Антон', 'Николаевич', new Date(1976, 9, 11), "м", "Отказано");
let Sidorov = new Patient('Сидоров','Альберт', 'Сергеевич', new Date(1991, 4, 2), "м", "Исполнено");

Ivanov.setById(); 
Petrov.setById();
Sidorov.setById();