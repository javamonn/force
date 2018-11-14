/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkDetails_artwork = {
    readonly articles: ReadonlyArray<({
        readonly id: string;
    }) | null> | null;
    readonly literature: string | null;
    readonly exhibition_history: string | null;
    readonly provenance: string | null;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML",
    "type": "Format"
  }
];
return {
  "kind": "Fragment",
  "name": "ArtworkDetails_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAboutTheWorkFromArtsy_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAboutTheWorkFromPartner_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsChecklist_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAdditionalInfo_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsArticles_artwork",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "articles",
      "storageKey": "articles(size:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 10,
          "type": "Int"
        }
      ],
      "concreteType": "Article",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        v0
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "literature",
      "args": v1,
      "storageKey": "literature(format:\"HTML\")"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "exhibition_history",
      "args": v1,
      "storageKey": "exhibition_history(format:\"HTML\")"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "provenance",
      "args": v1,
      "storageKey": "provenance(format:\"HTML\")"
    },
    v0
  ]
};
})();
(node as any).hash = '0d56fc6679fb1ab42d5d5d6d1f4d9ece';
export default node;
