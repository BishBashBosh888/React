import { Category } from "../types/category";
import { Item } from "../types/item";

export const dummyCategories: Category[] = [
  {
      id: 1,
      name: 'Tank',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  },
  {
      id: 2,
      name: 'Fighter',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  },
  {
      id: 3,
      name: 'Mage',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  },
  {
      id: 4,
      name: 'Marksman',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  }, 
  {
      id: 5,
      name: 'Assassin',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  }, 
  {
      id: 6,
      name: 'Support',
      created_at: '2025-01-25T10:10:00.000Z',
      modified_at: '2025-01-26T11:30:00.000Z',
  }, 
]

export const dummyItems: Item[] = [
  {
    id: 1,
    name: "Doran Blade",
    description: "A sturdy blade that grants early power and sustain, perfect for aggressive laners who seek dominance in the early game",
    price: 450,
    created_at: "2024-02-01T10:30:00Z",
    modified_at: "2024-02-05T12:00:00Z",
    category_ids: [2, 4]
  },
  {
    id: 2,
    name: "Doran Shield",
    description: "A resilient shield that fortifies its bearer, granting sustain against poke and helping endure tough matchups.",
    price: 450,
    created_at: "2024-01-15T08:00:00Z",
    modified_at: "2024-02-02T14:45:00Z",
    category_ids: [1, 2]
  },
  {
    id: 3,
    name: "Doran Ring",
    description: "A mystical ring that empowers mages with extra magic damage and sustain, ensuring their spells never run dry.",
    price: 400,
    created_at: "2024-01-10T16:20:00Z",
    modified_at: "2024-01-20T18:30:00Z",
    category_ids: [3, 6]
  },
  {
    id: 4,
    name: "Cull",
    description: "A gambler’s blade that rewards precise farming, ideal for those who seek gold efficiency in the early game.",
    price: 450,
    created_at: "2024-01-05T12:45:00Z",
    modified_at: "2024-01-25T09:10:00Z",
    category_ids: [4, 5]
  },
  {
    id: 5,
    name: "Dark Seal",
    description: "A forbidden tome that grows in power with each victorious battle, but punishes failure with lost potential.",
    price: 350,
    created_at: "2023-12-20T14:00:00Z",
    modified_at: "2024-01-15T11:30:00Z",
    category_ids: [3, 5]
  },
]