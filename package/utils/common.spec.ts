import { createApp } from "vue";
import { pascalToCamel, withInstall } from "./common";

describe("utils common", () => {
  it("withInstall", () => {
    const app = createApp({});
    const Message = withInstall({
      name: "l-message",
      template: "<p>{{ msg }}</p>",
      props: ["msg"],
    });
    expect(Message).toHaveProperty("install");
    app.use(Message);
  });
  it("PascalToCamel", () => {
    const data = [
      ["OutOfMemoryException", "out-of-memory-exception"],
      ["DateFormat", "date-format"],
      ["DatabaseConnection", "database-connection"],
      ["LinkedList", "linked-list"],
      ["EventHandler", "event-handler"],
    ];
    data.forEach((item) => {
      expect(pascalToCamel(item[0])).toEqual(item[1]);
    });
  });
});
