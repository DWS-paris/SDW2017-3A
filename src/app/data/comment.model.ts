// Exporter une interface pour typer un objet
export interface CommentModel {
    // Rendre un paramètre constant => readonly
    // Rendre un paramètre optionnel => param?: type
    readonly id?: number,
    
    postId?: number,
    content: string,
    author: string
}