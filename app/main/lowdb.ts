import { Low, JSONFile } from "lowdb";

type LibData = {
  posts: string[]; // Expect posts to be an array of strings
};

class LibDB {
  file!: JSONFile<LibData>;
  db!: Low<LibData>;
  constructor(file_path: string) {
    this.file = new JSONFile<LibData>(file_path);
    this.db = new Low<LibData>(this.file);
    this.db.read().then(() => {
      this.db.data ||= { posts: [] };
    });
  }
}

export { LibDB };
