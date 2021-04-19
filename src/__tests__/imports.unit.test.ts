import ClientDefault from "../datafordeler";
import { Datafordeler, DAR, EJF, Haendelser } from "../datafordeler";
import { Service, Client } from "../core";

describe("Passive test for imports", () => {
  test("Client default import", () => {
    const client = new ClientDefault();
    expect(client).toBeInstanceOf(Client);
  });

  test("Client import", () => {
    const client = new Datafordeler();
    expect(client).toBeInstanceOf(Client);
  });

  test("Dar import", () => {
    const client = new DAR({});
    expect(client).toBeInstanceOf(Service);
  });

  test("EJF import", () => {
    const client = new EJF({});
    expect(client).toBeInstanceOf(Service);
  });

  test("Haendelser import", () => {
    const client = new Haendelser({});
    expect(client).toBeInstanceOf(Service);
  });
});
