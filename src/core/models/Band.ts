
export interface Band {
    contactName: string;
    genre: string;
    members: Member[];
    numOfMembers: number;
    performerName: string;
    isActive: boolean;
    id: string
}

export interface Member {
    associatedArtists: string;
    instruments: string;
    name: string
}