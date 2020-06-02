/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteMenuItemMutationVariables = {|
  id: string
|};
export type deleteMenuItemMutationResponse = {|
  +deleteMenuItem: ?boolean
|};
export type deleteMenuItemMutation = {|
  variables: deleteMenuItemMutationVariables,
  response: deleteMenuItemMutationResponse,
|};
*/


/*
mutation deleteMenuItemMutation(
  $id: String!
) {
  deleteMenuItem(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteMenuItem",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteMenuItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteMenuItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "deleteMenuItemMutation",
    "operationKind": "mutation",
    "text": "mutation deleteMenuItemMutation(\n  $id: String!\n) {\n  deleteMenuItem(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6010b72c732c2c0f19d3e37318905edf';

module.exports = node;
