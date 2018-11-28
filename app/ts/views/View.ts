//declare var $: any;

abstract class View<T> { //GENERICS (Tipagem Generica <T>)

    //private _elemento: Element;
    private _elemento: JQuery;

    constructor(seletor: string) {

        //this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
    }

    update(model: T) {

        //this._elemento.innerHTML = this.template(model);
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}

