import React from "react";
// {
//     id: crypto.randomUUID(),
//     image: './images/eleanor-brooke-62ZrBo3PoKc-unsplash.jpg',
//     price: '$1,342,000',
//     location: 'Kadıköy, İstanbul',
//     squareFeet: '3,752',
//     acres: 4.7,
//     bedrooms: 5,
//     bathrooms: 4,
//     otherRooms: 6,
//     yearBuilt: 1902,
//     garage: false,
//     airConditioning: false,
//     heating: true,
//     haunted: true,
//   },
const HouseCard = ({ house, index, array }) => {
  function backToMorse(key) {
    const morsification = {
      price: "Fiyat",
      location: "Lokasyon",
      squareFeet: "Metrekare",
      acres: "Dönüm",
      yearBuilt: "Yapım Yılı",
      bedrooms: "Yatak Odası",
      bathrooms: "Banyo",
      otherRooms: "Diğer Odalar",
      garage: "Garaj",
      airConditioning: "Klima",
      heating: "Isıtma Sistemi",
      haunted: "Lanetli",
    };
    return morsification[key];
  }

  return (
    <div className="house-card">
      <p>
        {array.length} / {index + 1}
      </p>
      <img src={house.image} />
      <div>
        <ul>
          {Object.keys(house).map((thing, index) => {
            if (thing === "id" || thing === "image") return null;
            return (
              <li key={thing}>
                <span>{backToMorse(thing)}:</span>
                {typeof house[thing] === "boolean"
                  ? house[thing]
                    ? "Evet"
                    : "Hayır"
                  : house[thing]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HouseCard;
