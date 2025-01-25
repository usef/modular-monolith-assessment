export class VoisResponse {
    constructor(private message: "success" | "error", private data: any) {
    }
}