import fs from 'fs';

/**
 * Ajoute un nouveau sujet au fichier sujets.json
 * @param {object} sujet - Objet sujet à ajouter
 */
export function ajouterSujet(sujet) {
  const filePath = './src/data/sujets.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.push(sujet);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/**
 * Exemple d’utilisation :
 * ajouterSujet({
 *   slug: 'nouveau-sujet',
 *   title: 'Titre',
 *   description: 'Description',
 *   image1: { src: '/images/xxx.jpg', alt: '...' },
 *   image2: { src: '/images/yyy.jpg', alt: '...' },
 *   sections: [ ... ]
 * });
 */
