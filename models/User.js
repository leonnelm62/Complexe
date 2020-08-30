const validator = require("validator");

let User = function (data) {
    this.data = data;
    this.errors = [];
};

User.prototype.validate = function () {
    if (this.data.username == "") {
        this.errors.push("Vous devez renseigner un nom");
    };

    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("Le nom ne doit contenir que des lettres et numéros.");
    };

    if (!validator.isEmail(this.data.email)) {
        this.errors.push("Vous devez renseigner une adresse email valide.");
    };

    if (this.data.password == "") {
        this.errors.push("Vous devez renseigner un mot de passe.");
    };

    if (this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("Le mot de passe doit avoir au moins 12 caractères.");
    };

    if (this.data.password.length > 100) {
        this.errors.push("Le mot de passe ne peut excéder plus de 100 caractères.");
    };

    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("Le nom doit avoir au moins 03 caractères.");
    };

    if (this.data.username.length > 30) {
        this.errors.push("Le nom ne peut excéder plus de 30 caractères.");
    }
};

User.prototype.register = function () {
    this.validate();
};

module.exports = User;