/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MenuListCategory_menuCategory$ref = any;
export type MenuListQueryVariables = {||};
export type MenuListQueryResponse = {|
  +menu: $ReadOnlyArray<?{|
    +$fragmentRefs: MenuListCategory_menuCategory$ref
  |}>
|};
export type MenuListQuery = {|
  variables: MenuListQueryVariables,
  response: MenuListQueryResponse,
|};
*/


/*
query MenuListQuery {
  menu {
    ...MenuListCategory_menuCategory
  }
}

fragment MenuListCategory_menuCategory on MenuCategory {
  id
  title
  items {
    ...MenuListItem_menuItem
  }
}

fragment MenuListItem_menuItem on MenuItem {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MenuListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MenuCategory",
        "kind": "LinkedField",
        "name": "menu",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuListCategory_menuCategory"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MenuListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MenuCategory",
        "kind": "LinkedField",
        "name": "menu",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MenuItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MenuListQuery",
    "operationKind": "query",
    "text": "query MenuListQuery {\n  menu {\n    ...MenuListCategory_menuCategory\n  }\n}\n\nfragment MenuListCategory_menuCategory on MenuCategory {\n  id\n  title\n  items {\n    ...MenuListItem_menuItem\n  }\n}\n\nfragment MenuListItem_menuItem on MenuItem {\n  id\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef78bd9121f9ecc027dd8019968022e1';

module.exports = node;
