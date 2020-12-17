import { expect } from "chai";

let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);
const url = "http://localhost:3001";

describe("consulta: ",  () => {
  it("consulta", (done) => {
    chai
      .request(url)
      .post("/api/cliente/cliente")

      .send({
        chanel: "APP",
        td_digit: 2569,
        dpi: "2236151050201",
        pin: "5426",
      })
      .end(function (err: any, res: any) {
        console.log(res);
        expect(res);
        done();
      });
  });
});
