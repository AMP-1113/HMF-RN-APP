export interface Performer {
  name: string;
  genres: string;
  members: Members;
  contact: Contact;
  isActive: boolean;
}

export interface Contact {
  name?: string;
  phone?: string;
  email?: string;
}

export interface Member {
  name: string;
  role: string;
}

export interface Members {
  [key: number]: Member;
}

export interface Venue {
  name: string;
  address: string;
  contact: Contact;
  isActive: boolean;
}

export interface ScheduleSlot {
  date: string;
  performer: number;
  venue: number;
}

export interface FestivalDate {
  start: string;
  end: string;
}

export interface Festival {
  fullName: string;
  shortName: string;
  description: string;
  locations: {
    [key: number]: string;
  };
  dates: {
    [key: number]: FestivalDate;
  };
  venues: {
    [key: number]: Venue;
  };
  performers: {
    [key: number]: Performer;
  };
  schedule: {
    [key: number]: ScheduleSlot;
  };
}
