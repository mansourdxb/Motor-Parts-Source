import { type User, type InsertUser, type Product, type Category, type ContactFormData } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  submitContactForm(data: ContactFormData): Promise<{ id: string; submittedAt: Date }>;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Engine Oil Filter",
    brand: "Bosch",
    partNumber: "OF-123456",
    price: 45,
    category: "Engine Parts",
    type: "OEM",
    image: "/assets/engine-parts.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "Front Brake Pads Set",
    brand: "Brembo",
    partNumber: "BP-789012",
    price: 280,
    originalPrice: 320,
    category: "Brake Systems",
    type: "OEM",
    image: "/assets/brake-parts.jpg",
    inStock: true,
  },
  {
    id: "3",
    name: "Shock Absorber Kit",
    brand: "Monroe",
    partNumber: "SA-345678",
    price: 520,
    category: "Suspension",
    type: "Aftermarket",
    image: "/assets/suspension-parts.jpg",
    inStock: true,
  },
  {
    id: "4",
    name: "Car Battery 12V",
    brand: "Varta",
    partNumber: "CB-901234",
    price: 380,
    originalPrice: 420,
    category: "Electrical",
    type: "OEM",
    image: "/assets/electrical-parts.jpg",
    inStock: false,
  },
  {
    id: "5",
    name: "Timing Belt Kit",
    brand: "Gates",
    partNumber: "TB-567890",
    price: 195,
    category: "Engine Parts",
    type: "OEM",
    image: "/assets/engine-parts.jpg",
    inStock: true,
  },
  {
    id: "6",
    name: "Clutch Kit Complete",
    brand: "LuK",
    partNumber: "CK-234567",
    price: 750,
    originalPrice: 850,
    category: "Transmission",
    type: "OEM",
    image: "/assets/transmission-parts.jpg",
    inStock: true,
  },
  {
    id: "7",
    name: "Brake Disc Rotor",
    brand: "ATE",
    partNumber: "BD-890123",
    price: 165,
    category: "Brake Systems",
    type: "Aftermarket",
    image: "/assets/brake-parts.jpg",
    inStock: true,
  },
  {
    id: "8",
    name: "Alternator Assembly",
    brand: "Denso",
    partNumber: "ALT-456789",
    price: 620,
    category: "Electrical",
    type: "OEM",
    image: "/assets/electrical-parts.jpg",
    inStock: true,
  },
];

const sampleCategories: Category[] = [
  {
    id: "1",
    name: "Engine Parts",
    image: "/assets/engine-parts.jpg",
    description: "Pistons, gaskets, timing belts, and more",
  },
  {
    id: "2",
    name: "Brake Systems",
    image: "/assets/brake-parts.jpg",
    description: "Brake pads, discs, calipers, and rotors",
  },
  {
    id: "3",
    name: "Suspension",
    image: "/assets/suspension-parts.jpg",
    description: "Shock absorbers, struts, and control arms",
  },
  {
    id: "4",
    name: "Electrical",
    image: "/assets/electrical-parts.jpg",
    description: "Batteries, alternators, and starters",
  },
  {
    id: "5",
    name: "Transmission",
    image: "/assets/transmission-parts.jpg",
    description: "Clutches, gearboxes, and CV joints",
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Product[];
  private categories: Category[];
  private contactSubmissions: Map<string, ContactFormData & { id: string; submittedAt: Date }>;

  constructor() {
    this.users = new Map();
    this.products = [...sampleProducts];
    this.categories = [...sampleCategories];
    this.contactSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  async getCategories(): Promise<Category[]> {
    return this.categories;
  }

  async submitContactForm(data: ContactFormData): Promise<{ id: string; submittedAt: Date }> {
    const id = randomUUID();
    const submittedAt = new Date();
    this.contactSubmissions.set(id, { ...data, id, submittedAt });
    console.log("Contact form submission:", { id, ...data, submittedAt });
    return { id, submittedAt };
  }
}

export const storage = new MemStorage();
