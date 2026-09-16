export const projectTypes = Object.freeze([
  {
    id: "interior",
    label: "Interior Design",
    baseRate: 1800,
  },
  {
    id: "construction",
    label: "Construction",
    baseRate: 2200,
  },
  {
    id: "renovation",
    label: "Renovation",
    baseRate: 1600,
  },
  {
    id: "turnkey",
    label: "Turnkey Solution",
    baseRate: 2800,
  },
]);

export const propertyTypes = Object.freeze([
  {
    id: "apartment",
    label: "Apartment",
  },
  {
    id: "villa",
    label: "Villa",
  },
  {
    id: "house",
    label: "Independent House",
  },
  {
    id: "office",
    label: "Office",
  },
]);

export const designLevels = Object.freeze([
  {
    id: "essential",
    label: "Essential",
    multiplier: 1,
    description: "Functional design with practical finishes.",
  },
  {
    id: "premium",
    label: "Premium",
    multiplier: 1.3,
    description: "Higher-quality materials with refined detailing.",
  },
  {
    id: "luxury",
    label: "Luxury",
    multiplier: 1.65,
    description:
      "Premium materials, custom detailing, and elevated finishes.",
  },
]);

export const calculatorDefaults = Object.freeze({
  projectType: "interior",
  propertyType: "apartment",
  area: 1000,
  designLevel: "premium",
});