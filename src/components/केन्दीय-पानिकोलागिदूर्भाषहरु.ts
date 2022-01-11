import { proxy } from "@constl/ipa";

import { client } from "@constl/ipa";
import { valid } from "@constl/ipa";
import { réseau } from "@constl/ipa";

import { डाता_संरचना } from "./डाता_संरचना";

import {
  मिति_स्तम्भ_पहिचान,
  चित्र_स्तम्भ_पहिचान,
  वर्षा_स्तम्भ_पहिचान,
  अकांश_स्तम्भ_पहिचान,
  देशान्तर_स्तम्भ_पहिचान,
  उचाई_स्तम्भ_पहिचान,
  S4W_तालिका_अद्वितीय_कुञ्जी_शब्द,
  S4W_कुञ्जी_शब्द,
  temp_स्तम्भ_पहिचान
} from "./विन्यास";

export type S4W_डाता = {
  [मिति_स्तम्भ_पहिचान]: number;
  [चित्र_स्तम्भ_पहिचान]: string;
  [वर्षा_स्तम्भ_पहिचान]: number;
  [अकांश_स्तम्भ_पहिचान]: number;
  [देशान्तर_स्तम्भ_पहिचान]: number;
  [उचाई_स्तम्भ_पहिचान]: number;
  [temp_स्तम्भ_पहिचान]: number;
};

export default class ग्राहक {
  तारामंडल: proxy.proxy.ProxyClientConstellation;

  constructor() {
    const मूल_खाता_पहिचान = localStorage.getItem("मूल खाता पहिचान") || undefined;
    this.तारामंडल = proxy.ipa.default(मूल_खाता_पहिचान);
  }

  async तालिका_पहिचान_पछ्याउनुहोस(
    पछ्याउँवाला_फलन: client.schémaFonctionSuivi<string | undefined>
  ): Promise<client.schémaFonctionOublier> {
    const yy = await this.तारामंडल.bds!.suivreTableauUniqueDeBdUnique(
      डाता_संरचना,
      S4W_कुञ्जी_शब्द,
      S4W_तालिका_अद्वितीय_कुञ्जी_शब्द,
      पछ्याउँवाला_फलन
    );
    return yy;
  }

  async डाता_थप्नुहोस्(
    तालिका_पहिचान: string,
    मिति: Date,
    //चित्र: File,
    वर्षा: number,
    अकांश: number,
    देशान्तर: number,
    उचाई: number,
    temp: number
  ): Promise<void> {
    //const चित्र_पहिचान = await this.तारामंडल.ajouterÀSFIP(चित्र);

    const नयाँ = {
      [मिति_स्तम्भ_पहिचान]: मिति.getTime(),
      // [चित्र_स्तम्भ_पहिचान]: {
      //   cid: चित्र_पहिचान,
      //   ext: चित्र.name.split(".").pop(),
      // },
      [वर्षा_स्तम्भ_पहिचान]: वर्षा,
      [अकांश_स्तम्भ_पहिचान]: अकांश,
      [देशान्तर_स्तम्भ_पहिचान]: देशान्तर,
      [उचाई_स्तम्भ_पहिचान]: उचाई,
      [temp_स्तम्भ_पहिचान]: temp
    };
    await this.तारामंडल.tableaux!.ajouterÉlément(तालिका_पहिचान, नयाँ);
  }

  async डाता_मेटाउनुहोस्(रेखा: string): Promise<void> {
    const तालिका_पहिचान = await client.uneFois(
      async (फ: client.schémaFonctionSuivi<string | undefined>) => {
        return await this.तालिका_पहिचान_पछ्याउनुहोस(फ);
      }
    );
    if (तालिका_पहिचान) {
      await this.तारामंडल.tableaux!.effacerÉlément(तालिका_पहिचान, रेखा);
    }
  }

  async मारो_डाता_पछ्याउनुहोस्(
    पछ्याउँवाला_फलन: client.schémaFonctionSuivi<
      valid.élémentDonnées<S4W_डाता>[]
    >
  ): Promise<client.schémaFonctionOublier> {
    let डाताहरु_बिर्सनुहोस्: client.schémaFonctionOublier;
    let तालिका_पहिचान: string | undefined;

    const तालिका_पछ्याउँवाला_फलन = async (नयाँ_तालिका_पहिचान?: string) => {
      if (तालिका_पहिचान === नयाँ_तालिका_पहिचान) return;
      तालिका_पहिचान = नयाँ_तालिका_पहिचान;
      if (डाताहरु_बिर्सनुहोस्) डाताहरु_बिर्सनुहोस्();
      if (तालिका_पहिचान) {
        डाताहरु_बिर्सनुहोस् = await this.तारामंडल.tableaux!.suivreDonnées(
          तालिका_पहिचान,
          पछ्याउँवाला_फलन
        );
      }
    };
    const तालिका_पहिचान_बिर्सनुुहोस् = await this.तालिका_पहिचान_पछ्याउनुहोस(
      तालिका_पछ्याउँवाला_फलन
    );
    return () => {
      तालिका_पहिचान_बिर्सनुुहोस्();
      if (डाताहरु_बिर्सनुहोस्) डाताहरु_बिर्सनुहोस्();
    };
  }

  async सबैको_डाता_पछ्याउनुहोस्(
    पछ्याउँवाला_फलन: client.schémaFonctionSuivi<
      réseau.élémentDeMembre<S4W_डाता>[]
    >
  ): Promise<client.schémaFonctionOublier> {
    return await this.तारामंडल.réseau!.suivreÉlémentsDeTableauxUniques(
      S4W_कुञ्जी_शब्द,
      S4W_तालिका_अद्वितीय_कुञ्जी_शब्द,
      पछ्याउँवाला_फलन
    );
  }
}
