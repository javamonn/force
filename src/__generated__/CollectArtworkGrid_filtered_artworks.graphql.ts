/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type CollectArtworkGrid_filtered_artworks = {
    readonly __id: string;
    readonly artworks: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({}) | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
            }) | null;
        }) | null> | null;
    }) | null;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CollectArtworkGrid_filtered_artworks",
  "type": "FilterArtworks",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 30
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": ""
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": "artworks",
      "name": "artworks_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first",
          "type": "Int"
        }
      ],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageCursors",
          "storageKey": null,
          "args": null,
          "concreteType": "PageCursors",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Pagination_pageCursors",
              "args": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "ArtworkGrid_artworks",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtworkEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Artwork",
              "plural": false,
              "selections": [
                v0
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '8941613d431c944c4faac2e1591ab536';
export default node;
