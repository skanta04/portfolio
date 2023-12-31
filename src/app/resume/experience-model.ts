
export class Experience {
    public imagePath: string;
    public name: string;
    public role: string;
    public date: string;
    public description: string[];
    public location: string;
    public borderColor: string;

    constructor(name: string, role: string, date: string, desc: string[], imagePath: string, location: string, borderColor: string) {
        this.name = name;
        this.role = role;
        this.date = date;
        this.description = desc;
        this.imagePath = imagePath;
        this.location = location;
        this.borderColor = borderColor;
    }
    
}