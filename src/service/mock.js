const MockAdapter = require("axios-mock-adapter");

const data = [1, 2, 3, 4];
export default axios => {
  const mock = new MockAdapter(axios);

  // Response menus
  mock.onGet("/data").reply(200, data);
};
