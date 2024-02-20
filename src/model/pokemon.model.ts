
export interface PokemonModel {
    id: number;
    nome: string;
    tamanho: string;
    imagem: string;
    stats?: {
        hp: number;
        ataque: number;
        defesa: number;
        ataque_especial: number;
        defesa_especial: number;
        velocidade: number;
        total: number;    
    }
}