import { Types } from "../../sharedTypes";
export declare namespace Handelsoplysninger {
    interface Request {
        BFEnr?: string;
        HandelsOplysningsId?: Types.id_lokalId;
        Registreringstid?: Date;
        Virkningstid?: Date;
        Status?: "gældnede" | "tilbagerullet" | "historisk";
    }
    type Forretningshaendelse = "Ejerskifte tilbageført" | "Landsdækkende kørsel" | "Opdatering af ejendomsadministrator" | "Annulleret personnummer" | "Personnummer nedlagt pga. dobbeltregistrering" | "Person død" | "Person udrejst" | "Person forsvundet" | "Opdatering af administrator for person eller virksomhed" | "Opdatering af ejer uden registreret CPR- eller CVR nummer" | "Ophør af en produktionsenhed" | "Ophør af virksomhed" | "Skift af virksomhedsform" | "Administrator af ejerskab" | "Ægtepagt adkomst" | "Aflysning af betinget skøde" | "Aflyst eller annulleret ejerskab" | "Anden adkomst" | "Auktionsskøde" | "Betinget bodeling" | "Betinget skøde" | "Bodeling" | "Ejendomsdom" | "Indberettet ejerskifte" | "Endelig indførsel adkomst" | "Endeligt skøde" | "Hævd" | "Kopieret ejerskab til ny ejendom" | "Meddelelse fast ejendom adkomst" | "Meddelelse om tvangsauktion" | "Navneændring" | "Opdatering af person- eller virksomhedsoplysninger" | "Opretning af ejerandele" | "Oprettet ejerskab af ny ejendom" | "Rettelse af ejerskab" | "Skifteretsattest" | "SkifteretsattestÆgtefælle" | "Påtegning adkomst" | "Ukendt - konverteret fra ESR";
    type Forretningsprocess = "Hændelse fra Digital Tinglysning" | "Konvertering fra ESR" | "Landsdækkende kørsel" | "Manuel opdatering" | "Hændelse fra CPR" | "Hændelse fra CVR" | "Opdatering fra Matriklen" | "Opdatering fra Skifte- eller Fogedret";
    interface Handelsoplysninger {
        id_namespace: string;
        id_lokalId: string;
        behandlingsID: string;
        forretningshaendelse: Forretningshaendelse;
        forretningsomraade: "54.15";
        forretningsproces: Forretningsprocess;
        status: "gældnede" | "tilbagerullet" | "historisk";
        registreringFra: string;
        registreringTil: string | null;
        registreringsaktoer: string;
        virkningFra: string;
        virkningTil: string | null;
        virkningsaktoer: string;
        afstaaelsesdato: string | null;
        betalingsforpligtelsesdato: string | null;
        bygningerOmfattet: string | null;
        loesoeresum: number | null;
        samletKoebesum: number | null;
        skoedetekst: string | null;
        koebsaftaleDato: string | null;
        valutakode: string | null;
        kontantKoebesum: number | null;
        entreprisesum: number | null;
        husdyrbesaetningsum: number | null;
        ejerskifte: string[];
    }
    interface HandelsoplysningerFeature {
        properties: Handelsoplysninger;
        type: "Feature";
    }
    interface Response {
        features: HandelsoplysningerFeature[];
        type: "FeatureCollection";
    }
}
