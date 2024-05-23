import Client from "./models/client.model.js";
import User from "./models/user.model.js";
import Pet from "./models/pet.model.js";

await Client.sync();
await User.sync();
await Pet.sync();

Client.findAll().then(res => {
  for(let r of res) {
    console.log(r.dataValues);
  }
})