/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkSidebarExtraLinks_artwork = {
    readonly __id: string;
    readonly is_in_auction: boolean | null;
    readonly is_for_sale: boolean | null;
    readonly is_acquireable: boolean | null;
    readonly is_inquireable: boolean | null;
    readonly artists: ReadonlyArray<({
        readonly __id: string;
        readonly is_consignable: boolean | null;
    }) | null> | null;
    readonly sale: ({
        readonly is_closed: boolean | null;
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
  "name": "ArtworkSidebarExtraLinks_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_in_auction",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_for_sale",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_acquireable",
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
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_consignable",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_closed",
          "args": null,
          "storageKey": null
        },
        v0
      ]
    }
  ]
};
})();
(node as any).hash = 'ad4704153be0bb6ae2063dd305417241';
export default node;
