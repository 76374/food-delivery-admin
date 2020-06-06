/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteMenuCategoryMutationVariables = {|
  id: string
|};
export type deleteMenuCategoryMutationResponse = {|
  +deleteMenuCategory: ?any
|};
export type deleteMenuCategoryMutation = {|
  variables: deleteMenuCategoryMutationVariables,
  response: deleteMenuCategoryMutationResponse,
|};
*/


/*
mutation deleteMenuCategoryMutation(
  $id: String!
) {
  deleteMenuCategory(id: $id)
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
    "name": "deleteMenuCategory",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteMenuCategoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteMenuCategoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "deleteMenuCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation deleteMenuCategoryMutation(\n  $id: String!\n) {\n  deleteMenuCategory(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8352c35b463aac266624e0dc40d9bdc';

module.exports = node;
