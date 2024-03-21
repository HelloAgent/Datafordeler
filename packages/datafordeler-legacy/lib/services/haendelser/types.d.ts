export interface Request {
    datefrom: string;
    dateto: string;
    page?: number;
    pagesize?: number;
}
export declare type Response = Message[];
interface Message {
    Id: number;
    Message: {
        Grunddatabesked: {
            Hændelsesbesked: {
                beskedversion: string;
                beskedID: string;
                Beskedkuvert: {
                    Filtreringsdata: {
                        beskedtype: string;
                        beskedansvarligAktør: "";
                        RelateretObjekt: [
                            {
                                objektID: string;
                                objekttype: string;
                            },
                            {
                                objektID: string;
                                objekttype: string;
                            }
                        ];
                        Objektregistrering: [
                            {
                                registreringsaktør: string;
                                registreringstid: string;
                                status: string;
                                objektansvarligAktør: string;
                                objektID: string;
                                objekttype: string;
                                objekthandling: string;
                                opgaveemne: string;
                                registreringsID: string;
                                Stedbestemmelse: {
                                    stedbestemmelseReference: string;
                                };
                            }
                        ];
                        tværgåendeProces: "Manuel opdatering";
                    };
                    Leveranceinformation: {
                        dannelsestidspunkt: string;
                        transaktionsID: string;
                        kildesystem: string;
                        sikkerhedsklassificering: string;
                    };
                };
                Beskeddata: [
                    {
                        Objektdata?: {
                            entityType: string;
                            attributes: {
                                [k: string]: string | number;
                            };
                        };
                        Objektreference?: unknown;
                    }
                ];
            };
        };
    };
    Format: string;
    Timestamp: string;
}
export {};
