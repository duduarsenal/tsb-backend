const mongoose = require("mongoose");

const HavenSchema = new mongoose.Schema({
  name: String,
  link_capa: String,
  bombA: {
    name: String,
    capa: String,
    localizacao: String,
    pixel1: { attacker: String, defense: String },
    pixel2: { attacker: String, defense: String },
    pixel3: { attacker: String, defense: String },
    pixel4: { attacker: String, defense: String },
    pixel5: { attacker: String, defense: String },
    pixel6: { attacker: String, defense: String },
    pixel7: { attacker: String, defense: String },
    pixel8: { attacker: String, defense: String },
  }
});

const Haven = mongoose.model("Haven", HavenSchema);

module.exports = Haven;
