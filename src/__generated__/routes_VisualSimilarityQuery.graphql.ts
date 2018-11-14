/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type routes_VisualSimilarityQueryVariables = {
    readonly artworkID: string;
};
export type routes_VisualSimilarityQueryResponse = {
    readonly artwork: ({}) | null;
};



/*
query routes_VisualSimilarityQuery(
  $artworkID: String!
) {
  artwork(id: $artworkID) {
    ...OriginArtwork_artwork
    __id
  }
}

fragment OriginArtwork_artwork on Artwork {
  id
  images {
    image_url
  }
  __id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artworkID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "routes_VisualSimilarityQuery",
  "id": null,
  "text": "query routes_VisualSimilarityQuery(\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    ...OriginArtwork_artwork\n    __id\n  }\n}\n\nfragment OriginArtwork_artwork on Artwork {\n  id\n  images {\n    image_url\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_VisualSimilarityQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "OriginArtwork_artwork",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_VisualSimilarityQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": false,
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
          v2
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'be1320acee7b7a848c9b259174bf11a5';
export default node;
