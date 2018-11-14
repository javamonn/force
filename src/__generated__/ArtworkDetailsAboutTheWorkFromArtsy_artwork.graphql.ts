/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkDetailsAboutTheWorkFromArtsy_artwork = {
    readonly description: string | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkDetailsAboutTheWorkFromArtsy_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "HTML",
          "type": "Format"
        }
      ],
      "storageKey": "description(format:\"HTML\")"
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
(node as any).hash = '621e4eaa61c267369ccc26d7d14d9ef3';
export default node;
