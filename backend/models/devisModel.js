import mongoose from 'mongoose'

const devisSchema = new mongoose.Schema(
  {
    // Coordonnées
    prenom: { type: String },
    nom: { type: String },
    nomEntreprise: { type: String },
    email: { type: String }, 
    adresseEntreprise: { type: String },
    CodeEntreprise: { type: String },

    telephone: { type: String },

    // Marchandise
    typeMarchandise: { type: String },
    hsCode: { type: String },
    poidsTotal: { type: Number }, // en kg
    poidsNet: { type: Number }, // en kg

    volume: { type: Number }, // en m3
    emballageActuel: { type: String },

    // Mode de transport : plusieurs choix possibles
    modeTransport: [{ type: String }], // ex: ["Fret maritime", "Fret aérien"]

    // Services souhaités : cases à cocher
    servicesSouhaites: [{ type: String }], // ex: ["Porte à porte", "Service d’emballage"]

    // Uploads et notes
    fichiers: [{ type: String }], // noms ou URLs des fichiers uploadés
    detailsSupplementaires: { type: String },

    // Informations logistiques
    marchandise: { type: String },
    poids: { type: String },
    dateSouhaitee: { type: String },
    paysDepart: { type: String, required: true },
    adresseDepart: { type: String },
    paysArrivee: { type: String, required: true },
    adresseArrivee: { type: String },
    incoterm: { type: String },
    dateExpedition: { type: Date },

    // Découverte et consentement
    secteurActivite: { type: String },
    sourceDecouverte: { type: String }, // radio button
    newsletterConsent: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

const Devis = mongoose.model('Devis', devisSchema)

export default Devis
// import mongoose from 'mongoose'

// const devisSchema = new mongoose.Schema({
//   nom: String,
//   email: String,
//   telephone: String,
//   marchandise: String,
//   poids: String,
//   paysDepart: String,
//   paysArrivee: String,
//   dateSouhaitee: String,
// }, { timestamps: true })

// const Devis = mongoose.model('Devis', devisSchema)

// export default Devis

// import mongoose from 'mongoose'

// const devisSchema = new mongoose.Schema(
//   {
//     nom: { type: String },
//   email: { type: String },
//   telephone: { type: String },
//   marchandise: { type: String },
//   poids: { type: String },
//   dateSouhaitee: { type: String },
//     paysDepart: { type: String, required: true },
//     adresseDepart: { type: String },
//     paysArrivee: { type: String, required: true },
//     adresseArrivee: { type: String },
//     incoterm: { type: String },
//     dateExpedition: { type: Date },
//     // Autres champs des étapes 2 et 3 seront ajoutés ensuite
//   },
//   {
//     timestamps: true,
//   }
// )

// const Devis = mongoose.model('Devis', devisSchema)

// export default Devis
