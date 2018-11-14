/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkSidebarPageviews_artwork = {
    readonly id: string;
    readonly pageviews: number | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkSidebarPageviews_artwork",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "pageviews",
      "args": null,
      "storageKey": null
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
(node as any).hash = '996ada1b7eae48a2f838db219595c920';
export default node;
