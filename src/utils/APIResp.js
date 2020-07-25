export default async name => {
  const { results } = await (
    await fetch(
      `https://superheroapi.com/api.php/${process.env.VUE_APP_KEY}/search/${name}`,
    )
  ).json();

  if (results) {
    return results.map(
      ({ id, name, powerstats, biography, work, connections, image }) => {
        const {
          'full-name': fullName,
          'place-of-birth': placeOfBirth,
          'first-appearance': firstAppearance,
          publisher,
          alignment,
        } = biography;
        const { occupation } = work;
        const { 'group-affiliation': groups } = connections;
        return {
          id,
          name,
          powerstats,
          fullName,
          placeOfBirth,
          firstAppearance,
          publisher,
          alignment,
          occupation,
          groups,
          img: image.url,
        };
      },
    );
  }

  return { error: 'NA' };
};
