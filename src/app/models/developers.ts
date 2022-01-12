export class IDevelopers {
  constructor(name: string, avatar: string) {
    this.name = name;
    this.avatar = avatar;
  }
}

export interface IDevelopers {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}
