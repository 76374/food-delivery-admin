/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setScheduleMutationVariables = {|
  items: $ReadOnlyArray<string>,
  date: any,
|};
export type setScheduleMutationResponse = {|
  +setSchedule: ?string
|};
export type setScheduleMutation = {|
  variables: setScheduleMutationVariables,
  response: setScheduleMutationResponse,
|};
*/


/*
mutation setScheduleMutation(
  $items: [String!]!
  $date: Date!
) {
  setSchedule(items: $items, date: $date)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "items",
    "type": "[String!]!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "date",
    "type": "Date!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "date",
        "variableName": "date"
      },
      {
        "kind": "Variable",
        "name": "items",
        "variableName": "items"
      }
    ],
    "kind": "ScalarField",
    "name": "setSchedule",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "setScheduleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "setScheduleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "setScheduleMutation",
    "operationKind": "mutation",
    "text": "mutation setScheduleMutation(\n  $items: [String!]!\n  $date: Date!\n) {\n  setSchedule(items: $items, date: $date)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecc88a20e277d6a0d275ffcdf72d701f';

module.exports = node;
