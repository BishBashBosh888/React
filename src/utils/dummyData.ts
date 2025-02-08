import { Category } from "../types/category";
import { Item } from "../types/item";

export const dummyCategories: Category[] = [
    {
        id: 1,
        name: 'Tank',
        createdAt: '2025-02-01T12:00:00.000Z',
        modifiedAt: '2025-02-02T15:00:00.000Z',
    },
    {
        id: 2,
        name: 'Fighter',
        createdAt: '2025-01-15T08:30:00.000Z',
        modifiedAt: '2025-01-18T09:15:00.000Z',
    },
    {
        id: 3,
        name: 'Mage',
        createdAt: '2025-02-10T14:20:00.000Z',
        modifiedAt: '2025-02-11T16:45:00.000Z',
    },
    {
        id: 4,
        name: 'Marksman',
        createdAt: '2025-01-25T10:10:00.000Z',
        modifiedAt: '2025-01-26T11:30:00.000Z',
    }, 
    {
        id: 5,
        name: 'Assassin',
        createdAt: '2025-01-25T10:10:00.000Z',
        modifiedAt: '2025-01-26T11:30:00.000Z',
    }, 
    {
        id: 6,
        name: 'Support',
        createdAt: '2025-01-25T10:10:00.000Z',
        modifiedAt: '2025-01-26T11:30:00.000Z',
    }, 
]

export const dummyItems: Item[] = [
    {
        id: 1,
        name: "Doran Blade",
        description: "A sturdy blade that grants early power and sustain, perfect for aggressive laners who seek dominance in the early game",
        price: 450,
        createdAt: "2024-02-01T10:30:00Z",
        modifiedAt: "2024-02-05T12:00:00Z",
      },
      {
        id: 2,
        name: "Doran Shield",
        description: "A resilient shield that fortifies its bearer, granting sustain against poke and helping endure tough matchups.",
        price: 450,
        createdAt: "2024-01-15T08:00:00Z",
        modifiedAt: "2024-02-02T14:45:00Z",
      },
      {
        id: 3,
        name: "Doran Ring",
        description: "A mystical ring that empowers mages with extra magic damage and sustain, ensuring their spells never run dry.",
        price: 400,
        createdAt: "2024-01-10T16:20:00Z",
        modifiedAt: "2024-01-20T18:30:00Z",
      },
      {
        id: 4,
        name: "Cull",
        description: "A gambler’s blade that rewards precise farming, ideal for those who seek gold efficiency in the early game.",
        price: 450,
        createdAt: "2024-01-05T12:45:00Z",
        modifiedAt: "2024-01-25T09:10:00Z",
      },
      {
        id: 5,
        name: "Dark Seal",
        description: "A forbidden tome that grows in power with each victorious battle, but punishes failure with lost potential.",
        price: 350,
        createdAt: "2023-12-20T14:00:00Z",
        modifiedAt: "2024-01-15T11:30:00Z",
      },
]