import { Low, JSONFile } from "lowdb";

let libDB!: LibDB;
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

function OpenLibDB(file: string) {
  libDB = new LibDB(file);
}

export { OpenLibDB, libDB };
