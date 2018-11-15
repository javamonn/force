/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SimilarArtworkGridQueryRendererQueryVariables = {
    readonly artworkIDs?: ReadonlyArray<string | null> | null;
};
export type SimilarArtworkGridQueryRendererQueryResponse = {
    readonly artworks: ReadonlyArray<({
        readonly id: string;
        readonly images: ReadonlyArray<({
            readonly image_url: string | null;
        }) | null> | null;
    }) | null> | null;
};



/*
query SimilarArtworkGridQueryRendererQuery(
  $artworkIDs: [String]
) {
  artworks(slugs: $artworkIDs) {
    id
    images {
      image_url
    }
    __id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artworkIDs",
    "type": "[String]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "artworks",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slugs",
        "variableName": "artworkIDs",
        "type": "[String]"
      }
    ],
    "concreteType": "Artwork",
    "plural": true,
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SimilarArtworkGridQueryRendererQuery",
  "id": null,
  "text": "query SimilarArtworkGridQueryRendererQuery(\n  $artworkIDs: [String]\n) {\n  artworks(slugs: $artworkIDs) {\n    id\n    images {\n      image_url\n    }\n    __id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SimilarArtworkGridQueryRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SimilarArtworkGridQueryRendererQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '4c41455726bfbad7830b11c944ca814b';
export default node;
