export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnail:string;
    videoUrl: string;

    constructor(obj? : any){ //obj? : any    idea is that we want create new SearchResult and pass in an object containing the keys we want to specify 
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnail = obj && obj.thumbnail || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;

    }
}