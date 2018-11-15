/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type SimilarArtworkGridQueryRenderer_artwork = {
    readonly id: string;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "SimilarArtworkGridQueryRenderer_artwork",
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
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'b9e573f7c3f10e6309115d309c106705';
export default node;
