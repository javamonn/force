/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkGrid_artist = {
    readonly artworks_connection: ({}) | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkGrid_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks_connection",
      "storageKey": "artworks_connection(first:4)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 4,
          "type": "Int"
        }
      ],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ArtworkGrid_artworks",
          "args": null
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
(node as any).hash = 'd6f44c36bb29cb02e0ef54f09915070f';
export default node;
