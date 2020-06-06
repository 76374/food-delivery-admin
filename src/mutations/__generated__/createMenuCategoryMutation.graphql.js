/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createMenuCategoryMutationVariables = {|
  title: string
|};
export type createMenuCategoryMutationResponse = {|
  +createMenuCategory: ?{|
    +id: string
  |}
|};
export type createMenuCategoryMutation = {|
  variables: createMenuCategoryMutationVariables,
  response: createMenuCategoryMutationResponse,
|};
*/


/*
mutation createMenuCategoryMutation(
  $title: String!
) {
  createMenuCategory(title: $title) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "MenuCategory",
    "kind": "LinkedField",
    "name": "createMenuCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createMenuCategoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createMenuCategoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "createMenuCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation createMenuCategoryMutation(\n  $title: String!\n) {\n  createMenuCategory(title: $title) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b2f1c7804fc06d08d03dae66f4f358c';

module.exports = node;
