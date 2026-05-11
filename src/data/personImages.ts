const PERSON_IMAGE_BASE = "/img/PERSONS";

function normalizePersonName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

// Keyed by normalized person name.
const PERSON_IMAGE_BY_NAME: Record<string, string> = {
  // Former managers
  [normalizePersonName("Rev. Fr. John Mullakkara")]: `${PERSON_IMAGE_BASE}/image12.png`,
  [normalizePersonName("Rev. Fr. Antony Purayidathil")]: `${PERSON_IMAGE_BASE}/image20.png`,
  // Variant used in current code
  [normalizePersonName("Rev. Fr. Antony Purayidam")]: `${PERSON_IMAGE_BASE}/image20.png`,
  [normalizePersonName("Rev. Fr. Mani Attel")]: `${PERSON_IMAGE_BASE}/image28.jpg`,
  [normalizePersonName("Rev. Dr. Thomas Melvettath")]: `${PERSON_IMAGE_BASE}/image24.png`,
  // Variant spelling in long-form paragraph (Melvettam)
  [normalizePersonName("Rev. Dr. Thomas Melvettam")]: `${PERSON_IMAGE_BASE}/image24.png`,
  [normalizePersonName("Rev. Dr. Jose Vettickal")]: `${PERSON_IMAGE_BASE}/image4.jpg`,
  [normalizePersonName("Rev. Fr. Sebastian Palakuzhy")]: `${PERSON_IMAGE_BASE}/image18.png`,

  // Teaching staff (departments)
  [normalizePersonName("Tomichan E M")]: `${PERSON_IMAGE_BASE}/image21.png`,
  // Variant used elsewhere (Tomichen)
  [normalizePersonName("Tomichen E M")]: `${PERSON_IMAGE_BASE}/image21.png`,
  [normalizePersonName("Saiju P J")]: `${PERSON_IMAGE_BASE}/image23.jpg`,
  [normalizePersonName("Sali Joseph")]: `${PERSON_IMAGE_BASE}/image26.jpg`,
  [normalizePersonName("Jain V Antony")]: `${PERSON_IMAGE_BASE}/image3.jpg`,
  [normalizePersonName("Jismy John")]: `${PERSON_IMAGE_BASE}/image25.png`,
  [normalizePersonName("Swathi V S")]: `${PERSON_IMAGE_BASE}/image17.png`,
  [normalizePersonName("Ramzeena")]: `${PERSON_IMAGE_BASE}/image5.png`,
  [normalizePersonName("Sarisa David")]: `${PERSON_IMAGE_BASE}/image1.png`,
  [normalizePersonName("Ramya M P")]: `${PERSON_IMAGE_BASE}/image6.png`,
  [normalizePersonName("Jithya V Augustian")]: `${PERSON_IMAGE_BASE}/image13.png`,
  [normalizePersonName("Pravisha N")]: `${PERSON_IMAGE_BASE}/image9.png`,
  [normalizePersonName("Amitha Benny")]: `${PERSON_IMAGE_BASE}/image7.jpg`,
  [normalizePersonName("Shaijo P.S")]: `${PERSON_IMAGE_BASE}/image16.png`,
  [normalizePersonName("Shaijo P. S.")]: `${PERSON_IMAGE_BASE}/image16.png`,
  [normalizePersonName("Sibichan Thomas")]: `${PERSON_IMAGE_BASE}/image14.png`,
  [normalizePersonName("Manu Joseph")]: `${PERSON_IMAGE_BASE}/image11.jpg`,
  [normalizePersonName("Soumya Manuel")]: `${PERSON_IMAGE_BASE}/image15.jpg`,
  [normalizePersonName("Monisha Mohandas")]: `${PERSON_IMAGE_BASE}/image8.png`,

  // Non-teaching staff
  [normalizePersonName("Sreekala K K")]: `${PERSON_IMAGE_BASE}/image2.jpg`,
  [normalizePersonName("Jins Cheriyan")]: `${PERSON_IMAGE_BASE}/image22.jpg`,
  [normalizePersonName("Marykutty V C")]: `${PERSON_IMAGE_BASE}/image10.jpg`,
  [normalizePersonName("Sinoj George")]: `${PERSON_IMAGE_BASE}/image19.jpg`,
  [normalizePersonName("Valsa Devasia")]: `${PERSON_IMAGE_BASE}/image27.jpg`,
  [normalizePersonName("Suja Sibi")]: `${PERSON_IMAGE_BASE}/image29.jpg`,
  [normalizePersonName("Sebastian C M")]: `${PERSON_IMAGE_BASE}/non-teaching-staff.jpeg`,
};

export function getPersonImageSrc(personName: string): string | undefined {
  return PERSON_IMAGE_BY_NAME[normalizePersonName(personName)];
}

