/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MenuListCategory_menuCategory$ref = any;
export type MenuListQueryVariables = {|
  date: any
|};
export type MenuListQueryResponse = {|
  +menu: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: MenuListCategory_menuCategory$ref,
  |}>,
  +menuSchedule: ?{|
    +categories: $ReadOnlyArray<?{|
      +category: {|
        +id: string
      |},
      +items: $ReadOnlyArray<?{|
        +id: string
      |}>,
    |}>
  |},
|};
export type MenuListQuery = {|
  variables: MenuListQueryVariables,
  response: MenuListQueryResponse,
|};
*/


/*
query MenuListQuery(
  $date: Date!
) {
  menu {
    id
    ...MenuListCategory_menuCategory
  }
  menuSchedule(date: $date) {
    categories {
      category {
        id
      }
      items {
        id
      }
    }
  }
}

fragment MenuListCategory_menuCategory on MenuCategory {
  id
  title
  items {
    id
    ...MenuListItem_menuItem
  }
}

fragment MenuListItem_menuItem on MenuItem {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "date",
    "type": "Date!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "date",
      "variableName": "date"
    }
  ],
  "concreteType": "MenuSchedule",
  "kind": "LinkedField",
  "name": "menuSchedule",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ScheduleCategory",
      "kind": "LinkedField",
      "name": "categories",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MenuCategory",
          "kind": "LinkedField",
          "name": "category",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MenuItem",
          "kind": "LinkedField",
          "name": "items",
          "plural": true,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuListCategory_menuCategory"
          }
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MenuItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MenuListQuery",
    "operationKind": "query",
    "text": "query MenuListQuery(\n  $date: Date!\n) {\n  menu {\n    id\n    ...MenuListCategory_menuCategory\n  }\n  menuSchedule(date: $date) {\n    categories {\n      category {\n        id\n      }\n      items {\n        id\n      }\n    }\n  }\n}\n\nfragment MenuListCategory_menuCategory on MenuCategory {\n  id\n  title\n  items {\n    id\n    ...MenuListItem_menuItem\n  }\n}\n\nfragment MenuListItem_menuItem on MenuItem {\n  id\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a75cc3849e62b9ffda3d5f797caa720e';

module.exports = node;
