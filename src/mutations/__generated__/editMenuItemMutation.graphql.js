/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuItemInput = {|
  title: string,
  price: number,
  menuCategory: string,
|};
export type editMenuItemMutationVariables = {|
  id: string,
  menuItem: MenuItemInput,
|};
export type editMenuItemMutationResponse = {|
  +editMenuItem: ?{|
    +id: string
  |}
|};
export type editMenuItemMutation = {|
  variables: editMenuItemMutationVariables,
  response: editMenuItemMutationResponse,
|};
*/


/*
mutation editMenuItemMutation(
  $id: String!
  $menuItem: MenuItemInput!
) {
  editMenuItem(id: $id, menuItem: $menuItem) {
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
    "name": "menuItem",
    "type": "MenuItemInput!"
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
        "name": "menuItem",
        "variableName": "menuItem"
      }
    ],
    "concreteType": "MenuItem",
    "kind": "LinkedField",
    "name": "editMenuItem",
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
    "name": "editMenuItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "editMenuItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "editMenuItemMutation",
    "operationKind": "mutation",
    "text": "mutation editMenuItemMutation(\n  $id: String!\n  $menuItem: MenuItemInput!\n) {\n  editMenuItem(id: $id, menuItem: $menuItem) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '836bee5623a2d6a8f2dacd999684c96c';

module.exports = node;
