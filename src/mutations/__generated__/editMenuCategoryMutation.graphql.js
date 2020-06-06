/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type editMenuCategoryMutationVariables = {|
  id: string,
  title: string,
|};
export type editMenuCategoryMutationResponse = {|
  +editMenuCategory: ?{|
    +id: string
  |}
|};
export type editMenuCategoryMutation = {|
  variables: editMenuCategoryMutationVariables,
  response: editMenuCategoryMutationResponse,
|};
*/


/*
mutation editMenuCategoryMutation(
  $id: String!
  $title: String!
) {
  editMenuCategory(id: $id, title: $title) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!"
  },
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "MenuCategory",
    "kind": "LinkedField",
    "name": "editMenuCategory",
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
    "name": "editMenuCategoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "editMenuCategoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "editMenuCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation editMenuCategoryMutation(\n  $id: String!\n  $title: String!\n) {\n  editMenuCategory(id: $id, title: $title) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61026c101c869f31cd5bf9aa623555f0';

module.exports = node;
