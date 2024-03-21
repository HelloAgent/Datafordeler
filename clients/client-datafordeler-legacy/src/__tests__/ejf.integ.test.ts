import { Datafordeler } from "../datafordeler";

it('Ejerskifte should return "bfeNummer"in response with version 2.0.0', async () => {
  const datafordeler = new Datafordeler();
  datafordeler.createAgent({
    localFilePath: process.env.CERT_FILE_PATH as string,
    passphrase: process.env.CERT_PASS_PHRASE as string,
  });

  const { features } = await datafordeler.EJF().ejerskifte({ BFEnr: "6011585" });

  expect(features[0].properties.bfeNummer).toBe("6011585");
});
