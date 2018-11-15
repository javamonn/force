/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type SimilarArtworkGrid_artworks = {
    readonly id: string;
    readonly images: ReadonlyArray<({
        readonly image_url: string | null;
    }) | null> | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "SimilarArtworkGrid_artworks",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "image_url",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '29f9b3721ce6d3a1a672a1073e9523bd';
export default node;
