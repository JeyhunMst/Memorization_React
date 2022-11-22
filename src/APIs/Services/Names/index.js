import { HttpClient } from "../HttpClient";

class PeopleService extends HttpClient {
  constructor() {
    super("https://637a596610a6f23f7f923c1f.mockapi.io");
  }

  getAllPosts() {
    return this.get("people");
  }

  postNewPosts(body) {
    return this.post("people", body);
  }

  editPost(id, body) {
    return this.put("people", body, id);
  }
}

export const peopleService = new PeopleService();