export interface Item {
    id: number;    
    name: string;   
    description: string;
    price: number;
    created_at: string; 
    modified_at: string;  
    category_ids: number[];
}