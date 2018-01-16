var auto = {
    stanje: "zaustavljeno",
    start:function(){this.stanje = "pokrenut"},
    stop:function(){this.stanje="zaustavljeno"}
}
module.exports = auto;