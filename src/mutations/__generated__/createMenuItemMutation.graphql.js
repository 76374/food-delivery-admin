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
export type createMenuItemMutationVariables = {|
  menuItem: MenuItemInput
|};
export type createMenuItemMutationResponse = {|
  +createMenuItem: ?{|
    +id: string
  |}
|};
export type createMenuItemMutation = {|
  variables: createMenuItemMutationVariables,
  response: createMenuItemMutationResponse,
|};
*/


/*
mutation createMenuItemMutation(
  $menuItem: MenuItemInput!
) {
  createMenuItem(menuItem: $menuItem) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "menuItem",
        "variableName": "menuItem"
      }
    ],
    "concreteType": "MenuItem",
    "kind": "LinkedField",
    "name": "createMenuItem",
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
    "name": "createMenuItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createMenuItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "createMenuItemMutation",
    "operationKind": "mutation",
    "text": "mutation createMenuItemMutation(\n  $menuItem: MenuItemInput!\n) {\n  createMenuItem(menuItem: $menuItem) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '12bb0c52ba88656e7de943c31b0ccb87';

module.exports = node;
