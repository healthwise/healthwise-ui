export default (localization, key) => {
  var terms = {
    __TEST__DesiredBehavior: {
      en: 'Desired behavior',
      'en-ca': 'Desired behaviour',
      es: 'Comportamiento deseado',
      fr: 'Comportement souhaité',
    },
    DecisionAid: {
      en: 'Decision Aid',
      es: 'Ayuda a la decisión',
      fr: 'Aide à la décision',
    },
    Loading: {
      en: 'Decision Aid: Loading…',
    },
  }

  var shortLocalization = localization.substr(0, 2)
  if (terms[key] && terms[key][localization]) {
    return terms[key][localization]
  } else if (terms[key] && terms[key][shortLocalization]) {
    return terms[key][shortLocalization]
  }
  return `  [${key} not defined for ${localization}]  `
}
