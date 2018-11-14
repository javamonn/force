/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkSidebarCommercial_artwork = {
    readonly __id: string;
    readonly sale_message: string | null;
    readonly is_inquireable: boolean | null;
    readonly edition_sets: ReadonlyArray<({
        readonly __id: string;
    }) | null> | null;
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
  "name": "ArtworkSidebarCommercial_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sale_message",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_inquireable",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edition_sets",
      "storageKey": null,
      "args": null,
      "concreteType": "EditionSet",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "ArtworkSidebarSizeInfo_piece",
          "args": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '669c7d0f6925c8d65a091eec906d463e';
export default node;
