// Exporter une interface pour typer un objet
export interface PostModel {
    // Rendre un paramètre constant => readonly
    // Rendre un paramètre optionnel => param?: type
    readonly id?: number,
    
    title: string,
    description: string,
    content: string,
    cover: string
}