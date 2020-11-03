import { Types } from "../sharedTypes";

export interface eventRequest {
  datefrom: string;
  dateto: string;
  page?: number;
  pagesize?: number;
}

export interface eventResponse extends Array<Message> {}

interface Message {
  Id: number; //123456789
  Message: {
    Grunddatabesked: {
      Hændelsesbesked: {
        beskedversion: string; //"1.0";
        beskedID: string; //uuid;
        Beskedkuvert: {
          Filtreringsdata: {
            beskedtype: string; //"EjerskabDelete";
            beskedansvarligAktør: "";
            RelateretObjekt: [
              {
                objektID: string; //"11111111";
                objekttype: string; //"bestemtFastEjendomBFENr";
              },
              {
                objektID: string; //cprnr e.g. "0101801234" (01-01-1980-1234);
                objekttype: string; //"ejendePersonPersonNr";
              }
            ];
            Objektregistrering: [
              {
                registreringsaktør: string; //"0706";
                registreringstid: string; //"2020-09-29T05:41:54.0000000+02:00";
                status: string; //"historisk";
                objektansvarligAktør: string; //"Geodatastyrelsen";
                objektID: string; //uuid;
                objekttype: string; //"Ejerskab";
                objekthandling: string; //"Forretningshaendelse:Endeligt skøde;Forretningsproces:Manuel opdatering";
                opgaveemne: string; //"54.15";
                registreringsID: string; // formatted like uuid,dateTimeString - "e1e1e1e1-ab12-c34d-85a7-3d702167468e,2020-09-29T05:41:54.000000+02:00";
                Stedbestemmelse: {
                  stedbestemmelseReference: string; //"http://data.gov.dk/dagi/kommune#0706";
                };
              }
            ];
            tværgåendeProces: "Manuel opdatering";
          };
          Leveranceinformation: {
            dannelsestidspunkt: string; //"2020-09-29T07:46:57.0134940+02:00";
            transaktionsID: string; //uuid;
            kildesystem: string; //"http://data.gov.dk/id/itsystem/basicdata#uuid";
            sikkerhedsklassificering: "http://data.gov.dk/vocabulary/security/confidentiality#Confidential";
          };
        };
        Beskeddata: [
          {
            Objektdata: {
              entityType: string;
              attributes: { [k: string]: string };
            };
          }
        ];
      };
    };
  };
  Format: string; //"Json"
  Timestamp: string; //"2020-09-29T03:47:47.35013Z"
}
