/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type FollowArtistPopover_suggested = {
    readonly related: ({
        readonly suggested: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __id: string;
                }) | null;
            }) | null> | null;
        }) | null;
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
  "name": "FollowArtistPopover_suggested",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "related",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistRelatedData",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "suggested",
          "storageKey": "suggested(exclude_followed_artists:true,first:3)",
          "args": [
            {
              "kind": "Literal",
              "name": "exclude_followed_artists",
              "value": true,
              "type": "Boolean"
            },
            {
              "kind": "Literal",
              "name": "first",
              "value": 3,
              "type": "Int"
            }
          ],
          "concreteType": "ArtistConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "ArtistEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Artist",
                  "plural": false,
                  "selections": [
                    v0,
                    {
                      "kind": "FragmentSpread",
                      "name": "FollowArtistPopoverRow_artist",
                      "args": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    v0
  ]
};
})();
(node as any).hash = '34fdbb36224da332bca2449262f66464';
export default node;
