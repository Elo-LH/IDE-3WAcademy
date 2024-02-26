function estUnMoisDeTrenteJours(mois) {
  if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    return 1
  } else {
    return 0
  }
}
function estUnMoisDeTrenteEtUnJours(mois) {
  if (
    mois === 1 ||
    mois === 3 ||
    mois === 5 ||
    mois === 7 ||
    mois === 8 ||
    mois === 10 ||
    mois === 12
  ) {
    return 1
  } else {
    return 0
  }
}
function estAnneeBissextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return 1
  } else {
    return 0
  }
}
function nombreDeJours(mois, annee) {
  const estTrente = estUnMoisDeTrenteJours(mois)
  const estTrenteEtUn = estUnMoisDeTrenteEtUnJours(mois)
  if (estTrenteEtUn === 1) {
    return 31
  } else if (estTrente === 1) {
    return 30
  } else if (estAnneeBissextile(annee) === 1) {
    return 29
  } else {
    return 28
  }
  return 'Error'
}

function programmePrincipal() {
  let inputMois = prompt('Saisir un numéro de mois')
  let mois = parseInt(inputMois)
  while (mois < 1 || mois > 12) {
    inputMois = prompt('Saisir un numéro de mois')
    mois = parseInt(inputMois)
  }
  let inputAnnee = prompt('Saisir une annee')
  let annee = parseInt(inputAnnee)
  while (annee < 1588 || annee > 2023) {
    inputAnnee = prompt('Saisir une annee, entre 1588 et 2023')
    annee = parseInt(inputAnnee)
  }
  const jours = nombreDeJours(mois, annee)
  alert(`Nombre de jours ${jours}`)
}
programmePrincipal()
